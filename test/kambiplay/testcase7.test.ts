import { expect, Page, test } from "@playwright/test";
test('test', async ({ page }) => {

    // Go to https://play.kambi.com/#home
    await page.goto('https://play.kambi.com/#home');

    await page.waitForSelector('.KambiBC-navigation-menu__list-item > .KambiBC-navigation-menu__link--allsports')
    await page.click('.KambiBC-navigation-menu__list-item > .KambiBC-navigation-menu__link--allsports')
  
    await page.waitForSelector('.KambiBC-navigation-menu__link--horse_racing')
    await page.click('.KambiBC-navigation-menu__link--horse_racing')

  // Click .KambiBC-toggle-button__rail
    await page.waitForSelector('.KambiBC-toggle-button__rail')
    await page.click('.KambiBC-toggle-button__rail')
  
    await page.waitForSelector('input[name="toggle-race-participants-details"]')
    await page.check('input[name="toggle-race-participants-details"]')
    await page.waitForSelector('input[name="toggle-race-participants-details"]')
    await page.uncheck('input[name="toggle-race-participants-details"]')
  
    await page.waitForSelector('#react-tabs-2 > .KambiBC-tabs__tab_title')
    await page.click('#react-tabs-2 > .KambiBC-tabs__tab_title')
  
    await page.waitForSelector('#react-tabs-4 > .KambiBC-tabs__tab_title')
    await page.click('#react-tabs-4 > .KambiBC-tabs__tab_title')
  
  
  
     //return to the landing page
     await page.dblclick('text=Home');
     await expect(page).toHaveURL('https://play.kambi.com/#home');
    
 });