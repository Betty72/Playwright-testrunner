// Test case 5 
//Go to Kambiplay - select a sport from sport filter - select the first event - click on a betslip - click on home to go to landing page

import { expect, Page, test } from "@playwright/test";
test('test', async ({ page }) => {
  // Go to https://play.kambi.com/
  await page.goto('https://play.kambi.com/');
  // Click p:has-text("Basketball")
  await page.click('p:has-text("Basketball")');
  await expect(page).toHaveURL('https://play.kambi.com/#sports-hub/basketball');
  // Click text=NCAAB
  await page.click('text=NCAAB');
  await expect(page).toHaveURL('https://play.kambi.com/#sports-hub/basketball/ncaab');
  // Click on an event
  await page.click('.KambiBC-sandwich-filter__event-list-info')[0];
 //click on outcome button
  await page.click('.KambiBC-betty-outcome')[0];
  await page.pause();
  await page.click('text=Home');
  await expect(page).toHaveURL('https://play.kambi.com/#home');
});