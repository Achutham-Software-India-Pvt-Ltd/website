/**
 * CAPTCHA-ready hook. No CAPTCHA provider is wired in yet — this keeps the
 * codebase ready to add one (e.g. Cloudflare Turnstile) without restructuring
 * the API routes later.
 *
 * To enable Cloudflare Turnstile:
 * 1. Add NEXT_PUBLIC_TURNSTILE_SITE_KEY and TURNSTILE_SECRET_KEY to .env.local
 * 2. Render the Turnstile widget in the form and include its token in the
 *    submitted payload as `captchaToken`
 * 3. This function will then verify that token server-side automatically
 */
export async function verifyCaptcha(token?: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    // No CAPTCHA provider configured yet — allow submissions through.
    // Spam is still mitigated by the honeypot field on every form.
    return true;
  }
  if (!token) return false;

  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    });
    const data = await res.json();
    return Boolean(data.success);
  } catch {
    return false;
  }
}
