// Test case 2 
//Go to Kambiplay - click on all sports - Click on fewer sports - select one of the top sports - click on an event- click on home to go to landing page

import { expect, Page, test } from "@playwright/test";
test('test', async ({ page }) => {
    // Go to https://play.kambi.com/
    await page.goto('https://play.kambi.com/');
    
    // Click text=All Sports
    await page.click('text=All Sports');
    // Click text=Fewer Sports
    await page.click('text=Fewer Sports');

    // select baseboll
    await page.waitForSelector('.KambiBC-navigation-menu__link--baseball > .KambiBC-navigation-menu__link')
    await page.click('.KambiBC-navigation-menu__link--baseball > .KambiBC-navigation-menu__link')
    //await page.pause();

    // select the first event
    await page.waitForSelector('.KambiBC-sandwich-filter__event-list-item:nth-child(1) > .KambiBC-sandwich-filter__event-list-info')
    await page.click('.KambiBC-sandwich-filter__event-list-item:nth-child(1) > .KambiBC-sandwich-filter__event-list-info')
    //await page.pause();

    // go back to landing page 
    await page.dblclick('text=Home');
    await expect(page).toHaveURL('https://play.kambi.com/#home');
  });