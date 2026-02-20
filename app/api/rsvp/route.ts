import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.NOTION_API_KEY?.trim();
    const databaseId = process.env.NOTION_RSVP_DATABASE_ID?.trim();

    if (!apiKey || !databaseId) {
      return NextResponse.json(
        { error: "서버 환경변수가 설정되지 않았습니다.", detail: { apiKey: !!apiKey, databaseId: !!databaseId } },
        { status: 500 }
      );
    }

    const notion = new Client({ auth: apiKey });

    const { name, side, attendance, message } = await request.json();

    if (!name || !side || !attendance) {
      return NextResponse.json(
        { error: "모든 필드를 입력해주세요.", detail: { name: !!name, side: !!side, attendance: !!attendance } },
        { status: 400 }
      );
    }

    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        이름: {
          title: [{ text: { content: name } }],
        },
        소속: {
          select: { name: side },
        },
        참석여부: {
          select: { name: attendance },
        },
        메시지: {
          rich_text: [{ text: { content: message || "" } }],
        },
      },
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const errBody = error instanceof Error ? error.message : String(error);
    const notionCode = (error as { code?: string }).code;
    const notionStatus = (error as { status?: number }).status;

    console.error("RSVP submission error:", JSON.stringify({ errBody, notionCode, notionStatus }));

    return NextResponse.json(
      { error: "제출 중 오류가 발생했습니다.", detail: errBody, code: notionCode, status: notionStatus },
      { status: 500 }
    );
  }
}
