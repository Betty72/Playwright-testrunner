import { expect, Page, test } from "@playwright/test";

test('test', async ({ page }) => {
    // Go to https://play.kambi.com/
    await page.goto('https://play.kambi.com/');
    // Go to https://play.kambi.com/#home
    await page.goto('https://play.kambi.com/#home');
    // Click #KambiBC-header-wrapper >> :nth-match(div:has-text("Search Sports, Leagues or Teams"), 4)
    await page.click('#KambiBC-header-wrapper >> :nth-match(div:has-text("Search Sports, Leagues or Teams"), 4)');
    // Fill text=Balance:Your balance could not be retrieved.My BetsLog outMy Free BetsSettingsSe >> input[type="text"]
    await page.fill('text=Balance:Your balance could not be retrieved.My BetsLog outMy Free BetsSettingsSe >> input[type="text"]', 'tennis');
    // Click text=Schröder, Dennis
    await page.click('text=Schröder, Dennis');
    await expect(page).toHaveURL('https://play.kambi.com/#filter/basketball/all/all/schroder__dennis');
    // Click :nth-match(header:has-text("NBA"), 2)
    await page.click(':nth-match(header:has-text("NBA"), 2)');
    // Click header:has-text("NBA")
    await page.click('header:has-text("NBA")');
  });