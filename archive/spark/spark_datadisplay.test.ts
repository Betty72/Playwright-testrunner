import { expect, Page, test } from "@playwright/test";
test('test', async ({ page }) => {
  // Go to https://spark-design.kambicdn.com/
  await page.goto('https://spark-design.kambicdn.com/');
  // Go to https://spark-design.kambicdn.com/?path=/story/components--spark
  await page.goto('https://spark-design.kambicdn.com/?path=/story/components--spark');
  // Click text=Data Display
  await page.click('text=Data Display');
  // Click text=Account Information
  await page.click('text=Account Information');
  await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-data-display-account-information--playground');
  // Click text=Playground
  await page.click('text=Playground');
  await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-data-display-account-information--playground');
  // Click a:has-text("Account Information")
  await page.click('a:has-text("Account Information")');
  await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-data-display-account-information--account-information');
  // Click text=Account Information open/close event
  await page.click('text=Account Information open/close event');
  await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-data-display-account-information--account-information-open-close-event');
  // Click text=Avatars
  await page.click('text=Avatars');
  await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-data-display-avatars--avatars-example');
  // Click text=Avatars Example
  await page.click('text=Avatars Example');
  await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-data-display-avatars--avatars-example');
  // Click #components-data-display-avatars--avatars
  await page.click('#components-data-display-avatars--avatars');
  await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-data-display-avatars--avatars');
  // Click text=Badges
  await page.click('text=Badges');
  await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-data-display-badges--simple-badges');
  // Click text=Simple Badges
  await page.click('text=Simple Badges');
  await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-data-display-badges--simple-badges');
  // Click text=Chips
  await page.click('text=Chips');
  await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-data-display-chips--playground');
  // Click #components-data-display-chips--playground
  await page.click('#components-data-display-chips--playground');
  await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-data-display-chips--playground');
  // Click text=Solid chips
  await page.click('text=Solid chips');
  await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-data-display-chips--solid-chips');
  // Click text=Outlined chips
  await page.click('text=Outlined chips');
  await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-data-display-chips--outlined-chips');
  // Click text=Array chips
  await page.click('text=Array chips');
  await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-data-display-chips--array-chips');
  // Click text=Dividers
  await page.click('text=Dividers');
  await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-data-display-dividers--list-dividers');
  // Click text=List dividers
  await page.click('text=List dividers');
  await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-data-display-dividers--list-dividers');
  // Click text=Subheader dividers
  await page.click('text=Subheader dividers');
  await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-data-display-dividers--subheader-dividers');
  // Click text=Vertical dividers
  await page.click('text=Vertical dividers');
  await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-data-display-dividers--vertical-dividers');
  // Click text=Icons
  await page.click('text=Icons');
  await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-data-display-icons--general-icons');
  // Click text=General icons
  await page.click('text=General icons');
  await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-data-display-icons--general-icons');
  // Click text=Sport icons
  await page.click('text=Sport icons');
  await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-data-display-icons--sport-icons');
  // Click text=Single General Icon
  await page.click('text=Single General Icon');
  await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-data-display-icons--single-general-icon');
  // Click text=Single Sport icon
  await page.click('text=Single Sport icon');
  await expect(page).toHaveURL('https://spark-design.kambicdn.com/?path=/story/components-data-display-icons--single-sport-icon');
});