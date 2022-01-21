import { expect, Page, test } from "@playwright/test";
test('test', async ({ page }) => {
    // Go to https://play.kambi.com/
    await page.goto('https://play.kambi.com/');

    await page.waitForSelector('.KambiBC-navigation-menu__link--football > .KambiBC-navigation-menu__link > .KambiBC-navigation-menu__label-wrapper > .KambiBC-navigation-menu__label > .KambiBC-navigation-menu__label--title')
    await page.click('.KambiBC-navigation-menu__link--football > .KambiBC-navigation-menu__link > .KambiBC-navigation-menu__label-wrapper > .KambiBC-navigation-menu__label > .KambiBC-navigation-menu__label--title')
    
    await page.waitForSelector('.KambiBC-sports-hub_browse-leagues__country:nth-child(4) > .withHorizontalScroll__HorizontalScrollWrapper-sc-1bl4hmv-0 > .withHorizontalScroll__ScrollerWrapper-sc-1bl4hmv-3 > .KambiBC-sports-hub_browse-leagues__country-leagues > .KambiBC-sports-hub_browse-leagues__country-league')
    await page.click('.KambiBC-sports-hub_browse-leagues__country:nth-child(4) > .withHorizontalScroll__HorizontalScrollWrapper-sc-1bl4hmv-0 > .withHorizontalScroll__ScrollerWrapper-sc-1bl4hmv-3 > .KambiBC-sports-hub_browse-leagues__country-leagues > .KambiBC-sports-hub_browse-leagues__country-league')
    
    await page.waitForSelector('section > section > .KambiBC-sandwich-filter__list > .KambiBC-sandwich-filter__event-list-item:nth-child(1) > .KambiBC-sandwich-filter__event-list-info')
    await page.click('section > section > .KambiBC-sandwich-filter__list > .KambiBC-sandwich-filter__event-list-item:nth-child(1) > .KambiBC-sandwich-filter__event-list-info')
    
    await page.waitForSelector('.KambiBC-filter-menu__wrapper > .KambiBC-filter-menu > li:nth-child(2) > .KambiBC-filter-menu__option > a')
    await page.click('.KambiBC-filter-menu__wrapper > .KambiBC-filter-menu > li:nth-child(2) > .KambiBC-filter-menu__option > a')
    
    await page.waitForSelector('.KambiBC-filter-menu__wrapper > .KambiBC-filter-menu > li:nth-child(3) > .KambiBC-filter-menu__option > a')
    await page.click('.KambiBC-filter-menu__wrapper > .KambiBC-filter-menu > li:nth-child(3) > .KambiBC-filter-menu__option > a')
    
    await page.waitForSelector('.KambiBC-filter-menu__wrapper > .KambiBC-filter-menu > li:nth-child(4) > .KambiBC-filter-menu__option > a')
    await page.click('.KambiBC-filter-menu__wrapper > .KambiBC-filter-menu > li:nth-child(4) > .KambiBC-filter-menu__option > a')
    
    await page.waitForSelector('div:nth-child(1) > .KambiBC-outcomes-list > .KambiBC-outcomes-list__column:nth-child(1) > .Button-sc-lvu29a-0 > .OutcomeButton__Wrapper-sc-1anyy32-0 > .OutcomeButton__LabelAndExtras-sc-1anyy32-1')
    await page.click('div:nth-child(1) > .KambiBC-outcomes-list > .KambiBC-outcomes-list__column:nth-child(1) > .Button-sc-lvu29a-0 > .OutcomeButton__Wrapper-sc-1anyy32-0 > .OutcomeButton__LabelAndExtras-sc-1anyy32-1')
    
    await page.waitForSelector('div:nth-child(1) > .KambiBC-outcomes-list > .KambiBC-outcomes-list__column:nth-child(1) > .Button-sc-lvu29a-0 > .OutcomeButton__Wrapper-sc-1anyy32-0 > .OutcomeButton__LabelAndExtras-sc-1anyy32-1')
    await page.click('div:nth-child(1) > .KambiBC-outcomes-list > .KambiBC-outcomes-list__column:nth-child(1) > .Button-sc-lvu29a-0 > .OutcomeButton__Wrapper-sc-1anyy32-0 > .OutcomeButton__LabelAndExtras-sc-1anyy32-1')
    
    await page.waitForSelector('.KambiBC-navigation-menu__section:nth-child(2) > .KambiBC-navigation-menu__section-wrapper > .KambiBC-navigation-menu__section-links > .KambiBC-navigation-menu__list-item:nth-child(1) > .KambiBC-navigation-menu__link > .KambiBC-navigation-menu__label-wrapper > .KambiBC-navigation-menu__label > .KambiBC-navigation-menu__label--title')
    await page.click('.KambiBC-navigation-menu__section:nth-child(2) > .KambiBC-navigation-menu__section-wrapper > .KambiBC-navigation-menu__section-links > .KambiBC-navigation-menu__list-item:nth-child(1) > .KambiBC-navigation-menu__link > .KambiBC-navigation-menu__label-wrapper > .KambiBC-navigation-menu__label > .KambiBC-navigation-menu__label--title')
    



});