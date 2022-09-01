const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");

const LoginPage = require("../pageObjects/LoginPage");
const DepartmentPage = require("../pageObjects/DepartmentPage");

const loginPage = new LoginPage();
const departmentPage = new DepartmentPage();

Given("the user has logged in as {string}", async function (userName) {
    await loginPage.viewPage();
    await loginPage.loginWithDemoUser(userName.trim());
});

When("the user selects the menu {string}", async function (menuName) {
    await departmentPage.clickOnMenu(menuName.trim());
});

When(
    "the user creates a new department with name {string} and description {string}",
    async function (departmentName, departmentDescription) {
        await departmentPage.clickOnCreateDepartmentBtn();
        await departmentPage.fillDepartmentDetails(
            departmentName.trim(),
            departmentDescription.trim()
        );
        await departmentPage.clickOnSaveDepartmentBtn();
    }
);

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

Then(
    "the department should be successfully created",
    async function () {
        const successStatusText = await departmentPage.getPopupHeaderText();
        console.log(successStatusText);

        assert.equal(
            successStatusText.contains("Success"),
            true,
            "Success message is not displayed"
        );
    }
);
