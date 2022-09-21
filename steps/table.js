const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");

const LoginPage = require("../pageObjects/LoginPage");
const TablePage = require("../pageObjects/TablePage");

const loginPage = new LoginPage();
const tablePage = new TablePage();

Given("the user has logged in as Demo {string}", async function (userName) {
    await loginPage.viewPage();
    await loginPage.loginWithDemoUser(userName.trim());
});

When("the user selects the {string} menu", async function (menuName) {
    await tablePage.clickOnMenu(menuName.trim());
});

Then("the section {string} should appear", async function (sectionName) {
    const sectionLocator = await page.locator("button.btn-primary:nth-child(1)");
    const sectionText = await sectionLocator.innerText();

    assert.equal(
        sectionText.trim(),
        sectionName.trim(),
        `${sectionName} section is not loaded`
    );
});

When('the user fills a form for new table with name {string}, {string}, {string}, and {string}',
    async function(tableName, tableSpace, tableCapacity, tableStatus){
        await tablePage.clickOnCreateTableBtn();
        await tablePage.fillTableDetails(
            tableName.trim(),
            tableSpace.trim(),
            tableCapacity,
            tableStatus.trim()
        );
});

When('the user clicks Save Table button', async function(){
    await tablePage.clickOnSaveTableBtn();
})

Then(
    "the table should be created successfully",
    async function () {
        const successStatusText = await tablePage.getPopupHeaderText();
        console.log(successStatusText);

        assert.equal(
            successStatusText.includes("Success!"),
            true,
            "Table has been created."
        );
    }
);

When('the user clicks Create Table button without filling the form', async function(){  
    await tablePage.clickOnCreateTableBtn();
    await tablePage.clickOnSaveTableBtn();
})

When('the system throws alert message and the table should not be created', async function(){
    const alertText = await tablePage.getAlertMessage();

    if(alertText === "Alert: Table name is required."){
        console.log("Alert message testing passed.")
    }
    else{
        console.log("Alert message testing failed.")
    }
})

When('the user cancels the table creation and the table should not be created', async function(){
    await tablePage.clickOnCancelTableBtn();
})

When('the user closes the table creation and the table should not be created', async function(){
    await tablePage.clickOnCloseTableBtn();
})

When('the user clicks 3dot icon of the table with name {string}', async function(tableName){
    await tablePage.clickOnThreeDotIcon(tableName);
})

When('the user clicks the Delete button', async function(){
    await tablePage.clickOnDeleteTableBtn();
})

Then('the user confirms the deletion and the table should be successfully deleted', async function(){
    await tablePage.clickOnConfirmDeleteTableBtn();
    const successStatusText = await tablePage.getPopupHeaderText();
    console.log(successStatusText);

    assert.equal(
        successStatusText.includes("Success!"),
        true,
        "Table Deleted."
    );
})

Then('the user cancels the deletion and the table should not be deleted', async function(){
    await tablePage.clickOnCancelDeleteTableBtn();
})

When("the user clicks the Edit button", async function () { 
    await tablePage.clickOnEditTableBtn();
})

When('the user clears and fills the form with the new data {string}, {string}, {string}, and {string}',
    async function(editName, editSpace, editCapacity, editStatus){
        // await tablePage.clearTableDetails();
        await tablePage.editTableDetails(
            editName.trim(),
            editSpace.trim(),
            editCapacity,
            editStatus.trim()
        );
})

Then('the user clicks the Update button and the table should be updated successfully', 
    async function(){
        await tablePage.clickOnUpdateTableBtn();
        const successStatusText = await tablePage.getPopupHeaderText();
        console.log(successStatusText);

        assert.equal(
            successStatusText.includes("Success!"),
            true,
            "Table modified succesfully."
        );
})

