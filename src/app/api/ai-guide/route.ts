import { NextResponse } from "next/server";
import { scriptedReply, type ChatMessage } from "@/lib/ai-guide";

export const runtime = "edge";

/**
 * OPTIONAL server endpoint for the AI Financial Guide.
 *
 * The UI runs the guide client-side (so it works on static hosts like GitHub
 * Pages with no server). This route exists only for server deployments that
 * want to upgrade to a live LLM — set AI_GUIDE_API_KEY and implement
 * `callProvider`. It is removed automatically by the GitHub Pages workflow,
 * since static export does not support dynamic route handlers.
 */
export async function POST(req: Request) {
  let messages: ChatMessage[] = [];
  try {
    const body = (await req.json()) as { messages?: ChatMessage[] };
    messages = body.messages ?? [];
  } catch {
    return NextResponse.json({ reply: "Could you rephrase that for me?" }, { status: 400 });
  }

  const last = [...messages].reverse().find((m) => m.role === "user")?.content ?? "";

  if (process.env.AI_GUIDE_API_KEY) {
    try {
      return NextResponse.json({ reply: await callProvider(messages) });
    } catch {
      // fall through to scripted guide
    }
  }

  return NextResponse.json({ reply: scriptedReply(last) });
}

async function callProvider(_messages: ChatMessage[]): Promise<string> {
  // Integration point — wire your provider of choice here.
  // Keep the system prompt fiduciary, educational, never a substitute for advice.
  throw new Error("provider-not-implemented");
}
