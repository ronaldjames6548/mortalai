// src/app/api/tiktok/route.js
import { Downloader } from "@tobyg74/tiktok-api-dl";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get("url");

    if (!url) {
      return NextResponse.json({ error: "url is required" }, { status: 400 });
    }

    let urlTik = url;

    if (urlTik.includes("douyin")) {
      const response = await fetch(urlTik, {
        method: "HEAD",
        redirect: "follow",
      });
      urlTik = response.url.replace("douyin", "tiktok");
    }

    const data = await Downloader(urlTik, { version: "v3" });

    const isStory = urlTik.includes("/story/");
    if (isStory && data?.result) {
      data.result.type = "story";
    }

    const createTime = data?.result?.create_time;
    const uploadDate = createTime ? new Date(createTime * 1000).toISOString() : null;

    if (data?.result) {
      data.result.uploadDate = uploadDate;
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}