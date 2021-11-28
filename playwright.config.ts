import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {

    

    use: {

        headless: false,
        channel: "chrome",
        screenshot: "only-on-failure",
        video: "retain-on-failure",
        launchOptions: {
            slowMo: 500,
          },

          
        
    },
    testMatch: ["kambiplay_betslip.test.ts"], //**.test.ts to run all the tests in the project
    retries: 0,
    reporter: [["dot"], ["json", {outputFile: "test-result.json"}]]
}
export default config;