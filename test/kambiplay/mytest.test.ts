import { expect, Page, test } from "@playwright/test";
test('test', async ({ page }) => {
    // Go to https://play.kambi.com/
    await page.goto('https://play.kambi.com/');
    await page.click('.KambiBC-filter-events-by-sports-container')[0];
    await page.pause();
    //await page.click('.KambiBC-sports-hub_top-leagues__league')[0];
    //await page.pause();
    await page.click('.KambiBC-sports-hub_browse-leagues__country-league')[2];
    await page.pause();
    //await page.click('.KambiBC-filter-menu')[0];
   // await page.pause();
    //await page.click('.KambiBC-sandwich-filter__event-list-info')[1];
    //await page.pause();
    //await page.click('.KambiBC-filter-menu__wrapper')[1];
    //await page.pause();
    
    await page.click('text=Home');
    await expect(page).toHaveURL('https://play.kambi.com/#home');

    
  });
  