import { expect, Page, test } from "@playwright/test";
test('test', async ({ page }) => {
    // Go to https://spark-design.kambicdn.com/
    await page.goto('https://spark-design.kambicdn.com/');
    // Go to https://spark-design.kambicdn.com/?path=/story/components--spark
    await page.goto('https://spark-design.kambicdn.com/?path=/story/components--spark');
    // Click text=Inputs
    await page.click('text=Inputs');
    // Click text=Date Time Range Pickers
    await Promise.all([
      page.waitForNavigation(/*{ url: 'https://spark-design.kambicdn.com/?path=/story/components-inputs-date-time-range-pickers--playground' }*/),
      page.click('text=Date Time Range Pickers')
    ]);
    // Click a:has-text("Date Time Range Picker")
    await page.click('a:has-text("Date Time Range Picker")');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-inputs-date-time-range-pickers--date-time-range-picker');
    // Click text=Date Time Range Picker With Preset Buttons
    await page.click('text=Date Time Range Picker With Preset Buttons');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-inputs-date-time-range-pickers--date-time-range-picker-with-preset-buttons');
    // Click button:has-text("NEXT 3 hours")
    await page.frame({
      name: 'storybook-preview-iframe'
    }).click('button:has-text("NEXT 3 hours")');
    // Click button:has-text("NEXT 150 minutes")
    await page.frame({
      name: 'storybook-preview-iframe'
    }).click('button:has-text("NEXT 150 minutes")');
    // Click button:has-text("NEXT day")
    await page.frame({
      name: 'storybook-preview-iframe'
    }).click('button:has-text("NEXT day")');
    // Click button:has-text("APPLY")
    await page.frame({
      name: 'storybook-preview-iframe'
    }).click('button:has-text("APPLY")');
    // Click text=Date Time Range Picker from Chip
    await page.click('text=Date Time Range Picker from Chip');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-inputs-date-time-range-pickers--date-time-range-picker-from-chip');
    // Click div[role="button"]:has-text("Pick a date range")
    await page.frame({
      name: 'storybook-preview-iframe'
    }).click('div[role="button"]:has-text("Pick a date range")');
    // Click button:has-text("7")
    await page.frame({
      name: 'storybook-preview-iframe'
    }).click('button:has-text("7")');
    // Click button:has-text("9")
    await page.frame({
      name: 'storybook-preview-iframe'
    }).click('button:has-text("9")');
    // Click #hourBtn-19
    await page.frame({
      name: 'storybook-preview-iframe'
    }).click('#hourBtn-19');
    // Click button:has-text("55")
    await page.frame({
      name: 'storybook-preview-iframe'
    }).click('button:has-text("55")');
    // Click button:has-text("APPLY")
    await page.frame({
      name: 'storybook-preview-iframe'
    }).click('button:has-text("APPLY")');
    // Click text=Date Time Range Picker from Chip With Preset Buttons
    await page.click('text=Date Time Range Picker from Chip With Preset Buttons');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-inputs-date-time-range-pickers--date-time-range-picker-from-chip-with-preset-buttons');
    // Click div[role="button"]:has-text("Pick a date range")
    await page.frame({
      name: 'storybook-preview-iframe'
    }).click('div[role="button"]:has-text("Pick a date range")');
    // Click button:has-text("7")
    await page.frame({
      name: 'storybook-preview-iframe'
    }).click('button:has-text("7")');
    // Click button:has-text("9")
    await page.frame({
      name: 'storybook-preview-iframe'
    }).click('button:has-text("9")');
    // Click button:has-text("NEXT 5 months")
    await page.frame({
      name: 'storybook-preview-iframe'
    }).click('button:has-text("NEXT 5 months")');
    // Click button:has-text("APPLY")
    await page.frame({
      name: 'storybook-preview-iframe'
    }).click('button:has-text("APPLY")');
  });
   