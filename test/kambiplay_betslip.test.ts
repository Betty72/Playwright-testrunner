import { expect, Page, test } from "@playwright/test";
test('test_betslip', async ({ page }) => {
    // Go to https://play.kambi.com/
    await page.goto('https://play.kambi.com/');
    // Go to https://play.kambi.com/#home
    await page.goto('https://play.kambi.com/#home');
    // Click p:has-text("Basketball")
    await page.click('p:has-text("Basketball")');
    await expect(page).toHaveURL('https://play.kambi.com/#sports-hub/basketball');
    // Click #KambiBC-content >> text=ESP
    await page.click('#KambiBC-content >> text=ESP');
    await expect(page).toHaveURL('https://play.kambi.com/#sports-hub/basketball/spain');
    // Click button:has-text("1.60")
    await page.click('button:has-text("1.60")');
    // Click button:has-text("1.60")
    await page.click('button:has-text("1.60")');
  });