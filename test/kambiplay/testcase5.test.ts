//search for a sport -  Expand and collapse the collapsablecontainer - go back to landing page

import { expect, Page, test } from "@playwright/test";
test('test', async ({ page }) => {

    // Go to https://play.kambi.com/#home
    await page.goto('https://play.kambi.com/#home');
   // Click text=Search Sports, Leagues or Teams
    await page.click('.KambiBC-applied-terms__placeholder');
    await page.waitForSelector('#KambiBC-term-search-overlay__input');
    await page.click('#KambiBC-term-search-overlay__input');

    // insert surfing in the search field 
    await page.fill('input#KambiBC-term-search-overlay__input', 'surfing');
    await page.waitForSelector('.KambiBC-term-search-overlay__result-content > div > div > .KambiBC-term-search-results__list > .KambiBC-search-results-term')
    await page.click('.KambiBC-term-search-overlay__result-content > div > div > .KambiBC-term-search-results__list > .KambiBC-search-results-term')
  
    // Click text=SurfingSport
    //await page.click('text=SurfingSport');
    //await expect(page).toHaveURL('https://play.kambi.com/#filter/surfing');
    
    await page.waitForSelector('.KambiBC-event-groups-list > .KambiBC-expanded> header')
    await page.click('.KambiBC-event-groups-list > .KambiBC-expanded> header')
  
    await page.waitForSelector('.KambiBC-event-groups-list > div.KambiBC-collapsible-container:nth-child(2) ')
    await page.click('.KambiBC-event-groups-list > div.KambiBC-collapsible-container:nth-child(2)');
   //await page.pause();
  
   

   await page.dblclick('text=Home');
   await expect(page).toHaveURL('https://play.kambi.com/#home');
   
});