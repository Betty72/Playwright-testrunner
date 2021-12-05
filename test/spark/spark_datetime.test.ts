import { expect, Page, test } from "@playwright/test";
test('test', async ({ page }) => {
    // Go to https://spark-design.kambicdn.com/
    await page.goto('https://spark-design.kambicdn.com/');
    // Go to https://spark-design.kambicdn.com/?path=/story/components--spark
    await page.goto('https://spark-design.kambicdn.com/?path=/story/components--spark');
    // Click text=Inputs
    await page.click('text=Inputs');
    // Click text=Date Time Pickers
    await page.click('text=Date Time Pickers');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-inputs-date-time-pickers--date-time-picker');
    // Click text=Date Time Picker from Chip
    await page.click('text=Date Time Picker from Chip');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-inputs-date-time-pickers--date-time-picker-from-chip');
    // Click div[role="button"]:has-text("Pick a date")
    await page.frame({
      name: 'storybook-preview-iframe'
    }).click('div[role="button"]:has-text("Pick a date")');
    // Click button:has-text("7")
    await page.frame({
      name: 'storybook-preview-iframe'
    }).click('button:has-text("7")');
    // Click button:has-text("04")
    await page.frame({
      name: 'storybook-preview-iframe'
    }).click('button:has-text("04")');
    // Click #minuteBtn-4
    await page.frame({
      name: 'storybook-preview-iframe'
    }).click('#minuteBtn-4');
    // Click button:has-text("APPLY")
    await page.frame({
      name: 'storybook-preview-iframe'
    }).click('button:has-text("APPLY")');
    // Click text=Date Time Picker with a set date
    await page.click('text=Date Time Picker with a set date');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-inputs-date-time-pickers--date-time-picker-with-a-set-date');
    // Click text=Date Time Picker with open and close callbacks
    await page.click('text=Date Time Picker with open and close callbacks');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-inputs-date-time-pickers--date-time-picker-with-open-and-close-callbacks');
  });