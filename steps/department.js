const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");

const LoginPage = require("../pageObjects/LoginPage");
const DashboardPage = require("../pageObjects/DashboardPage");

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

Given("the user has logged in as {string}", async function (userName) {
    await loginPage.viewPage();
    await loginPage.loginWithDemoUser(userName.trim());
});

When("the user selects the menu {string}", async function (menuName) {
    await dashboardPage.clickOnMenu(menuName.trim());
});

When("the user creates a department {string}", function (string) {
    // Write code here that turns the phrase above into concrete actions
});

Then("a new department called {string} should be created", function (string) {
    // Write code here that turns the phrase above into concrete actions
});

Then("the {string} section should appear", async function (sectionName) {
    const sectionLocator = await page.locator(".card h4.card-title");
    const sectionText = await sectionLocator.innerText();

    assert.equal(
        sectionText.trim(),
        sectionName.trim(),
        `${sectionName} section is not loaded`
    );
});
