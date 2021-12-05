import { expect, Page, test } from "@playwright/test";
test('test_betslip', async ({ page }) => {
    // Go to https://play.kambi.com/
    await page.goto('https://play.kambi.com/');
    // Go to https://play.kambi.com/#home
    await page.goto('https://play.kambi.com/#home');
    // Click text=All Sports
    await page.click('text=All Sports');
    // Click text=Motorsports
    await page.click('text=Motorsports');
    await expect(page).toHaveURL('https://play.kambi.com/#sports-hub/motorsports');
    // Click text=Speedway
    await page.click('text=Speedway');
    // Click .withHorizontalScroll__ArrowRight-sc-1w4qaj3-2
    await page.click('.withHorizontalScroll__ArrowRight-sc-1w4qaj3-2');
    // Click button:has-text("Doyle, Jason15.00")
    await page.click('button:has-text("Doyle, Jason15.00")');
    // Click button:has-text("Doyle, Jason15.00")
    await page.click('button:has-text("Doyle, Jason15.00")');
  });