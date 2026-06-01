import { NextResponse } from "next/server";
import { getServiceClient } from "@/lib/supabase/server";

export const runtime = "nodejs";

interface LeadPayload {
  name?: string;
  email?: string;
  phone?: string;
  goal?: string;
  source?: string;
  score?: number;
}

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

/**
 * Lead capture. Persists to Supabase `leads` when configured; otherwise
 * accepts optimistically (logged server-side) so the funnel never breaks
 * during local development. See supabase/schema.sql for the table.
 */
export async function POST(req: Request) {
  let body: LeadPayload;
  try {
    body = (await req.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (!body.email || !isEmail(body.email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 422 });
  }

  const lead = {
    name: body.name?.slice(0, 120) ?? null,
    email: body.email.toLowerCase().slice(0, 160),
    phone: body.phone?.slice(0, 32) ?? null,
    goal: body.goal?.slice(0, 80) ?? null,
    source: body.source?.slice(0, 40) ?? "website",
    score: typeof body.score === "number" ? Math.round(body.score) : null,
    created_at: new Date().toISOString(),
  };

  const supabase = getServiceClient();
  if (!supabase) {
    // Dev / unconfigured: accept and move on. Swap for your CRM/email later.
    console.info("[lead] (mock — no Supabase configured)", lead.email, lead.source);
    return NextResponse.json({ ok: true, mode: "mock" });
  }

  const { error } = await supabase.from("leads").insert(lead);
  if (error) {
    return NextResponse.json({ ok: false, error: "store_failed" }, { status: 500 });
  }
  return NextResponse.json({ ok: true, mode: "stored" });
}
