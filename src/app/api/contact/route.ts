import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas";
import { sendLeadNotification } from "@/lib/mailer";
import { verifyCaptcha } from "@/lib/captcha";
import { isRateLimited } from "@/lib/rate-limit";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") || "unknown";
  if (isRateLimited(`contact:${ip}`)) {
    return NextResponse.json({ error: "Too many requests." }, { status: 429 });
  }

  const json = await request.json().catch(() => null);
  if (!json) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  // Honeypot tripped — pretend success so the bot doesn't learn anything.
  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const captchaOk = await verifyCaptcha(json.captchaToken);
  if (!captchaOk) {
    return NextResponse.json({ error: "CAPTCHA verification failed." }, { status: 400 });
  }

  const { website: _honeypot, ...data } = parsed.data;
  void _honeypot;

  await sendLeadNotification("New contact form submission", {
    Name: data.name,
    Email: data.email,
    Company: data.company,
    "Job Title": data.jobTitle,
    Phone: data.phone || "",
    "Requirement Type": data.requirementType,
    "Technology / Skill": data.technology,
    "Number of Resources": data.numberOfResources,
    "Experience Level": data.experienceLevel,
    "Expected Start Date": data.startDate || "",
    Message: data.message,
  });

  return NextResponse.json({ ok: true });
}
