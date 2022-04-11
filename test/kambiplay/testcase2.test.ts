    // Test case 2 
    //Go to Kambiplay - click on all sports - Click on fewer sports - select one of the top sports - click on an event- click on home to go to landing page
    import { expect, Page, test } from "@playwright/test";
    test('test', async ({ page }) => {

    // Go to https://play.kambi.com/#home
    await page.goto('https://play.kambi.com/#home');


    await page.waitForSelector('.KambiBC-navigation-menu__link--allsports > .KambiBC-navigation-menu__label-wrapper > .KambiBC-navigation-menu__label > .KambiBC-navigation-menu__label--title')
    await page.click(' .KambiBC-navigation-menu__link--allsports > .KambiBC-navigation-menu__label-wrapper > .KambiBC-navigation-menu__label > .KambiBC-navigation-menu__label--title')
  
    await page.waitForSelector('.KambiBC-navigation-menu__link--allsports > .KambiBC-navigation-menu__label-wrapper > .KambiBC-navigation-menu__label > .KambiBC-navigation-menu__label--title')
    await page.click('.KambiBC-navigation-menu__link--allsports > .KambiBC-navigation-menu__label-wrapper > .KambiBC-navigation-menu__label > .KambiBC-navigation-menu__label--title')
  
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