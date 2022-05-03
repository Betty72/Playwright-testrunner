import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    timeout: 60000,
   

    use: {

        headless: true,
        channel: "chrome",
        screenshot: "only-on-failure",
        video: "retain-on-failure",
        trace: 'retain-on-failure',
        launchOptions: {
            slowMo: 2000,
          },  
    },
    testMatch: ["**.test.ts"], //**.test.ts to run all the tests in the project
    retries: 0,
    reporter: [["dot"], ["json", {outputFile: "test-result.json"}]]
}
export default config;