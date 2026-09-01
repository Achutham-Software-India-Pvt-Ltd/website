import { NextRequest, NextResponse } from "next/server";
import { pocSchema } from "@/lib/schemas";
import { sendLeadNotification } from "@/lib/mailer";
import { verifyCaptcha } from "@/lib/captcha";
import { isRateLimited } from "@/lib/rate-limit";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") || "unknown";
  if (isRateLimited(`poc:${ip}`)) {
    return NextResponse.json({ error: "Too many requests." }, { status: 429 });
  }

  const json = await request.json().catch(() => null);
  if (!json) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = pocSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const captchaOk = await verifyCaptcha(json.captchaToken);
  if (!captchaOk) {
    return NextResponse.json({ error: "CAPTCHA verification failed." }, { status: 400 });
  }

  const { website: _honeypot, ...data } = parsed.data;
  void _honeypot;

  await sendLeadNotification("New POC request", {
    Name: data.name,
    Email: data.email,
    Company: data.company,
    Category: data.category,
    Timeline: data.timeline || "",
    Description: data.description,
  });

  return NextResponse.json({ ok: true });
}
