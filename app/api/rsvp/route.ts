import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_RSVP_DATABASE_ID!;

export async function POST(request: Request) {
  try {
    const { name, side, attendance, message } = await request.json();

    if (!name || !side || !attendance) {
      return NextResponse.json(
        { error: "모든 필드를 입력해주세요." },
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
  } catch (error) {
    console.error("RSVP submission error:", error);
    return NextResponse.json(
      { error: "제출 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
