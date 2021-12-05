import { expect, Page, test } from "@playwright/test";

test('test', async ({ page }) => {
  // Go to https://kambi.bet.im/#home
  await page.goto('https://kambi.bet.im/#home');
  // Click text=Right Now
  await page.click('text=Right Now');
  await expect(page).toHaveURL('https://kambi.bet.im/#in-play');
  // Click text=Starting Soon
  await page.click('text=Starting Soon');
  await expect(page).toHaveURL('https://kambi.bet.im/#starting-soon');
  // Click text=NBA
  await page.click('text=NBA');
  await expect(page).toHaveURL('https://kambi.bet.im/#sports-hub/basketball/nba');
  // Click text=NHL
  await page.click('text=NHL');
  await expect(page).toHaveURL('https://kambi.bet.im/#sports-hub/ice_hockey/nhl');
  // Click text=Today's Football
  await page.click('text=Today\'s Football');
  await expect(page).toHaveURL('https://kambi.bet.im/#coupon/dailysportcoupon/football');
  // Click text=Top European Football
  await page.click('text=Top European Football');
  await expect(page).toHaveURL('https://kambi.bet.im/#filter/football/[romania,england,italy,spain,germany,france,champions_league,europa_league]');
  // Click :nth-match(:text("Basketball"), 2)
  await page.click(':nth-match(:text("Basketball"), 2)');
  await expect(page).toHaveURL('https://kambi.bet.im/#sports-hub/basketball');
  // Click text=Baseball
  await page.click('text=Baseball');
  await expect(page).toHaveURL('https://kambi.bet.im/#sports-hub/baseball');
});