import { expect, Page, test } from "@playwright/test";
test('test_left_menu', async ({ page }) => {
    // Go to https://play.kambi.com/
    await page.goto('https://play.kambi.com/');
    // Go to https://play.kambi.com/#home
    await page.goto('https://play.kambi.com/#home');
    // Click text=Live
    await page.click('text=Live');
    await expect(page).toHaveURL('https://play.kambi.com/#in-play');
    // Click text=Starting Soon
    await page.click('text=Starting Soon');
    await expect(page).toHaveURL('https://play.kambi.com/#starting-soon');
    // Click text=NBA
    await page.click('text=NBA');
    await expect(page).toHaveURL('https://play.kambi.com/#sports-hub/basketball/nba');
    // Click text=NHL
    await page.click('text=NHL');
    await expect(page).toHaveURL('https://play.kambi.com/#sports-hub/ice_hockey/nhl');
    // Click text=Today's Football
    await page.click('text=Today\'s Football');
    await expect(page).toHaveURL('https://play.kambi.com/#coupon/dailysportcoupon/football');
    // Click text=Top European Football
    await page.click('text=Top European Football');
    await expect(page).toHaveURL('https://play.kambi.com/#filter/football/[romania,england,italy,spain,germany,france,champions_league,europa_league]');
    // Click :nth-match(:text("Basketball"), 2)
    await page.click(':nth-match(:text("Basketball"), 2)');
    await expect(page).toHaveURL('https://play.kambi.com/#sports-hub/basketball');
    // Click text=Baseball
    await page.click('text=Baseball');
    await expect(page).toHaveURL('https://play.kambi.com/#sports-hub/baseball');
    // Click :nth-match(:text("Football"), 3)
    await page.click(':nth-match(:text("Football"), 3)');
    await expect(page).toHaveURL('https://play.kambi.com/#sports-hub/football');
    // Click text=Tennis
    await page.click('text=Tennis');
    await expect(page).toHaveURL('https://play.kambi.com/#sports-hub/tennis');
    // Click text=American Football
    await page.click('text=American Football');
    await expect(page).toHaveURL('https://play.kambi.com/#sports-hub/american_football');
    // Click :nth-match(:text("Ice Hockey"), 2)
    await page.click(':nth-match(:text("Ice Hockey"), 2)');
    await expect(page).toHaveURL('https://play.kambi.com/#sports-hub/ice_hockey');
    // Click text=Golf
    await page.click('text=Golf');
    await expect(page).toHaveURL('https://play.kambi.com/#sports-hub/golf');
    // Click text=Boxing
    await page.click('text=Boxing');
    await expect(page).toHaveURL('https://play.kambi.com/#sports-hub/boxing');
    // Click text=All Sports
    await page.click('text=All Sports');
  });