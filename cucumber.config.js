const { chromium } = require("playwright");
const {
    Before,
    After,
    BeforeAll,
    AfterAll,
    setDefaultTimeout,
} = require("@cucumber/cucumber");

setDefaultTimeout(100 * 1000);

BeforeAll(async function () {
    global.browser = await chromium.launch({
        headless: true,
        channel: "chrome",
    });
});

AfterAll(async function () {
    await global.browser.close();
});

Before(async function () {
    global.context = await global.browser.newContext();
    global.page = await global.context.newPage();
});

After(async function () {
    await global.page.close();
    await global.context.close();
});
