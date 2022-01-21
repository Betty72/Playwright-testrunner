import { expect, Page, test } from "@playwright/test";
test('test', async ({ page }) => {
    // Go to https://spark-design.kambicdn.com/
    await page.goto('https://spark-design.kambicdn.com/');
    // Go to https://spark-design.kambicdn.com/?path=/story/components--spark
    await page.goto('https://spark-design.kambicdn.com/?path=/story/components--spark');
    // Click text=Feedback
    await page.click('text=Feedback');
    // Click text=Alert
    await page.click('text=Alert');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-feedback-alert--simple-alerts');
    // Click text=Simple alerts
    await page.click('text=Simple alerts');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-feedback-alert--simple-alerts');
    // Click text=Filled
    await page.click('text=Filled');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-feedback-alert--filled');
    // Click text=Outlined
    await page.click('text=Outlined');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-feedback-alert--outlined');
    // Click text=Backdrop
    await page.click('text=Backdrop');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-feedback-backdrop--backdrop');
    // Click text=Dialogs
    await page.click('text=Dialogs');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-feedback-dialogs--dialog-example');
    // Click text=Dialog Example
    await page.click('text=Dialog Example');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-feedback-dialogs--dialog-example');
    // Click text=Input header
    await page.click('text=Input header');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-feedback-dialogs--input-header-dialog-example');
    // Click text=Header and footer
    await page.click('text=Header and footer');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-feedback-dialogs--header-footer-dialog-example');
    // Click text=Full Screen Dialog
    await page.click('text=Full Screen Dialog');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-feedback-dialogs--full-screen-dialog-example');
    // Click button:has-text("Open Full Screen dialog")
    await page.frame({
      name: 'storybook-preview-iframe'
    }).click('button:has-text("Open Full Screen dialog")');
    // Click button:has-text("Confirm")
    await page.frame({
      name: 'storybook-preview-iframe'
    }).click('button:has-text("Confirm")');
    // Click text=Full Screen Dialog in Open state
    await page.click('text=Full Screen Dialog in Open state');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-feedback-dialogs--full-screen-dialog-example-open-state');
    // Click button:has-text("Cancel")
    await page.frame({
      name: 'storybook-preview-iframe'
    }).click('button:has-text("Cancel")');
    // Click text=Full Screen Dialog Extra Footer Content
    await page.click('text=Full Screen Dialog Extra Footer Content');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-feedback-dialogs--full-screen-dialog-extra-footer-content-example');
    // Click text=Progress
    await page.click('text=Progress');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-feedback-progress--progress-example');
    // Click text=Progress example
    await page.click('text=Progress example');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-feedback-progress--progress-example');
    // Click text=Snackbars
    await page.click('text=Snackbars');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-feedback-snackbars--simple-snackbar');
    // Click text=Simple snackbar
    await page.click('text=Simple snackbar');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-feedback-snackbars--simple-snackbar');
    // Click text=Snackbar alert
    await page.click('text=Snackbar alert');
    await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-feedback-snackbars--snackbar-alert');
  });