import { expect, Page, test } from "@playwright/test";

test('test', async ({ page }) => {
    // Go to https://cte-static.kambi.com/m/?token=333&offering=ubuspa&env=prod&api=prod&auth=false&currency=GBP&locale=en_GB&market=GB&channelId=3#home
    await page.goto('https://cte-static.kambi.com/m/?token=333&offering=ubuspa&env=prod&api=prod&auth=false&currency=GBP&locale=en_GB&market=GB&channelId=3#home');
    // Click text=Right Now
    await page.click('text=Right Now');
    await expect(page).toHaveURL('https://cte-static.kambi.com/m/?token=333&offering=ubuspa&env=prod&api=prod&auth=false&currency=GBP&locale=en_GB&market=GB&channelId=3#filter/all/all/all/all/in-play');
    // Click text=Starting Soon
    await page.click('text=Starting Soon');
    await expect(page).toHaveURL('https://cte-static.kambi.com/m/?token=333&offering=ubuspa&env=prod&api=prod&auth=false&currency=GBP&locale=en_GB&market=GB&channelId=3#filter/all/all/all/all/starting-soon');
    // Click text=All Sports
    await page.click('text=All Sports');
    // Click text=Boxing
    await page.click('text=Boxing');
    await expect(page).toHaveURL('https://cte-static.kambi.com/m/?token=333&offering=ubuspa&env=prod&api=prod&auth=false&currency=GBP&locale=en_GB&market=GB&channelId=3#filter/boxing');
    // Click text=All Boxing
    await page.click('text=All Boxing');
    await expect(page).toHaveURL('https://cte-static.kambi.com/m/?token=333&offering=ubuspa&env=prod&api=prod&auth=false&currency=GBP&locale=en_GB&market=GB&channelId=3#drill-down/boxing');
    // Click text=Upcoming Fights
    await page.click('text=Upcoming Fights');
    await expect(page).toHaveURL('https://cte-static.kambi.com/m/?token=333&offering=ubuspa&env=prod&api=prod&auth=false&currency=GBP&locale=en_GB&market=GB&channelId=3#filter/boxing/upcoming_fights');
  });