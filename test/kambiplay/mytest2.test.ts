import { expect, Page, test } from "@playwright/test";
test('test', async ({ page }) => {
  
  await page.goto('https://play.kambi.com/#home')
  
 
  
 // await page.waitForSelector('.KambiBC-sports-menu__list > li:nth-child(1) > .KambiBC-filter-events-by-sports-container > .KambiBC-filter-events-by-sports-icon-container > p')
  await page.click('.KambiBC-filter-events-by-sports-container > .KambiBC-filter-events-by-sports-icon-container > p')
  // await page.pause();
  
  // await page.waitForSelector('.KambiBC-sports-hub_browse-leagues__country:nth-child(1) > .withHorizontalScroll__HorizontalScrollWrapper-sc-1bl4hmv-0 > .withHorizontalScroll__ScrollerWrapper-sc-1bl4hmv-3 > .KambiBC-sports-hub_browse-leagues__country-leagues > .KambiBC-sports-hub_browse-leagues__country-league:nth-child(1)')
  // await page.click('.KambiBC-sports-hub_browse-leagues__country:nth-child(1) > .withHorizontalScroll__HorizontalScrollWrapper-sc-1bl4hmv-0 > .withHorizontalScroll__ScrollerWrapper-sc-1bl4hmv-3 > .KambiBC-sports-hub_browse-leagues__country-leagues > .KambiBC-sports-hub_browse-leagues__country-league:nth-child(1)')
  // await page.pause();

  await page.waitForSelector('.KambiBC-sports-hub_browse-leagues__country:nth-child(1) ul.KambiBC-sports-hub_browse-leagues__country-leagues > .KambiBC-sports-hub_browse-leagues__country-league:nth-child(2)')
  await page.click('.KambiBC-sports-hub_browse-leagues__country:nth-child(1) .KambiBC-sports-hub_browse-leagues__country-leagues > .KambiBC-sports-hub_browse-leagues__country-league:nth-child(2)')
  // await page.pause();
  
  await page.waitForSelector('.KambiBC-sandwich-filter__event-list-item:nth-child(1) > .KambiBC-sandwich-filter__event-list-info')
  await page.click('.KambiBC-sandwich-filter__event-list-item:nth-child(1) > .KambiBC-sandwich-filter__event-list-info')
  await page.pause();
 
  await page.waitForSelector('.KambiBC-bet-offer-subcategory:nth-child(1) .KambiBC-outcomes-list > .KambiBC-outcomes-list__column:nth-child(1) button')
  await page.click('.KambiBC-bet-offer-subcategory:nth-child(1) .KambiBC-outcomes-list > .KambiBC-outcomes-list__column:nth-child(1) button')
  await page.pause();
  /*******Done till above***********/

  await page.waitForSelector('.KambiBC-bet-offer-subcategory:nth-child(1) > .KambiBC-bet-offer-subcategory__container > .KambiBC-bet-offer-subcategory__outcomes-list > .KambiBC-outcomes-list > .KambiBC-outcomes-list__column:nth-child(1) > .Button-sc-lvu29a-0:nth-child(1) > .OutcomeButton__Wrapper-sc-1anyy32-0 > .OutcomeButton__LabelAndExtras-sc-1anyy32-1')
  await page.click('.KambiBC-bet-offer-subcategory:nth-child(1) > .KambiBC-bet-offer-subcategory__container > .KambiBC-bet-offer-subcategory__outcomes-list > .KambiBC-outcomes-list > .KambiBC-outcomes-list__column:nth-child(1) > .Button-sc-lvu29a-0:nth-child(1) > .OutcomeButton__Wrapper-sc-1anyy32-0 > .OutcomeButton__LabelAndExtras-sc-1anyy32-1')
  
  await page.waitForSelector('.KambiBC-navigation-menu__section:nth-child(2) > .KambiBC-navigation-menu__section-wrapper > .KambiBC-navigation-menu__section-links > .KambiBC-navigation-menu__list-item:nth-child(1) > .KambiBC-navigation-menu__link > .KambiBC-navigation-menu__label-wrapper > .KambiBC-navigation-menu__label > .KambiBC-navigation-menu__label--title')
  await page.click('.KambiBC-navigation-menu__section:nth-child(2) > .KambiBC-navigation-menu__section-wrapper > .KambiBC-navigation-menu__section-links > .KambiBC-navigation-menu__list-item:nth-child(1) > .KambiBC-navigation-menu__link > .KambiBC-navigation-menu__label-wrapper > .KambiBC-navigation-menu__label > .KambiBC-navigation-menu__label--title')
  
  await page.waitForSelector('.KambiBC-sandwich-filter-foreground--level-0 > .KambiBC-scroller > .KambiBC-scroller-wrapper > .KambiBC-filter-menu__wrapper > .KambiBC-filter-menu > li:nth-child(2) > .KambiBC-filter-menu__option')
  await page.click('.KambiBC-sandwich-filter-foreground--level-0 > .KambiBC-scroller > .KambiBC-scroller-wrapper > .KambiBC-filter-menu__wrapper > .KambiBC-filter-menu > li:nth-child(2) > .KambiBC-filter-menu__option')
  
  await page.waitForSelector('.KambiBC-sandwich-filter-foreground--level-1 > .KambiBC-scroller > .KambiBC-scroller-wrapper > .KambiBC-filter-menu__wrapper > .KambiBC-filter-menu > li:nth-child(2) > .KambiBC-filter-menu__option')
  await page.click('.KambiBC-sandwich-filter-foreground--level-1 > .KambiBC-scroller > .KambiBC-scroller-wrapper > .KambiBC-filter-menu__wrapper > .KambiBC-filter-menu > li:nth-child(2) > .KambiBC-filter-menu__option')
  
  await page.waitForSelector('.KambiBC-sandwich-filter-foreground--level-2 > .KambiBC-scroller > .KambiBC-scroller-wrapper > .KambiBC-filter-menu__wrapper > .KambiBC-filter-menu > li:nth-child(2) > .KambiBC-filter-menu__option')
  await page.click('.KambiBC-sandwich-filter-foreground--level-2 > .KambiBC-scroller > .KambiBC-scroller-wrapper > .KambiBC-filter-menu__wrapper > .KambiBC-filter-menu > li:nth-child(2) > .KambiBC-filter-menu__option')
  
  await page.waitForSelector('section > section > .KambiBC-sandwich-filter__list > .KambiBC-sandwich-filter__event-list-item > .KambiBC-sandwich-filter__event-list-info')
  await page.click('section > section > .KambiBC-sandwich-filter__list > .KambiBC-sandwich-filter__event-list-item > .KambiBC-sandwich-filter__event-list-info')
  
  await page.waitForSelector('.KambiBC-filter-menu__wrapper > .KambiBC-filter-menu > li:nth-child(2) > .KambiBC-filter-menu__option > a')
  await page.click('.KambiBC-filter-menu__wrapper > .KambiBC-filter-menu > li:nth-child(2) > .KambiBC-filter-menu__option > a')
  
  await page.waitForSelector('.KambiBC-filter-menu__wrapper > .KambiBC-filter-menu > li:nth-child(3) > .KambiBC-filter-menu__option > a')
  await page.click('.KambiBC-filter-menu__wrapper > .KambiBC-filter-menu > li:nth-child(3) > .KambiBC-filter-menu__option > a')
  
  await page.waitForSelector('.KambiBC-filter-menu__wrapper > .KambiBC-filter-menu > li:nth-child(4) > .KambiBC-filter-menu__option > a')
  await page.click('.KambiBC-filter-menu__wrapper > .KambiBC-filter-menu > li:nth-child(4) > .KambiBC-filter-menu__option > a')
  
  await page.waitForSelector('.KambiBC-bet-offer-subcategory__container > .KambiBC-bet-offer-subcategory__outcomes-list > .KambiBC-outcomes-list--columns-3 > .KambiBC-outcomes-list__column:nth-child(2) > .Button-sc-lvu29a-0')
  await page.click('.KambiBC-bet-offer-subcategory__container > .KambiBC-bet-offer-subcategory__outcomes-list > .KambiBC-outcomes-list--columns-3 > .KambiBC-outcomes-list__column:nth-child(2) > .Button-sc-lvu29a-0')
  
  await page.waitForSelector('.KambiBC-bet-offer-subcategory__container > .KambiBC-bet-offer-subcategory__outcomes-list > .KambiBC-outcomes-list > .KambiBC-outcomes-list__column > .bkwLbg')
  await page.click('.KambiBC-bet-offer-subcategory__container > .KambiBC-bet-offer-subcategory__outcomes-list > .KambiBC-outcomes-list > .KambiBC-outcomes-list__column > .bkwLbg')
  
  await page.waitForSelector('.KambiBC-navigation-menu__section:nth-child(2) > .KambiBC-navigation-menu__section-wrapper > .KambiBC-navigation-menu__section-links > .KambiBC-navigation-menu__list-item:nth-child(1) > .KambiBC-navigation-menu__link > .KambiBC-navigation-menu__label-wrapper > .KambiBC-navigation-menu__label > .KambiBC-navigation-menu__label--title')
  await page.click('.KambiBC-navigation-menu__section:nth-child(2) > .KambiBC-navigation-menu__section-wrapper > .KambiBC-navigation-menu__section-links > .KambiBC-navigation-menu__list-item:nth-child(1) > .KambiBC-navigation-menu__link > .KambiBC-navigation-menu__label-wrapper > .KambiBC-navigation-menu__label > .KambiBC-navigation-menu__label--title')
  

});
  