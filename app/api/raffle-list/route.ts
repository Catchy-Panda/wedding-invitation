import { NextResponse } from 'next/server';

export async function GET() {
  const NOTION_TOKEN = process.env.NOTION_API_KEY;
  const DB_ID = process.env.NOTION_RSVP_DATABASE_ID;

  // DEBUG: 환경변수 확인
  console.log('[raffle-list] NOTION_API_KEY exists:', !!NOTION_TOKEN, '| length:', NOTION_TOKEN?.length ?? 0);
  console.log('[raffle-list] NOTION_RSVP_DATABASE_ID exists:', !!DB_ID, '| value:', DB_ID);
  console.log('[raffle-list] Fetch URL:', `https://api.notion.com/v1/databases/${DB_ID}/query`);

  if (!NOTION_TOKEN || !DB_ID) {
    return NextResponse.json({ error: '환경변수 없음', detail: `NOTION_API_KEY: ${!!NOTION_TOKEN}, NOTION_RSVP_DATABASE_ID: ${!!DB_ID}` }, { status: 500 });
  }

  const RETRY_DELAYS = [500, 1000];
  const MAX_ATTEMPTS = 3;

  async function fetchWithRetry(url: string, options: RequestInit): Promise<Response> {
    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
      try {
        const resp = await fetch(url, options);
        return resp;
      } catch (err) {
        console.error(`[raffle-list] fetch attempt ${attempt}/${MAX_ATTEMPTS} failed:`, err);
        if (attempt < MAX_ATTEMPTS) {
          const delay = RETRY_DELAYS[attempt - 1];
          console.log(`[raffle-list] retrying in ${delay}ms...`);
          await new Promise((r) => setTimeout(r, delay));
        } else {
          throw err;
        }
      }
    }
    throw new Error('Unreachable');
  }

  try {
    const allNames: string[] = [];
    let cursor: string | undefined = undefined;
    do {
      const body: Record<string, unknown> = {
        page_size: 100,
        filter: { property: '참석여부', select: { equals: '참석할게요' } },
        sorts: [{ timestamp: 'created_time', direction: 'ascending' }],
      };
      if (cursor) body.start_cursor = cursor;
      const resp = await fetchWithRetry(`https://api.notion.com/v1/databases/${DB_ID}/query`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${NOTION_TOKEN}`,
          'Content-Type': 'application/json',
          'Notion-Version': '2022-06-28',
        },
        body: JSON.stringify(body),
        cache: 'no-store',
      });
      if (!resp.ok) {
        const errText = await resp.text();
        return NextResponse.json({ error: 'Notion API 오류', detail: errText }, { status: 500 });
      }
      const data = await resp.json();
      data.results?.forEach((page: Record<string, unknown>) => {
        const props = page.properties as Record<string, unknown>;
        const titleArr = (props?.['이름'] as Record<string, unknown>)?.title as Array<Record<string, unknown>>;
        const name = titleArr?.[0]?.plain_text as string;
        if (name?.trim()) allNames.push(name.trim());
      });
      cursor = data.has_more ? data.next_cursor : undefined;
    } while (cursor);
    return NextResponse.json({ names: allNames, count: allNames.length });
  } catch (err) {
    console.error('[raffle-list] fetch error after retries:', err);
    return NextResponse.json({ error: '서버 오류', detail: String(err), stack: err instanceof Error ? err.stack : undefined }, { status: 500 });
  }
}
