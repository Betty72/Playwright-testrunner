// Test case 3
//Go to Kambiplay - On sandwitch filter - Click on first level - Click on second level - Click on third level - click on first event - click on home to go to landing page

import { expect, Page, test } from "@playwright/test";
test('test', async ({ page }) => {
    
    // Go to https://play.kambi.com/#home
    await page.goto('https://play.kambi.com/#home');

    // in sandwich filter, top level, select the second choice
    await page.waitForSelector('.KambiBC-sandwich-filter-foreground--level-0 ul.KambiBC-filter-menu > li:nth-child(2)')
    await page.click('.KambiBC-sandwich-filter-foreground--level-0 ul.KambiBC-filter-menu > li:nth-child(2)')

    // in sandwich filter, second level, select the second choice
    await page.waitForSelector('.KambiBC-sandwich-filter-foreground--level-1 ul.KambiBC-filter-menu > li:nth-child(2)')
    await page.click('.KambiBC-sandwich-filter-foreground--level-1 ul.KambiBC-filter-menu > li:nth-child(2)')
    

    // in sandwich filter, third level, select the third choice
    await page.waitForSelector('.KambiBC-sandwich-filter-foreground--level-2 ul.KambiBC-filter-menu > li:nth-child(3)')
    await page.click('.KambiBC-sandwich-filter-foreground--level-2 ul.KambiBC-filter-menu > li:nth-child(3)')
    

    // select the first event
    await page.waitForSelector('.KambiBC-sandwich-filter__event-list-item:nth-child(1) > .KambiBC-sandwich-filter__event-list-info')
    await page.click('.KambiBC-sandwich-filter__event-list-item:nth-child(1) > .KambiBC-sandwich-filter__event-list-info')
    
    // go back to landing page
    await page.dblclick('text=Home');
    await expect(page).toHaveURL('https://play.kambi.com/#home');
  });