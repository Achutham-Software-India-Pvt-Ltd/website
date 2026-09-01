// Minimal in-memory rate limiter to slow down naive scripted abuse of the
// public form endpoints. This resets on every deploy/restart and is not a
// substitute for a real edge/WAF rate limiter in front of production traffic
// at scale — but it is a meaningful, zero-dependency first line of defense.

const hits = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const entry = hits.get(key);

  if (!entry || now > entry.resetAt) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_REQUESTS;
}
