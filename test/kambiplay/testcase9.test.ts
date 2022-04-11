import { expect, Page, test } from "@playwright/test";
test('test', async ({ page }) => {

     // Go to https://play.kambi.com/#home
     await page.goto('https://play.kambi.com/#home');

    await page.waitForSelector('.KambiBC-header > .KambiBC-header-main > .KambiBC-header-main__center > .KambiBC-header-main__terms > .KambiBC-applied-terms')
    await page.click('.KambiBC-header > .KambiBC-header-main > .KambiBC-header-main__center > .KambiBC-header-main__terms > .KambiBC-applied-terms')
    
    await page.waitForSelector('.KambiBC-term-search-overlay__result-content > div > div > .KambiBC-term-search-results__list > .KambiBC-search-results-term')
    await page.click('.KambiBC-term-search-overlay__result-content > div > div > .KambiBC-term-search-results__list > .KambiBC-search-results-term')
    


});