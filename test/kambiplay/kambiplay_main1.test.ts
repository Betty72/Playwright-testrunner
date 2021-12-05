import { expect, Page, test } from "@playwright/test";
test('test_main1', async ({ page }) => {
    // Go to https://play.kambi.com/
    await page.goto('https://play.kambi.com/');
    // Go to https://play.kambi.com/#home
    await page.goto('https://play.kambi.com/#home');
    // Click #KambiBC-core-ux-landing-page >> text=Top European Football
    await page.click('#KambiBC-core-ux-landing-page >> text=Top European Football');
    // Click text=Top Tennis
    await page.click('text=Top Tennis');
    // Click text=Top Basketball
    await page.click('text=Top Basketball');
    // Click text=Boxing & UFC/MMA
    await page.click('text=Boxing & UFC/MMA');
    // Click text=Cricket
    await page.click('text=Cricket');
    // Click text=Darts
    await page.click('text=Darts');
    // Click #KambiBC-core-ux-landing-page >> text=Esports
    await page.click('#KambiBC-core-ux-landing-page >> text=Esports');
    // Click text=Top Golf
    await page.click('text=Top Golf');
    // Click text=Handball
    await page.click('text=Handball');
    // Click text=Rugby Union + League
    await page.click('text=Rugby Union + League');
    // Click text=Find your bet in our league highlightsTop US LeaguesTop European FootballTop Ten >> button
    await page.click('text=Find your bet in our league highlightsTop US LeaguesTop European FootballTop Ten >> button');
    // Click text=Snooker
    await page.click('text=Snooker');
    // Click text=WK Kwalificatie Europa
    await page.click('text=WK Kwalificatie Europa');
    // Click text=Table Tennis
    await page.click('text=Table Tennis');
  });