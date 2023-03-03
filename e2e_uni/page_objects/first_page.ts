import BasePage from './base_page';
import {Page} from "playwright-core";

export default class Search extends BasePage {

    constructor(page: Page) {
        super(page)
    }

    protected PAGE_URL = '/';

    // All page objects will go here as long list
    private readonly $searchInput = 'input[name="q"]';

    async search() {
        await this.page.type(this.$searchInput, "BrowserStack");
        await this.page.press(this.$searchInput, "Enter");    }
}
