import puppeteer from "puppeteer";
import { mkdir } from "fs/promises";

const BASE = "https://mobile-namecard.vercel.app";
const OUT = "./screenshots";

const PAGES = [
  { path: "/creator", label: "creator" },
  { path: "/ceo", label: "ceo" },
  { path: "/photographer", label: "photographer" },
  { path: "/cafe", label: "cafe" },
  { path: "/trainer", label: "trainer" },
];

await mkdir(OUT, { recursive: true });

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();

for (const p of PAGES) {
  console.log(`📸 Capturing: ${p.label}...`);

  // Thumbnail 720x400
  await page.setViewport({ width: 720, height: 400, deviceScaleFactor: 2 });
  await page.goto(`${BASE}${p.path}`, { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 1500));
  await page.screenshot({
    path: `${OUT}/${p.label}-thumb-720x400.png`,
    clip: { x: 0, y: 0, width: 720, height: 400 },
  });

  // Detail 720x540
  await page.setViewport({ width: 720, height: 540, deviceScaleFactor: 2 });
  await page.goto(`${BASE}${p.path}`, { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({
    path: `${OUT}/${p.label}-detail-720x540.png`,
    clip: { x: 0, y: 0, width: 720, height: 540 },
  });

  // Fullpage mobile
  await page.setViewport({ width: 375, height: 812, deviceScaleFactor: 2 });
  await page.goto(`${BASE}${p.path}`, { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({
    path: `${OUT}/${p.label}-fullpage-mobile.png`,
    fullPage: true,
  });

  console.log(`   ✓ ${p.label} done`);
}

await browser.close();
console.log("\n✅ All screenshots captured!");
