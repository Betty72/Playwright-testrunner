// select a sport from sport filter - select an event from event list - click on outcome button to open the betslip - close betslip - go back to landing page

import { expect, Page, test } from "@playwright/test";
test('test', async ({ page }) => {
    
    // Go to https://play.kambi.com/#home
    await page.goto('https://play.kambi.com/#home');
    
    //select second element from the sport filter 
    await page.waitForSelector('.KambiBC-sports-menu__list > li:nth-child(2) > .KambiBC-filter-events-by-sports-container > .KambiBC-filter-events-by-sports-icon-container')
    await page.click('.KambiBC-sports-menu__list > li:nth-child(2) > .KambiBC-filter-events-by-sports-container > .KambiBC-filter-events-by-sports-icon-container')
    //await page.pause();
    //select 3rd event from the event list
    await page.waitForSelector('.KambiBC-sandwich-filter__event-list-item:nth-child(3) > .KambiBC-sandwich-filter__event-list-info')
    await page.click('.KambiBC-sandwich-filter__event-list-item:nth-child(3) > .KambiBC-sandwich-filter__event-list-info')
    //await page.pause();
    //open betslip on 6 event
    await page.waitForSelector('.KambiBC-outcomes-list > .KambiBC-outcomes-list__column > button:nth-child(6)')
    await page.click('.KambiBC-outcomes-list > .KambiBC-outcomes-list__column > button:nth-child(6)')


    //close betslip 
    await page.waitForSelector('.KambiBC-outcomes-list .KambiBC-outcomes-list__column > button:nth-child(6)')
    await page.click('.KambiBC-outcomes-list .KambiBC-outcomes-list__column > button:nth-child(6)')

    
    // go back to landing page
    await page.dblclick('text=Home');
    await expect(page).toHaveURL('https://play.kambi.com/#home');
  });

  