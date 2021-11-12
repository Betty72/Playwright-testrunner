import { expect, Page, test } from "@playwright/test";

test('test', async ({ page }) => {
  // Go to https://cte-static.kambi.com/m/?token=333&offering=atg&env=prod&api=prod&auth=false&currency=GBP&locale=en_GB&market=GB&channelId=3#home
  await page.goto('https://cte-static.kambi.com/m/?token=333&offering=atg&env=prod&api=prod&auth=false&currency=GBP&locale=en_GB&market=GB&channelId=3#home');
  // Click text=Right Now
  await page.click('text=Right Now');
  await expect(page).toHaveURL('https://cte-static.kambi.com/m/?token=333&offering=atg&env=prod&api=prod&auth=false&currency=GBP&locale=en_GB&market=GB&channelId=3#filter/all/all/all/all/in-play');
  // Click text=Starting Soon
  await page.click('text=Starting Soon');
  await expect(page).toHaveURL('https://cte-static.kambi.com/m/?token=333&offering=atg&env=prod&api=prod&auth=false&currency=GBP&locale=en_GB&market=GB&channelId=3#filter/all/all/all/all/starting-soon');
  // Click text=All Sports
  await page.click('text=All Sports');
  // Click text=American Football
  await page.click('text=American Football');
  await expect(page).toHaveURL('https://cte-static.kambi.com/m/?token=333&offering=atg&env=prod&api=prod&auth=false&currency=GBP&locale=en_GB&market=GB&channelId=3#filter/american_football');
  // Click text=Australian Rules
  await page.click('text=Australian Rules');
  await expect(page).toHaveURL('https://cte-static.kambi.com/m/?token=333&offering=atg&env=prod&api=prod&auth=false&currency=GBP&locale=en_GB&market=GB&channelId=3#filter/australian_rules');
  // Click text=Bandy
  await page.click('text=Bandy');
  await expect(page).toHaveURL('https://cte-static.kambi.com/m/?token=333&offering=atg&env=prod&api=prod&auth=false&currency=GBP&locale=en_GB&market=GB&channelId=3#filter/bandy');
  // Click text=Baseball
  await page.click('text=Baseball');
  await expect(page).toHaveURL('https://cte-static.kambi.com/m/?token=333&offering=atg&env=prod&api=prod&auth=false&currency=GBP&locale=en_GB&market=GB&channelId=3#filter/baseball');
  // Click text=Boxing
  await page.click('text=Boxing');
  await expect(page).toHaveURL('https://cte-static.kambi.com/m/?token=333&offering=atg&env=prod&api=prod&auth=false&currency=GBP&locale=en_GB&market=GB&channelId=3#filter/boxing');
  // Click text=Cricket
  await page.click('text=Cricket');
  await expect(page).toHaveURL('https://cte-static.kambi.com/m/?token=333&offering=atg&env=prod&api=prod&auth=false&currency=GBP&locale=en_GB&market=GB&channelId=3#filter/cricket');
  // Click text=Cycling
  await page.click('text=Cycling');
  await expect(page).toHaveURL('https://cte-static.kambi.com/m/?token=333&offering=atg&env=prod&api=prod&auth=false&currency=GBP&locale=en_GB&market=GB&channelId=3#filter/cycling');
});