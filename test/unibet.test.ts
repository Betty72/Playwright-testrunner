import { expect, Page, test } from "@playwright/test";

test('test', async ({ page }) => {
  // Go to https://www.unibet.se/betting/sports/filter/football/matches
  await page.goto('https://www.unibet.se/betting/sports/filter/football/matches');
  // Click text=Tillåt alla cookies
  await page.click('text=Tillåt alla cookies');
  // Click text=Vinnarspel
  await page.click('text=Vinnarspel');
  await expect(page).toHaveURL('https://www.unibet.se/betting/sports/filter/football/competitions');
  // Click text=Australian Rules1
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.unibet.se/betting/sports/filter/australian_rules/competitions' }*/),
    page.click('text=Australian Rules1')
  ]);
  // Click text=Bandy87
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.unibet.se/betting/sports/filter/bandy/matches' }*/),
    page.click('text=Bandy87')
  ]);
  // Click text=Baseball1
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.unibet.se/betting/sports/filter/baseball/competitions' }*/),
    page.click('text=Baseball1')
  ]);
  // Click text=Basket11384
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.unibet.se/betting/sports/filter/basketball/matches' }*/),
    page.click('text=Basket11384')
  ]);
});