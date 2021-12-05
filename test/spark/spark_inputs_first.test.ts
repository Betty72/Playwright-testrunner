import { expect, Page, test } from "@playwright/test";
test('test', async ({ page }) => {
    // Go to https://spark-design.kambicdn.com/
    await page.goto('https://spark-design.kambicdn.com/');
    // Go to https://spark-design.kambicdn.com/?path=/story/components--spark
    await page.goto('https://spark-design.kambicdn.com/?path=/story/components--spark');
    // Click text=Inputs
    await page.click('text=Inputs');
    // Click text=Autocomplete
    await page.click('text=Autocomplete');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-inputs-autocomplete--simple-autocomplete');
    // Click [aria-label="Open"]
    await page.frame({
      name: 'storybook-preview-iframe'
    }).click('[aria-label="Open"]');
    // Click [aria-label="Close"]
    await page.frame({
      name: 'storybook-preview-iframe'
    }).click('[aria-label="Close"]');
    // Click text=Buttons
    await page.click('text=Buttons');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-inputs-buttons--simple-button');
    // Click text=Simple button
    await page.click('text=Simple button');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-inputs-buttons--simple-button');
    // Click text=Contained buttons
    await page.click('text=Contained buttons');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-inputs-buttons--contained-buttons');
    // Click text=Outlined buttons
    await page.click('text=Outlined buttons');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-inputs-buttons--outlined-buttons');
    // Click text=Text buttons
    await page.click('text=Text buttons');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-inputs-buttons--text-buttons');
    // Click text=Floating action buttons
    await page.click('text=Floating action buttons');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-inputs-buttons--floating-action-buttons');
    // Click text=Sizes
    await page.click('text=Sizes');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-inputs-buttons--sizes');
    // Click text=Icon buttons
    await page.click('text=Icon buttons');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-inputs-buttons--icon-buttons');
    // Click text=Icon and label buttons
    await page.click('text=Icon and label buttons');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-inputs-buttons--icon-and-label-buttons');
    // Click text=Split button
    await page.click('text=Split button');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-inputs-buttons--split-button');
    // Click text=Checkboxes
    await page.click('text=Checkboxes');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-inputs-checkboxes--checkbox-example');
    // Click text=No label checkboxes
    await page.click('text=No label checkboxes');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-inputs-checkboxes--no-label-checkboxes');
    // Click #components-inputs-checkboxes--label-checkboxes
    await page.click('#components-inputs-checkboxes--label-checkboxes');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-inputs-checkboxes--label-checkboxes');
    // Click text=Formgroup Checkboxes
    await page.click('text=Formgroup Checkboxes');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-inputs-checkboxes--formgroup-checkboxes');
    // Check text=Gilad GrayJason KillianAntoine Llorca >> :nth-match(input[type="checkbox"], 2)
    await page.frame({
      name: 'storybook-preview-iframe'
    }).check('text=Gilad GrayJason KillianAntoine Llorca >> :nth-match(input[type="checkbox"], 2)');
    // Check text=Gilad GrayJason KillianAntoine Llorca >> :nth-match(input[type="checkbox"], 3)
    await page.frame({
      name: 'storybook-preview-iframe'
    }).check('text=Gilad GrayJason KillianAntoine Llorca >> :nth-match(input[type="checkbox"], 3)');
  });