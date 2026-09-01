import nodemailer from "nodemailer";
import { siteConfig } from "./config";

/**
 * Sends a lead-notification email if SMTP env vars are configured.
 * If they are not configured (e.g. local development, or before the
 * client has set up email), this logs the submission to the server
 * console instead of throwing — form submissions still succeed and are
 * never lost silently. See README.md → "How to configure email".
 */
export async function sendLeadNotification(subject: string, lines: Record<string, string>) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;

  const body = Object.entries(lines)
    .map(([key, value]) => `${key}: ${value || "-"}`)
    .join("\n");

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.log(`[lead-notification] ${subject}\n${body}`);
    return { delivered: false };
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  await transporter.sendMail({
    from: SMTP_FROM || SMTP_USER,
    to: siteConfig.forms.notifyEmail,
    subject,
    text: body,
  });

  return { delivered: true };
}
