import puppeteer from "puppeteer";
import { mkdir } from "fs/promises";

const URL = "https://mobile-namecard.vercel.app";
const OUT = "./screenshots";

await mkdir(OUT, { recursive: true });

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();

// Wait for fonts & animations
const goto = async (w, h) => {
  await page.setViewport({ width: w, height: h, deviceScaleFactor: 2 });
  await page.goto(URL, { waitUntil: "networkidle0" });
  await page.waitForSelector("main");
  await new Promise((r) => setTimeout(r, 1500)); // wait for animations
};

// 1. 대표 이미지 (썸네일) — 720×400
await goto(720, 400);
await page.screenshot({
  path: `${OUT}/kmong-thumbnail-720x400.png`,
  clip: { x: 0, y: 0, width: 720, height: 400 },
});
console.log("✓ 대표 이미지 720x400");

// 2. 포트폴리오 상세 (4:3) — 720×540
await goto(720, 540);
await page.screenshot({
  path: `${OUT}/kmong-detail-720x540.png`,
  clip: { x: 0, y: 0, width: 720, height: 540 },
});
console.log("✓ 상세 이미지 720x540");

// 3. 모바일 뷰 (375 width) — 375×812 iPhone style
await goto(375, 812);
await page.screenshot({
  path: `${OUT}/kmong-mobile-375x812.png`,
  clip: { x: 0, y: 0, width: 375, height: 812 },
});
console.log("✓ 모바일 뷰 375x812");

// 4. 풀페이지 캡처 (720px width)
await goto(720, 1200);
await page.screenshot({
  path: `${OUT}/kmong-fullpage-720.png`,
  fullPage: true,
});
console.log("✓ 풀페이지 720px 너비");

// 5. 모바일 풀페이지 캡처 (375px width)
await goto(375, 812);
await page.screenshot({
  path: `${OUT}/kmong-fullpage-mobile-375.png`,
  fullPage: true,
});
console.log("✓ 모바일 풀페이지 375px 너비");

await browser.close();
console.log(`\nDone! Screenshots saved to ${OUT}/`);
