import { expect, Page, test } from "@playwright/test";
test('test', async ({ page }) => {
  
  await page.goto('https://play.kambi.com/#home')
  
 
  
 
  await page.click('.KambiBC-filter-events-by-sports-container > .KambiBC-filter-events-by-sports-icon-container > p')
  
  await page.waitForSelector('.KambiBC-sports-hub_browse-leagues__country:nth-child(1) ul.KambiBC-sports-hub_browse-leagues__country-leagues > .KambiBC-sports-hub_browse-leagues__country-league:nth-child(2)')
  await page.click('.KambiBC-sports-hub_browse-leagues__country:nth-child(1) .KambiBC-sports-hub_browse-leagues__country-leagues > .KambiBC-sports-hub_browse-leagues__country-league:nth-child(2)')
  // await page.pause();
  
  await page.waitForSelector('.KambiBC-sandwich-filter__event-list-item:nth-child(1) > .KambiBC-sandwich-filter__event-list-info')
  await page.click('.KambiBC-sandwich-filter__event-list-item:nth-child(1) > .KambiBC-sandwich-filter__event-list-info')
  //await page.pause();
 
  await page.waitForSelector('.KambiBC-bet-offer-subcategory:nth-child(1) .KambiBC-outcomes-list > .KambiBC-outcomes-list__column:nth-child(1) button')
  await page.click('.KambiBC-bet-offer-subcategory:nth-child(1) .KambiBC-outcomes-list > .KambiBC-outcomes-list__column:nth-child(1) button')
  //await page.pause();


  

});
  