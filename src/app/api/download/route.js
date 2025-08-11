// src/app/api/download/route.js
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  const type = searchParams.get("type");
  const title = searchParams.get("title");

  if (!url || !type || !title) {
    return NextResponse.json(
      { error: "url, type, and title are required" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();

    return new Response(buffer, {
      status: 200,
      headers: {
        "Content-Disposition": `attachment; filename="${title}${type}"`,
        "Content-Type": "video/mp4",
      },
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}