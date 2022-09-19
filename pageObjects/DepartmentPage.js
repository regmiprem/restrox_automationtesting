const { parseGherkinMessageStream } = require("@cucumber/cucumber");
const MainPage = require("./MainPage");

class DepartmentPage extends MainPage {
    constructor() {
        super();

        this.searchInputDepartment = "input#search-invoice",
        this.dataDepartment = {
            dataBaseSelector: ".sc-fLlhyt",
            columnDepartment: "div.sc-iqcoie:nth-child(3) > div:nth-child(1) > div:nth-child(1)",
            searchedDepartment: "##row-0 > div:nth-child(3) > div:nth-child(1)",
        }
        this.columnDepartment = ".sc-evZas dFsTSm",
        this.createDepartmentBtnSelector =
            "//button[contains(text(), 'Create Department')]";
        this.createDepartmentPopup = {
            baseSelector: ".modal-content",
            nameSelector: "input#basicInput[placeholder='Department Name']",
            descriptionSelector:
                "textarea#basicInput[placeholder='Description']",
            saveBtnSelector: "//button[contains(text(), 'Save Department')]",
            closeBtnSelector: ".btn-close",
            cancelBtnSelector: "//button[contains(text(), 'Cancel')]",
            alertMessageSelector: "small.mr-50",
        };

        this.threeDotIconSelector = ".pr-1",
        this.threeDotPopup = {
            baseSelector: "div.show:nth-child(2)",
            editBtnSelector: "div.show:nth-child(2) > button:nth-child(1)", 
            deleteBtnSelector: "div.show:nth-child(2) > button:nth-child(2)",
        }

        this.threeDotPopup.editPopup = {
            editBaseSelector: ".modal-dialog",
            editNameSelector: "div.style_row1__2ookw:nth-child(2) > div:nth-child(1) > input:nth-child(2)",
            editDescriptionSelector: "textarea#basicInput[placeholder='Description']",
            editUpdateBtnSelector: "button.btn-primary:nth-child(1)",
            cancelUpdateBtnSelector: "button.ms-2",
            closeUpdateBtnSelector: "svg.cursor-pointer:nth-child(2)",

        }

        this.threeDotPopup.deletePopup = {
            deleteBaseSelector: ".swal2-popup",
            deleteConfirmBtnSelector: ".swal2-confirm",
            cancelDeleteBtnSelector: ".swal2-cancel",

        }

        this.popupMessage = {
            tostifyHeaderSelector: "#root > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)",
            headerTextSelector: "#root > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h6:nth-child(2)",   
            tostifyBodySelector: "#root > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1)",
        };
    }

    /**
     * Function to fill up department details
     * @param {string} departmentName - name of the department to create
     * @param {string} departmentDescription - description of the department to create
     * Usage: Use only when you're in Department page
     */
    async fillDepartmentDetails(departmentName, departmentDescription) {
        await page.waitForSelector(this.createDepartmentPopup.baseSelector);
        await page.fill(
            this.createDepartmentPopup.nameSelector,
            departmentName
        );
        await page.fill(
            this.createDepartmentPopup.descriptionSelector,
            departmentDescription
        );
    }

    // async fillSearchDepartment(searchDepartment){
    //     await page.waitForSelector(this.searchInputDepartment);
    //     await page.fill(this.searchInputDepartment, searchDepartment);
    // }
    
    // async foundSearchedDepartment(){
    //     await page.waitForSelector(this.dataDepartment.dataBaseSelector);
    //     await page.locator(this.dataDepartment.columnDepartment).innerText();
    //     if (this.dataDepartment.has(columnDepartment) && this.dataDepartment.searchedDepartment.includes(searchDepartment)){
    //         console.log("Searching is successful");
    //     }
    // }

    // async notFoundSearchedDepartment(){
    //     await page.waitForSelector(this.dataDepartment.dataBaseSelector);
    //     await page.locator(this.dataDepartment).innerText();
    //     if (this.dataDepartment.includes("There are no records to display")){
    //         console.log("Searching is unsuccessful");
    //     }
    // }

    async clickOnCreateDepartmentBtn() {
        await page.waitForSelector(this.createDepartmentBtnSelector);
        await page.locator(this.createDepartmentBtnSelector).click();
    }

    async clickOnSaveDepartmentBtn() {
        await page.waitForSelector(this.createDepartmentPopup.baseSelector);
        await page.locator(this.createDepartmentPopup.saveBtnSelector).click();
    }

    async clickOnCloseDepartmentBtn(){
        await page.waitForSelector(this.createDepartmentPopup.baseSelector);
        await page.locator(this.createDepartmentPopup.closeBtnSelector).click();
    }

    async clickOnCancelDepartmentBtn(){
        await page.waitForSelector(this.createDepartmentPopup.baseSelector);
        await page.locator(this.createDepartmentPopup.cancelBtnSelector).click();
    }

    async clickOnThreeDotIcon(departmentName){
        await page.waitForSelector(this.threeDotIconSelector);
        await page.locator(this.threeDotIconSelector, departmentName).first().click();
    }

    async clickOnEditDepartmentBtn(){
        await page.waitForSelector(this.threeDotPopup.baseSelector);
        await page.locator(this.threeDotPopup.editBtnSelector).click();
    }

    async clickOnDeleteDepartmentBtn(){
        await page.waitForSelector(this.threeDotPopup.baseSelector);
        await page.locator(this.threeDotPopup.deleteBtnSelector).click();
    }

    async clearDepartmentName(departmentName){
        for(let i = 0; i < departmentName.length; i++){
            await page.keyboard.press("Backspace");
        }
    }

    async clearDepartmentDescription(departmentDescription){
        for(let i = 0; i < departmentDescription.length; i++){
            await page.keyboard.press("Backspace");
        }
    }

    /**
     * Function to fill up department details
     * @param {string} editDepartmentName - name of the department to edit
     * @param {string} editDepartmentDescription - description of the department to edit
     * Usage: Use only when you're in Department page
     */

    async fillEditDepartmentName(editDepartmentName){
        await page.waitForSelector(this.threeDotPopup.editPopup.editBaseSelector);
        await page.fill(
            this.threeDotPopup.editPopup.editNameSelector,
            editDepartmentName
        );
    }

    async fillEditDepartmentDescription(editDepartmentDescription){
        
        await page.waitForSelector(this.threeDotPopup.editPopup.editBaseSelector);
        await page.fill(
            this.threeDotPopup.editPopup.editDescriptionSelector,
            editDepartmentDescription
            );
    }

    async clearDepartmentDetails(departmentName, departmentDescription){
        await page.waitForSelector(this.threeDotPopup.editPopup.editBaseSelector);    
        await page.locator(this.threeDotPopup.editPopup.editNameSelector).click();
        for(let i = 0; i < departmentName.length; i++){
            await page.keyboard.press("Backspace");
        }
        await page.locator(this.threeDotPopup.editPopup.editDescriptionSelector).click();
        for(let i = 0; i < departmentDescription.length; i++){
            await page.keyboard.press("Backspace");
        }
    }
    
    async fillEditDepartmentDetails(editDepartmentName, editDepartmentDescription){
        await page.waitForSelector(this.threeDotPopup.editPopup.editBaseSelector);
        await page.fill(
            this.threeDotPopup.editPopup.editNameSelector,
            editDepartmentName
            );
        await page.fill(
            this.threeDotPopup.editPopup.editDescriptionSelector,
            editDepartmentDescription
            );
    }

    async clickOnEditUpdateBtn(){
        await page.waitForSelector(this.threeDotPopup.editPopup.editBaseSelector);
        await page.locator(this.threeDotPopup.editPopup.editUpdateBtnSelector).click();
    }

    async clickOnEditCancelBtn(){
        await page.waitForSelector(this.threeDotPopup.editPopup.editBaseSelector);
        await page.locator(this.threeDotPopup.editPopup.cancelUpdateBtnSelector).click();
    }

    async clickOnEditCloseBtn(){
        await page.waitForSelector(this.threeDotPopup.editPopup.editBaseSelector);
        await page.locator(this.threeDotPopup.editPopup.closeUpdateBtnSelector).click();
    }

    async clickOnConfirmDeleteBtn(){
        await page.waitForSelector(this.threeDotPopup.deletePopup.deleteBaseSelector);
        await page.locator(this.threeDotPopup.deletePopup.deleteConfirmBtnSelector).click();
    }

    async clickOnCancelDeleteBtn(){
        await page.waitForSelector(this.threeDotPopup.deletePopup.deleteBaseSelector);
        await page.locator(this.threeDotPopup.deletePopup.cancelDeleteBtnSelector).click();
    }


    /**
     * Function to get the header message of popup that appears after clicking on save button
     * @returns {string} - header message of popup
     * Usage: Use only when there would be a popup appearing in the left panel
     */
    async getPopupHeaderText() {
        await page.waitForSelector(
            this.popupMessage.tostifyHeaderSelector
        );
        const headerText = await page.locator(this.popupMessage.headerTextSelector).innerText();
        return headerText.trim();
    }

    /**
     * Function to get the body message of popup that appears after clicking on save button
     * @returns {string} - body message of popup
     * Usage: Use only when there would be a popup appearing in the left panel
     */
    async getPopupBodyText() {
        await page.waitForSelector(
            this.popupMessage.tostifyBodySelector
        );
        const bodyText = await page.locator(this.popupMessage.tostifyBodySelector).innerText();
        return bodyText.trim();
    }

    async getAlertMessage(){
        await page.waitForSelector(this.createDepartmentPopup.alertMessageSelector);
        const alertMessage = await page.locator(
            this.createDepartmentPopup.alertMessageSelector
        ).innerText();
        return alertMessage.trim();
    }
}

module.exports = DepartmentPage;
