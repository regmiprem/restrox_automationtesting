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

When('the user clicks Create Department button without filling the form', async function(){
    await departmentPage.clickOnCreateDepartmentBtn();
    await departmentPage.clickOnSaveDepartmentBtn();
})

Then('the system throws the alert message', async function(){
    const alertText = await departmentPage.getAlertMessage();

    if(alertText === "Alert: Department name is required."){
        console.log("Alert message testing passed.")
    }
    else{
        console.log("Alert message testing failed.")
    }
})

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
            successStatusText.includes("Success!"),
            true,
            "Department has been created successfully."
        );
    }
);

When("the user fills the department details with name {string} and description {string} and clicks the Close button", 
    async function (departmentName, departmentDescription) {
        await departmentPage.clickOnCreateDepartmentBtn();
        await departmentPage.fillDepartmentDetails(
            departmentName.trim(),
            departmentDescription.trim()
        );
        await departmentPage.clickOnCloseDepartmentBtn();
    })
  
When("the user fills the department details with name {string} and description {string}", 
    async function (departmentName, departmentDescription) {
        await departmentPage.clickOnCreateDepartmentBtn();
        await departmentPage.fillDepartmentDetails(
            departmentName.trim(),
            departmentDescription.trim()
        );
        
    })

    Then('the user clicks Cancel button and the department should not be created', async function (){
        // Write code here that turns the phrase above into concrete actions
        await departmentPage.clickOnCancelDepartmentBtn();
    });

    Then('the user clicks Close button and the department should not be created', async function (){
        // Write code here that turns the phrase above into concrete actions
        await departmentPage.clickOnCloseDepartmentBtn();
    });

    When('the user searches for department {string}', async function (searchDepartment){
        await departmentPage.fillSearchDepartment(searchDepartment);
    })

    Then('the department should be found in the list', async function (searchDepartment) {
        await departmentPage.foundSearchedDepartment(searchDepartment);
    });

    Then('the department should not be found in the list', async function () {
        await departmentPage.notFoundSearchedDepartment();
    });

    When('the user clicks the 3dot icon of the department {string}', async function (departmentName) {
        await departmentPage.clickOnThreeDotIcon(departmentName);
    })

    When('the user clicks Edit button', async function () {
        await departmentPage.clickOnEditDepartmentBtn();
    })

    When('the user clears the department with name {string} and inputs {string}',
        async function (departmentName, editDepartmentName) {
            
            await departmentPage.clearDepartmentName(departmentName);
            await departmentPage.fillEditDepartmentName(departmentName, editDepartmentName);
            await departmentPage.clickOnEditUpdateBtn();
    })

    When('the user clears the department with description {string} and inputs {string}',    
        async function (departmentDescription, editDepartmentDescription) {
            await departmentPage.clearDepartmentDescription(departmentDescription);
            await departmentPage.fillEditDepartmentDescription(editDepartmentDescription);
            await departmentPage.clickOnEditUpdateBtn();
    })

    When ('the user clears the department with name {string} and description {string}',
        async function (departmentName, departmentDescription) {
            await departmentPage.clearDepartmentDetails(departmentName, departmentDescription);
    })
    
    When('the user fills the department with name {string} and description {string}',
        async function (editdepartmentName, editdepartmentDescription) {
            await departmentPage.fillDepartmentDetails(editdepartmentName, editdepartmentDescription);
            
    })

    Then('the department should be successfully edited',async function () {
        await departmentPage.clickOnEditUpdateBtn();
            const successStatusText = await departmentPage.getPopupHeaderText();
            console.log(successStatusText);
    
            assert.equal(
                successStatusText.includes("Success!"),
                true,
                "Department has been updated succefully."
            );
        
    });

    Then('the user clicks Cancel button and the department should not be edited', async function () {
        await departmentPage.clickOnEditCancelBtn();
    });

    Then('the user clicks Close button and the department should not be edited', async function () {
        await departmentPage.clickOnEditCloseBtn();
    });

    When('the user clicks Delete button', async function () {
        await departmentPage.clickOnDeleteDepartmentBtn();
    });

    Then('the user cancels the deletion and the department should not be deleted', async function () {
        await departmentPage.clickOnCancelDeleteBtn();
    }  );

    Then('the user confirms the deletion and the department should be successfully deleted', async function () {
        await departmentPage.clickOnConfirmDeleteBtn(); 
            const successStatusText = await departmentPage.getPopupHeaderText();
            console.log(successStatusText);
    
            assert.equal(
                successStatusText.includes("Success!"),
                true,
                "Department has been deleted succesfully."
            );
    });

    Then('the user clicks Update button and the department should not be edited', async function(){
        await departmentPage.clickOnEditUpdateBtn();
        // const successStatusText = await departmentPage.getPopupHeaderText();
        //     console.log(successStatusText);
    
        //     assert.equal(
        //         successStatusText.includes("Success!"),
        //         true,
        //         "Department has been updated succefully."
        //     );

    })