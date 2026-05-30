import { chromium } from 'playwright-core';

const BASE = 'http://localhost:4380';
const pages = [
  ['home', '/'],
  ['economy', '/economy'],
  ['events', '/events'],
  ['vip', '/vip'],
  ['enchant', '/enchant'],
  ['faq', '/faq'],
  ['downloads', '/downloads'],
  ['info', '/info'],
  ['registro', '/registro'],
  ['news', '/news'],
  ['news-article', '/news/baium-19-abril-2026'],
  ['comunidad', '/comunidad'],
];
const viewports = [
  ['desktop', 1366, 900],
  ['mobile', 390, 844],
];

const browser = await chromium.launch();
for (const [vp, w, h] of viewports) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  for (const [name, path] of pages) {
    try {
      await page.goto(BASE + path, { waitUntil: 'networkidle', timeout: 20000 });
      await page.waitForTimeout(400);
      await page.screenshot({ path: `.audit-shots/${name}-${vp}.png`, fullPage: true });
      console.log(`ok ${name}-${vp}`);
    } catch (e) {
      console.log(`FAIL ${name}-${vp}: ${e.message.slice(0, 80)}`);
    }
  }
  await ctx.close();
}
await browser.close();
console.log('done');
