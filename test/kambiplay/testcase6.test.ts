import { expect, Page, test } from "@playwright/test";
test('test', async ({ page }) => {

    // Go to https://play.kambi.com/#home
    await page.goto('https://play.kambi.com/#home');

    //Click on all sports in the sport filter
    await page.waitForSelector('.KambiBC-filter-events-by-sports-icon-container > .KambiBC-sports-menu-all-sports')
    await page.click('.KambiBC-filter-events-by-sports-icon-container > .KambiBC-sports-menu-all-sports')

    //select the 5th element in the list
    await page.waitForSelector('.KambiBC-sports-az__event-groups__list > .KambiBC-sports-az__event-groups__list-item:nth-child(5)')
    await page.click('.KambiBC-sports-az__event-groups__list > .KambiBC-sports-az__event-groups__list-item:nth-child(5)')

    //select the 3rd element in Browse Leagues
    await page.waitForSelector('.KambiBC-sports-hub_browse-leagues__country:nth-child(3) > .KambiBC-sports-hub_browse-leagues__country-item')
    await page.click('.KambiBC-sports-hub_browse-leagues__country:nth-child(3) > .KambiBC-sports-hub_browse-leagues__country-item')
    

    //click on the first event
    await page.waitForSelector('.KambiBC-sandwich-filter__event-list-item:nth-child(2) > .KambiBC-sandwich-filter__event-list-info')
    await page.click('.KambiBC-sandwich-filter__event-list-item:nth-child(2) > .KambiBC-sandwich-filter__event-list-info')
    
    //click on the first betting to open the betslip
    await page.waitForSelector('.KambiBC-bet-offer-subcategory__outcomes-list > .KambiBC-outcomes-list > .KambiBC-outcomes-list__column:nth-child(1) > button:nth-child(1)')
    await page.click('.KambiBC-bet-offer-subcategory__outcomes-list > .KambiBC-outcomes-list > .KambiBC-outcomes-list__column:nth-child(1) > button:nth-child(1)')
   
    //close the betslip by clicking on the "x"
    await page.waitForSelector('.mod-KambiBC-betslip-outcome__close-btn')
    await page.click('.mod-KambiBC-betslip-outcome__close-btn')


    //return to the landing page
    await page.dblclick('text=Home');
    await expect(page).toHaveURL('https://play.kambi.com/#home');
   
});