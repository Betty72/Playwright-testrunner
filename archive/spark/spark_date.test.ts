import { expect, Page, test } from "@playwright/test";

test('test', async ({ page }) => {
  // Go to https://spark-design.kambicdn.com/
  await page.goto('https://spark-design.kambicdn.com/');
  // Go to https://spark-design.kambicdn.com/?path=/story/components--spark
  await page.goto('https://spark-design.kambicdn.com/?path=/story/components--spark');
  // Click text=Inputs
  await page.click('text=Inputs');
  // Click text=Date Pickers
  await page.click('text=Date Pickers');
  await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-inputs-date-pickers--date-picker');
  // Click text=Date Picker from Chip
  await page.click('text=Date Picker from Chip');
  await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-inputs-date-pickers--date-picker-from-chip');
  // Click div[role="button"]:has-text("Pick a date")
  await page.frame({
    name: 'storybook-preview-iframe'
  }).click('div[role="button"]:has-text("Pick a date")');
  // Click button:has-text("14")
  await page.frame({
    name: 'storybook-preview-iframe'
  }).click('button:has-text("14")');
  // Click text=Date Picker with disabled past
  await page.click('text=Date Picker with disabled past');
  await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-inputs-date-pickers--date-picker-with-disabled-past');
  // Click text=Date Picker with disabled future
  await page.click('text=Date Picker with disabled future');
  await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-inputs-date-pickers--date-picker-with-disabled-future');
  // Click text=Date Picker with minimum date
  await page.click('text=Date Picker with minimum date');
  await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-inputs-date-pickers--date-picker-with-minimum-date');
  // Click text=Date Picker with maximum date
  await page.click('text=Date Picker with maximum date');
  await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-inputs-date-pickers--date-picker-with-maximum-date');
  // Click text=Date Picker with open and close callbacks
  await page.click('text=Date Picker with open and close callbacks');
  await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-inputs-date-pickers--date-picker-with-open-and-close-callbacks');
});