// app/api/gemini/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { text, prompt } = await req.json();

  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GEMINI_API_KEY}`,
      },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: `${prompt}\n\n${text}` }],
          },
        ],
      }),
    },
  );

  const data = await response.json();

  const summary =
    data?.candidates?.[0]?.content?.parts?.[0]?.text || "Unable to summarize.";
  return NextResponse.json({ summary });
}
