// select all sport from sport filter - select a sport - select from leaugue - select an event - open and close the betslip - go back to landing page 

import { expect, Page, test } from "@playwright/test";
test('test', async ({ page }) => {

    // Go to https://play.kambi.com/#home
    await page.goto('https://play.kambi.com/#home');

    //Click on all sports in the sport filter
    await page.waitForSelector('.KambiBC-filter-events-by-sports-icon-container > .KambiBC-sports-menu-all-sports')
    await page.click('.KambiBC-filter-events-by-sports-icon-container > .KambiBC-sports-menu-all-sports')
    //select the 5th element in the list
    await page.waitForSelector('.KambiBC-sports-az__event-groups__list-item:nth-child(4)')
    await page.click('.KambiBC-sports-az__event-groups__list-item:nth-child(4)')


    //return to the landing page
    await page.dblclick('text=Home');
    await expect(page).toHaveURL('https://play.kambi.com/#home');
   
});