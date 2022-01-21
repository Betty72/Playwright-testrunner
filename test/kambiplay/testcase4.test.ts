// Test case 1 
//Go to Kambiplay - select a sport from sport filter - select the first event - on event filter click on 3 choices - click on home to go to landing page
import { expect, Page, test } from "@playwright/test";


  test('test', async ({ page }) => {
    // Go to https://play.kambi.com/
    await page.goto('https://play.kambi.com/');
    // Go to https://play.kambi.com/#home
    await page.goto('https://play.kambi.com/#home');
    // Click p:has-text("Basketball")
    await page.click('p:has-text("Basketball")');
    await expect(page).toHaveURL('https://play.kambi.com/#sports-hub/basketball');
    // Click text=NCAAB
    await page.click('text=NCAAB');
    await expect(page).toHaveURL('https://play.kambi.com/#sports-hub/basketball/ncaab');
    // Click on an event
    await page.click('.KambiBC-sandwich-filter__event-list-info')[0];
    // Click text=Most Popular
    await page.click('text=Most Popular');
    // Click text=Match Parlays
    await page.click('text=Match Parlays');
    // Click text=Home
    await page.click('text=Home');
    await expect(page).toHaveURL('https://play.kambi.com/#home');
  });