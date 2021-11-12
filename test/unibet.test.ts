import { expect, Page, test } from "@playwright/test";

test('test', async ({ page }) => {
  // Go to https://www.unibet.se/betting/sports
  await page.goto('https://www.unibet.se/betting/sports');
  // Go to https://www.unibet.se/betting/sports/home
  await page.goto('https://www.unibet.se/betting/sports/home');
  // Click text=Tillåt alla cookies
  await page.click('text=Tillåt alla cookies');
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
  // Click button:has-text("Greyhounds")
  await page.click('button:has-text("Greyhounds")');
  await expect(page).toHaveURL('https://www.unibet.se/betting/racing#/lobby/greyhounds');
  // Click [data-test-id="app-nav-button-racing"]
  await page.click('[data-test-id="app-nav-button-racing"]');
  await expect(page).toHaveURL('https://www.unibet.se/betting/racing#/lobby/G');
  // Click [data-test-id="app-nav-button-results"]
  await page.click('[data-test-id="app-nav-button-results"]');
  await expect(page).toHaveURL('https://www.unibet.se/betting/racing#/results/G');
  // Click [data-test-id="app-nav-button-liveNow"]
  await page.click('[data-test-id="app-nav-button-liveNow"]');
  await expect(page).toHaveURL('https://www.unibet.se/betting/racing#/liveNow');
  // Click [data-test-id="app-nav-button-virtual"]
  await page.click('[data-test-id="app-nav-button-virtual"]');
  await expect(page).toHaveURL('https://www.unibet.se/betting/racing#/virtual');
});