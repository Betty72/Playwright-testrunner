import { expect, Page, test } from "@playwright/test";

test('test', async ({ page }) => {
    // Go to https://kambi.bet.im/#home
    await page.goto('https://kambi.bet.im/#home');
    // Click text=Right Now
    await page.click('text=Right Now');
    await expect(page).toHaveURL('https://kambi.bet.im/#in-play');
    // Click #KambiBC-content >> text=Football
    await page.click('#KambiBC-content >> text=Football');
    // Click #KambiBC-content >> text=Ice Hockey
    await page.click('#KambiBC-content >> text=Ice Hockey');
    // Click text=Today's Football
    await page.click('text=Today\'s Football');
    await expect(page).toHaveURL('https://kambi.bet.im/#coupon/dailysportcoupon/football');
    // Click :nth-match(:text("Basketball"), 2)
    await page.click(':nth-match(:text("Basketball"), 2)');
    await expect(page).toHaveURL('https://kambi.bet.im/#sports-hub/basketball');
    // Click :nth-match(:text("Football"), 3)
    await page.click(':nth-match(:text("Football"), 3)');
    await expect(page).toHaveURL('https://kambi.bet.im/#sports-hub/football');
    // Click text=Golf
    await page.click('text=Golf');
    await expect(page).toHaveURL('https://kambi.bet.im/#sports-hub/golf');
    // Click text=The Majors
    await page.click('text=The Majors');
  });