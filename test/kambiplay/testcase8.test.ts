import { expect, Page, test } from "@playwright/test";
test('test', async ({ page }) => {

    // Go to https://play.kambi.com/#home
    await page.goto('https://play.kambi.com/#home');

    await page.waitForSelector('.KambiBC-promo-card ')
    await page.click('.KambiBC-promo-card')
    
    await page.waitForSelector('.KambiBC-navigation-menu__section:nth-child(2) ')
    await page.click('.KambiBC-navigation-menu__section:nth-child(2)')
    

     //return to the landing page
     await page.dblclick('text=Home');
     await expect(page).toHaveURL('https://play.kambi.com/#home');
    
 });
