// Test case 1 
//Go to Kambiplay - select a sport from sport filter - select the first event - click on home to go to landing page

import { expect, Page, test } from "@playwright/test";

test('test', async ({ page }) => {
  // Go to https://play.kambi.com/
  await page.goto('https://play.kambi.com/');

  // select sport from sport filter
  await page.waitForSelector('.KambiBC-sports-menu__list > li:nth-child(3) > .KambiBC-filter-events-by-sports-container > .KambiBC-filter-events-by-sports-icon-container > p')
  await page.click('.KambiBC-sports-menu__list > li:nth-child(3) > .KambiBC-filter-events-by-sports-container > .KambiBC-filter-events-by-sports-icon-container > p')
  

  // select top leauge 
  await page.waitForSelector('.KambiBC-sports-hub_top-leagues__container > .KambiBC-sports-hub_top-leagues__content > .KambiBC-sports-hub_top-leagues__league')
  await page.click('.KambiBC-sports-hub_top-leagues__container > .KambiBC-sports-hub_top-leagues__content > .KambiBC-sports-hub_top-leagues__league')
  //await page.pause();

  // select first event in the event filter
  await page.waitForSelector('.KambiBC-sandwich-filter__event-list-item:nth-child(1) > .KambiBC-sandwich-filter__event-list-info')
  await page.click('.KambiBC-sandwich-filter__event-list-item:nth-child(1) > .KambiBC-sandwich-filter__event-list-info')
  //await page.pause();
  
  //Go back to landing page
  await page.dblclick('text=Home');
  await expect(page).toHaveURL('https://play.kambi.com/#home');
});


