import {Page , test } from "@playwright/test";


test("Logger", async ({ page }) => {
    
    const consoleLogs = [];
    page.on("console", msg => {
        if (msg.type() == "error") {
            console.log(msg.text());
            consoleLogs.push(msg.text());
        }
    })

    page.on('console', async msg => {
        for (let i = 0; i < msg.args().length; ++i)
          console.log(`${i}: ${await msg.args()[i].jsonValue()}`);
      })
    await page.goto("https://spark-design.kambicdn.com/");     
      await page.click('text=Data Display');
 
      

});