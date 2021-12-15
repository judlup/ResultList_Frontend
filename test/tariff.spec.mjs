import { test, expect } from '@playwright/test';

test('Should validate get a list of tariffs', async ({ page }) => {
  page.setDefaultTimeout(10000);
  await page.goto('http://localhost:3000/');
  await page.waitForSelector('.Tariffs_tariffContainer__YDFBF.col-xl-12.col-md-12.col-sm-12');
  const text = await page.$eval('.Tariff_name__Ic0z2.col-lg-3.col-md-4.col-3', (e) => e.textContent);
  expect(text).toBe('Tariff 1');
});

test('Should validate that it return 13 tariffs', async ({ page }) => {
  page.setDefaultTimeout(10000);
  await page.goto('http://localhost:3000/');
  await page.waitForSelector('.Tariffs_tariffContainer__YDFBF.col-xl-12.col-md-12.col-sm-12');
  const text = await page.$$eval('.Tariff_container__9WqKG.container', (e) => e.map((el) => el.textContent));
  expect(text.length).toBe(13);
});
