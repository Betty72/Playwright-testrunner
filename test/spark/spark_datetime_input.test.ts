import { expect, Page, test } from "@playwright/test";
test('test', async ({ page }) => {
    // Go to https://spark-design.kambicdn.com/
    await page.goto('https://spark-design.kambicdn.com/');
    // Go to https://spark-design.kambicdn.com/?path=/story/components--spark
    await page.goto('https://spark-design.kambicdn.com/?path=/story/components--spark');
    // Click text=Inputs
    await page.click('text=Inputs');
    // Click text=Date Time Range Pickers
    await page.click('text=Date Time Range Pickers');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-inputs-date-time-range-pickers--playground');
    // Click text=Date Time Range Picker from single Input
    await page.click('text=Date Time Range Picker from single Input');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-inputs-date-time-range-pickers--date-time-range-picker-from-single-input');
    // Click input[type="text"]
    await page.frame({
      name: 'storybook-preview-iframe'
    }).click('input[type="text"]');
    // Click button:has-text("7")
    await page.frame({
      name: 'storybook-preview-iframe'
    }).click('button:has-text("7")');
    // Click button:has-text("9")
    await page.frame({
      name: 'storybook-preview-iframe'
    }).click('button:has-text("9")');
    // Click #hourBtn-20
    await page.frame({
      name: 'storybook-preview-iframe'
    }).click('#hourBtn-20');
    // Click button:has-text("56")
    await page.frame({
      name: 'storybook-preview-iframe'
    }).click('button:has-text("56")');
    // Click button:has-text("APPLY")
    await page.frame({
      name: 'storybook-preview-iframe'
    }).click('button:has-text("APPLY")');
    // Click text=Date Time Range Picker from different inputs
    await page.click('text=Date Time Range Picker from different inputs');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-inputs-date-time-range-pickers--date-time-range-picker-from-different-input');
    // Click input[type="text"]
    await page.frame({
      name: 'storybook-preview-iframe'
    }).click('input[type="text"]');
    // Click button:has-text("14")
    await page.frame({
      name: 'storybook-preview-iframe'
    }).click('button:has-text("14")');
    // Click button:has-text("03")
    await page.frame({
      name: 'storybook-preview-iframe'
    }).click('button:has-text("03")');
    // Click #minuteBtn-3
    await page.frame({
      name: 'storybook-preview-iframe'
    }).click('#minuteBtn-3');
    // Click button:has-text("16")
    await page.frame({
      name: 'storybook-preview-iframe'
    }).click('button:has-text("16")');
    // Click button:has-text("APPLY")
    await page.frame({
      name: 'storybook-preview-iframe'
    }).click('button:has-text("APPLY")');
  });