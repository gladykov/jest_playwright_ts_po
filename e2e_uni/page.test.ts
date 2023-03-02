// test
// import { chromium } from 'playwright-chromium';
import { expect, test, beforeAll, afterAll, describe } from '@jest/globals';
import Search from "./page_objects/first_page";

// console.log("started");
//
//
// (async () => {
//     const browser = await chromium.launch({headless: false});
//     const context = await browser.newContext();
//     const page = await context.newPage();
// })();
//
// console.log("finished")


describe("Test", () => {
    let context;
    let page;

    beforeEach(async () => {
        context = await global.browser.newContext();
        page = await context.newPage();
    })

    afterEach(async () => {
         context.close()
    })

    test('title should match BrowserStack - Google Search', async () => {
        const search_page = new Search(page);
        // page = global.page
        await search_page.open();
        // await page.type('input[name="q"]', "BrowserStack");
        await search_page.search();
        expect(await search_page.page.title()).toBe('BrowserStack - Pesquisa Google');
    })

    test('Another function', async () => {
        const search_page = new Search(page);
        // con1st page = new (Search.constructor as new() => typeof Search)().page;
        await search_page.page.goto("https://www.reddit.com");

        // await search_page.goto("https://www.reddit.com");
        expect("fur").toBe("fur");
    })

})