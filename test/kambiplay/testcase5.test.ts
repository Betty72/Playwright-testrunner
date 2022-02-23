//search for a sport. Expand and collapse the collapsablecontainer. Click on show more

import { expect, Page, test } from "@playwright/test";
test('test', async ({ page }) => {

    // Go to https://play.kambi.com/#home
    await page.goto('https://play.kambi.com/#home');
   // Click text=Search Sports, Leagues or Teams
   await page.click('.KambiBC-applied-terms__placeholder');
   await page.waitForSelector('#KambiBC-term-search-overlay__input');
   await page.click('#KambiBC-term-search-overlay__input');

    
    await page.fill('input#KambiBC-term-search-overlay__input', 'surfing');
   
    // Click text=SurfingSport
    await page.click('text=SurfingSport');
    await expect(page).toHaveURL('https://play.kambi.com/#filter/surfing');
    
   await page.waitForSelector('.KambiBC-event-groups-list > .KambiBC-expanded> header')
   await page.click('.KambiBC-event-groups-list > .KambiBC-expanded> header')
  
   await page.waitForSelector('.KambiBC-event-groups-list > div.KambiBC-collapsible-container:nth-child(2) ')
   await page.click('.KambiBC-event-groups-list > div.KambiBC-collapsible-container:nth-child(2)');
   //await page.pause();
  
   

   await page.dblclick('text=Home');
   await expect(page).toHaveURL('https://play.kambi.com/#home');
   
});