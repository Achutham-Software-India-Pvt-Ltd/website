// Automated verification pass: crawls every route, collects console errors,
// checks all internal links resolve, submits every form, and checks basic
// responsive rendering at three breakpoints. Run against a `next start`
// server (see package.json "verify" script).
import { chromium } from "playwright";

const BASE = process.env.VERIFY_BASE_URL || "http://localhost:3100";

const routes = [
  "/", "/services", "/software-engineering", "/qa-automation",
  "/performance-engineering", "/cloud-devops", "/ai-data", "/it-staffing",
  "/staff-augmentation", "/solutions", "/industries", "/how-we-work",
  "/about", "/careers", "/contact", "/insights", "/request-resource",
  "/poc", "/privacy-policy", "/terms-of-service",
];

const viewports = {
  mobile: { width: 390, height: 844 },
  tablet: { width: 820, height: 1180 },
  desktop: { width: 1440, height: 900 },
};

let failures = 0;
function fail(msg) {
  failures++;
  console.log(`FAIL: ${msg}`);
}
function ok(msg) {
  console.log(`OK:   ${msg}`);
}

const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });

// ---------------------------------------------------------------------
// 1. Crawl every route at desktop size, collect console errors + status
// ---------------------------------------------------------------------
const page = await browser.newPage({ viewport: viewports.desktop });
const consoleErrors = [];
page.on("console", (msg) => {
  if (msg.type() === "error") consoleErrors.push(`${page.url()} :: ${msg.text()}`);
});
page.on("pageerror", (err) => consoleErrors.push(`${page.url()} :: pageerror: ${err.message}`));

const discoveredLinks = new Set();

for (const route of routes) {
  const res = await page.goto(`${BASE}${route}`, { waitUntil: "networkidle" });
  if (!res || res.status() >= 400) {
    fail(`${route} returned status ${res ? res.status() : "no response"}`);
  } else {
    ok(`${route} -> ${res.status()}`);
  }

  const title = await page.title();
  if (!title || title.length < 5) fail(`${route} missing a real <title>`);

  const h1Count = await page.locator("h1").count();
  if (route !== "/" && h1Count < 1) fail(`${route} has no <h1>`);

  const links = await page.$$eval("a[href]", (as) =>
    as.map((a) => a.getAttribute("href")).filter(Boolean)
  );
  links.forEach((href) => {
    if (href.startsWith("/") && !href.startsWith("//")) discoveredLinks.add(href.split("#")[0]);
  });
}

// ---------------------------------------------------------------------
// 2. Verify every discovered internal link resolves (no broken nav links)
// ---------------------------------------------------------------------
for (const link of discoveredLinks) {
  if (link === "") continue;
  const res = await page.goto(`${BASE}${link}`, { waitUntil: "domcontentloaded" });
  if (!res || res.status() >= 400) {
    fail(`internal link ${link} returned status ${res ? res.status() : "no response"}`);
  }
}
ok(`checked ${discoveredLinks.size} unique internal links`);

// ---------------------------------------------------------------------
// 3. Responsive check — no horizontal overflow at mobile/tablet/desktop
// ---------------------------------------------------------------------
for (const [name, viewport] of Object.entries(viewports)) {
  const vpPage = await browser.newPage({ viewport });
  await vpPage.goto(`${BASE}/`, { waitUntil: "networkidle" });
  const overflow = await vpPage.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1
  );
  if (overflow) fail(`horizontal overflow on / at ${name} (${viewport.width}px)`);
  else ok(`no horizontal overflow on / at ${name}`);

  if (name === "mobile") {
    const menuButton = vpPage.getByRole("button", { name: /open menu/i });
    await menuButton.click();
    const mobileNavVisible = await vpPage.getByRole("link", { name: "Careers" }).isVisible();
    if (!mobileNavVisible) fail("mobile menu did not open / Careers link not visible");
    else ok("mobile menu opens and shows nav links");
  }
  await vpPage.close();
}

// ---------------------------------------------------------------------
// 4. Submit every form end-to-end
// ---------------------------------------------------------------------
async function fillAndSubmit(route, fields, submitName) {
  const p = await browser.newPage({ viewport: viewports.desktop });
  const errs = [];
  p.on("console", (m) => { if (m.type() === "error") errs.push(m.text()); });
  await p.goto(`${BASE}${route}`, { waitUntil: "networkidle" });

  for (const [label, value, type] of fields) {
    const field = p.getByLabel(label, { exact: true });
    if (type === "select") {
      await field.selectOption({ label: value });
    } else {
      await field.fill(value);
    }
  }

  await p.getByRole("button", { name: submitName }).click();
  await p.waitForTimeout(1200);
  const success = await p.getByText("Thank you.").isVisible().catch(() => false);
  if (!success) fail(`${route} form did not show success state after submit`);
  else ok(`${route} form submitted successfully`);

  if (errs.length) fail(`${route} form submission produced console errors: ${errs.join(" | ")}`);
  await p.close();
}

await fillAndSubmit(
  "/contact",
  [
    ["Name", "Test Name"],
    ["Work Email", "test@example.com"],
    ["Company", "Test Co"],
    ["Job Title", "VP Engineering"],
    ["What do you need?", "Staff Augmentation", "select"],
    ["Technology / Skill", "React"],
    ["Number of Resources", "2"],
    ["Experience Level", "6-9 years", "select"],
    ["Message", "This is a test message for verification."],
  ],
  "Submit Requirement"
);

await fillAndSubmit(
  "/request-resource",
  [
    ["Role", "QA Automation Engineer"],
    ["Technology", "Playwright"],
    ["Years of Experience", "5+"],
    ["Number of Resources", "1"],
    ["Location / Timezone", "EST"],
    ["Contract Duration", "6 months"],
    ["Job Description", "Need a QA engineer for regression automation."],
    ["Work Email", "test@example.com"],
    ["Company", "Test Co"],
  ],
  "Find My Resource"
);

await fillAndSubmit(
  "/poc",
  [
    ["Name", "Test Name"],
    ["Work Email", "test@example.com"],
    ["Company", "Test Co"],
    ["POC Category", "QA Automation", "select"],
    ["What do you want to prove out?", "Automate our smoke suite in two weeks."],
  ],
  "Discuss a POC"
);

// ---------------------------------------------------------------------
// Report console errors collected during the full crawl
// ---------------------------------------------------------------------
if (consoleErrors.length) {
  consoleErrors.forEach((e) => fail(`console error: ${e}`));
} else {
  ok("no console errors during full route crawl");
}

await browser.close();

console.log(`\n${failures === 0 ? "ALL CHECKS PASSED" : `${failures} CHECK(S) FAILED`}`);
process.exit(failures === 0 ? 0 : 1);
