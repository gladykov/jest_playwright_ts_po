const { chromium } = require('playwright-chromium');
const NodeEnvironment = require('jest-environment-node').TestEnvironment;


class CustomEnvironment extends NodeEnvironment {
    constructor(config, context) {
        super(config, context);
    }

    async setup() {
        this.global.bla = "blabla"

        this.global.browser = await chromium.launch({headless: false});
        await super.setup();
    }

    async teardown() {
        console.log(this.global.bla)
        await this.global.browser.close();
        await super.teardown();
    }

}

module.exports = CustomEnvironment;
