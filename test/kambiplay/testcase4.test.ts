import { expect, Page, test } from "@playwright/test";
test('test', async ({ page }) => {
    
    // Go to https://play.kambi.com/#home
    await page.goto('https://play.kambi.com/#home');
    
    //select second element from the sport filter 
    await page.waitForSelector('.KambiBC-sports-menu__list > li:nth-child(2) > .KambiBC-filter-events-by-sports-container > .KambiBC-filter-events-by-sports-icon-container > p')
    await page.click('.KambiBC-sports-menu__list > li:nth-child(2) > .KambiBC-filter-events-by-sports-container > .KambiBC-filter-events-by-sports-icon-container > p')
    //await page.pause();
    //select 3rd event from the event list
    await page.waitForSelector('.KambiBC-sandwich-filter__event-list-item:nth-child(3) > .KambiBC-sandwich-filter__event-list-info')
    await page.click('.KambiBC-sandwich-filter__event-list-item:nth-child(3) > .KambiBC-sandwich-filter__event-list-info')
    //await page.pause();
    //open betslip on first event
    await page.waitForSelector('.KambiBC-bet-offer-subcategory__outcomes-list > .KambiBC-outcomes-list > .KambiBC-outcomes-list__column:nth-child(2) > button :nth-child(1)')
    await page.click('.KambiBC-bet-offer-subcategory__outcomes-list > .KambiBC-outcomes-list > .KambiBC-outcomes-list__column:nth-child(2) > button :nth-child(1)')
    //close betslip 
    await page.waitForSelector('.KambiBC-bet-offer-subcategory__outcomes-list > .KambiBC-outcomes-list > .KambiBC-outcomes-list__column:nth-child(2) > button :nth-child(1)')
    await page.click('.KambiBC-bet-offer-subcategory__outcomes-list > .KambiBC-outcomes-list > .KambiBC-outcomes-list__column:nth-child(2) > button :nth-child(1)')

    //select american football from left menu
    await page.waitForSelector('.KambiBC-navigation-menu__link--american_football > .KambiBC-navigation-menu__link')
    await page.click('.KambiBC-navigation-menu__link--american_football > .KambiBC-navigation-menu__link')
    //select first element in level 0
    await page.waitForSelector('.KambiBC-sandwich-filter-foreground--level-0 ul.KambiBC-filter-menu > li:nth-child(1) > .KambiBC-filter-menu__option')
    await page.click('.KambiBC-sandwich-filter-foreground--level-0 ul.KambiBC-filter-menu > li:nth-child(1) > .KambiBC-filter-menu__option')
    await page.pause();
    //select second element in level 1
    await page.waitForSelector('.KambiBC-filter-menu > li:nth-child(2) > .KambiBC-filter-menu__option--selected')
    await page.click('.KambiBC-filter-menu > li:nth-child(2) > .KambiBC-filter-menu__option--selected')
    await page.pause();
    //select first event from the event list
    await page.waitForSelector('.KambiBC-sandwich-filter__list > .KambiBC-sandwich-filter__event-list-item:nth-child(1) > .KambiBC-sandwich-filter__event-list-info')
    await page.click('.KambiBC-sandwich-filter__list > .KambiBC-sandwich-filter__event-list-item:nth-child(1) > .KambiBC-sandwich-filter__event-list-info')
    await page.pause();
    // select element 2 from the filter menu
    await page.waitForSelector('.KambiBC-filter-menu > li:nth-child(2)')
    await page.click('.KambiBC-filter-menu > li:nth-child(2)')
    // select element 3 from the filter menu
    await page.waitForSelector('.KambiBC-filter-menu > li:nth-child(3)')
    await page.click('.KambiBC-filter-menu > li:nth-child(3)')
    // select element 4 from the filter menu
    await page.waitForSelector('.KambiBC-filter-menu > li:nth-child(4)')
    await page.click('.KambiBC-filter-menu > li:nth-child(4)')

    // go back to landing page
    await page.dblclick('text=Home');
    await expect(page).toHaveURL('https://play.kambi.com/#home');
  });

  