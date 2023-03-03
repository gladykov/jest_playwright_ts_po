import Search from "./page_objects/first_page";

describe("Test", () => {
    let context;
    let page;

    beforeEach(async () => {
        context = await global.browser.newContext();
        page = new Search(await context.newPage());
    })

    afterEach(async () => {
         context.close()
    })

    test('title should match BrowserStack - Google Search', async () => {
        await page.open();
        await page.search();
        expect(await page.title()).toBe('BrowserStack - Pesquisa Google');
    })

    test('Another function', async () => {
        await page.page.goto("https://www.reddit.com");
        expect("fur").toBe("fur");
    })

})