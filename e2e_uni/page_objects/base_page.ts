import {Page} from "playwright-core";


export default abstract class BasePage {
    page: Page;
    protected PAGE_URL: string;

    protected readonly BASE_URL = 'https://www.google.com';

    protected constructor(page: Page) {
        this.page = page;
    }

    // Create abstract layer, so if ever we will need to change webdriver, we will not need to update all tests
    async open() {
        await this.page.goto(`${this.BASE_URL}${this.PAGE_URL}`);
    }

    async title() {
        await this.page.title();
    }
}
