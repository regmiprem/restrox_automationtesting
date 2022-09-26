const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

const LoginPage = require('../pageObjects/LoginPage');
const SpacePage = require('../pageObjects/SpacePage');
const { PerformanceNodeTiming } = require('perf_hooks');

const loginPage = new LoginPage();
const spacePage = new SpacePage();

Given('the user has logged in as {string} Demo', async function (userName) {
    await loginPage.viewPage();
    await loginPage.loginWithDemoUser(userName.trim());
})

When('the user selects the {string}', async function (menuName) {
    await spacePage.clickOnMenu(menuName.trim());
}  )

When('the user clicks on {string} sub-menu', async function(spaceName){
    await spacePage.clickOnSpace(spaceName.trim());

})

Then('the user should be able to see the {string} page', async function(sectionName){
    console.log("pending");
    // const sectionLocator = await page.locator("button.btn-primary:nth-child(1)");
    // const sectionText = await sectionLocator.innerText();

    // assert.equal(
    //     sectionText.trim(),
    //     sectionName.trim(),
    //     `${sectionName} section is not loaded`
    // );
});

When('the user clicks and fills form for new space with name {string} and {string}', 
    async function(spaceName, spaceDescription){
        await spacePage.clickOnCreateSpaceBtn();
        await spacePage.fillSpaceDetails(
            spaceName.trim(),
            spaceDescription.trim()
        );
})

When('the user clicks on Save Space button', async function(){
    await spacePage.clickOnSaveSpaceBtn();
})

Then('the space has to be created successfully', async function(){
    const successStatusText = await spacePage.getPopupHeaderText();
    console.log(successStatusText);

    assert.equal(
        successStatusText.includes("Success!"),
        true,
        "Space has been created"
    );
})

When('the user clicks on Save Space button without filling the form', async function(){
    await spacePage.clickOnCreateSpaceBtn();
    await spacePage.clickOnSaveSpaceBtn();    
})

Then('the system throws Error message', async function(){
    console.log("Error throwing message is still pending");
    // const successStatusText = await spacePage.getPopupHeaderText();
    // console.log(successStatusText);

    // assert.equal(
    //     successStatusText.includes("Error!"),
    //     true,
    //     "Make some changes and try again"
    // );
})

Then('the system throws alert message and space doesnot have to be created', async function () {
    const alertText = await spacePage.getAlertMessage();

    if(alertText === "Alert: Space name is required."){
        console.log("Alert message testing passed.")
    }
    else{
        console.log("Alert message testing failed.")
    }
  });

Then('the user clicks on Cancel button and the space doesnot have to be created', async function(){
    await spacePage.clickOnCancelSpaceBtn();
})

Then('the user clicks on Close button and the space doesnot have to be created', async function(){
    await spacePage.clickOnCloseSpaceBtn();
})

When('the user clicks 3dot icon of the space with name {string}', async function(spaceName){
    await spacePage.clickOnThreeDotIcon(spaceName.trim());
})

When('the user clicks on Edit button', async function(){
    await spacePage.clickOnEditSpaceBtn();
})

When("the user clicks on Update button", async function(){
    await spacePage.clickOnEditUpdateBtn();
})

Then('the system throws alert message and space doesnot get changed', async function(){
    const alertText = await spacePage.getAlertMessage();

    if(alertText === "Alert: Space name is required."){
        console.log("Alert message testing passed.")
    }
    else{
        console.log("Alert message testing failed.")
    }
})

When('the user clears the space name and space description', async function(){
    await spacePage.clearSpaceName();
    await spacePage.clearSpaceDescription();
})

When('the user fills the form with new name {string} and {string}', 
    async function(newSpaceName, newSpaceDescription){
        await spacePage.fillEditSpaceName(newSpaceName.trim());
        await spacePage.fillEditSpaceDescription(newSpaceDescription.trim());
})

Then("the user clicks Cancel button and the space doesnot get changed", async function(){
    await spacePage.clickOnCancelUpdateBtn();
})

Then("the user clicks Close button and the space doesnot get changed", async function(){
    await spacePage.clickOnCloseUpdateBtn();
})

When('the user clears the space name', async function(){
    await spacePage.clearSpaceName();
})

When('the user clears the space description', async function(){
    await spacePage.clearSpaceDescription();
})

When('the user fills the form with new name {string}', 
    async function(newSpaceName){
        await spacePage.fillEditSpaceName(
            newSpaceName.trim()
        );
})

When('the user fills the form with new description {string}',
    async function(newSpaceDescription){
        await spacePage.fillEditSpaceDescription(
            newSpaceDescription.trim()
        );
})

When('the user click on Update button', async function(){
    await spacePage.clickOnUpdateSpaceBtn();
})

Then('the space should be updated successfully', async function(){
    const successStatusText = await spacePage.getPopupHeaderText();
    console.log(successStatusText);

    assert.equal(
        successStatusText.includes("Success!"),
        true,
        "space modified"
    );
})

When('the user clicks on Delete button', async function(){
    await spacePage.clickOnDeleteSpaceBtn();
})

Then('the user cancels to delete the space and the space shouldnot be deleted', async function(){
    await spacePage.clickOnCancelDeleteBtn();
})

Then('the user confirms to delete the space and the space should be deleted', async function(){
    await spacePage.clickOnDeleteConfirmBtn();
    const successStatusText = await spacePage.getPopupHeaderText();
    console.log(successStatusText);

    assert.equal(
        successStatusText.includes("Success!"),
        true,
        "Space has been deleted."
    );
})