const TableAndSpacePage = require("./Table&SpacePage");

class SpacePage extends TableAndSpacePage{
    constructor(){
        super();
        
        this.createSpaceBtnSelector = "button.ms-2",

        this.createSpacePopup = {
            baseSelector: ".modal-content",
            nameSelector: "input#basicInput[placeholder='Space Name']",
            descriptionSelector: "#exampleText",
            saveBtnSelector: "button.me-1",
            cancelBtnSelector: ".pb-2 > button:nth-child(1)",
            closeBtnSelector: ".btn-close",
            alertMessageSelector: ".mr-50",
        }

        this.threeDotIconSelector = ".pr-1",
        this.threeDotPopup = {
            baseSelector: "div.show:nth-child(2)", 
            editBtnSelector: "div.show:nth-child(2) > button:nth-child(1)", 
            deleteBtnSelector: "div.show:nth-child(2) > a:nth-child(2)",
        }

        this.threeDotPopup.editPopup = {
            editBaseSelector: ".modal-dialog",
            editNameSelector: "#basicInput",
            editDescriptionSelector: "#exampleText",
            editUpdateBtnSelector: "button.mt-1:nth-child(1)",
            cancelUpdateBtnSelector: "button.mt-1:nth-child(4)",
            closeUpdateBtnSelector: "svg.cursor-pointer",

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
        }
    }

    async clickOnCreateSpaceBtn(){
        await page.waitForSelector(this.createSpaceBtnSelector);
        await page.locator(this.createSpaceBtnSelector).click();
    }

    async fillSpaceDetails(spaceName, spaceDescription){
        await page.waitForSelector(this.createSpacePopup.baseSelector);
        await page.locator(this.createSpacePopup.nameSelector).fill(spaceName);
        await page.locator(this.createSpacePopup.descriptionSelector).fill(spaceDescription);
    }

    async clickOnSaveSpaceBtn(){
        await page.waitForSelector(this.createSpacePopup.saveBtnSelector);
        await page.locator(this.createSpacePopup.saveBtnSelector).click();
    }

    async clickOnCancelSpaceBtn(){
        await page.waitForSelector(this.createSpacePopup.cancelBtnSelector);
        await page.locator(this.createSpacePopup.cancelBtnSelector).click();
    }

    async clickOnCloseSpaceBtn(){
        await page.waitForSelector(this.createSpacePopup.closeBtnSelector);
        await page.locator(this.createSpacePopup.closeBtnSelector).click();
    }

    async clickOnThreeDotIcon(spaceName){
        await page.waitForSelector(this.threeDotIconSelector);
        await page.locator(this.threeDotIconSelector, spaceName).first().click();
    }

    async clickOnEditSpaceBtn(){
        await page.waitForSelector(this.threeDotPopup.baseSelector);
        await page.locator(this.threeDotPopup.editBtnSelector).click();
    }

    async clickOnDeleteSpaceBtn(){
        await page.waitForSelector(this.threeDotPopup.baseSelector);
        await page.locator(this.threeDotPopup.deleteBtnSelector).click();
    }

    async clickOnEditUpdateBtn(){
        await page.waitForSelector(this.threeDotPopup.editPopup.editBaseSelector);
        await page.locator(this.threeDotPopup.editPopup.editUpdateBtnSelector).click();
    }

    async clearSpaceName(){
        await page.waitForSelector(this.threeDotPopup.editPopup.editBaseSelector);
        await page.locator(this.threeDotPopup.editPopup.editNameSelector).click();
        await page.keyboard.press("Control+A");
        await page.keyboard.press("Backspace");
    }

    async clearSpaceDescription(){
        await page.waitForSelector(this.threeDotPopup.editPopup.editBaseSelector);
        await page.locator(this.threeDotPopup.editPopup.editDescriptionSelector).click();
        await page.keyboard.press("Control+A");
        await page.keyboard.press("Backspace");
    }

    /**
     * Function to fill up space details
     * @param {string} editSpaceName - name of the space to edit
     * @param {string} editSpaceDescription - description of the space to edit
     * Usage: Use only when you're in Space page
     */

     async fillEditSpaceName(editSpaceName){
        await page.waitForSelector(this.threeDotPopup.editPopup.editBaseSelector);
        await page.fill(
            this.threeDotPopup.editPopup.editNameSelector,
            editSpaceName
        );
    }

    async fillEditSpaceDescription(editSpaceDescription){
        await page.waitForSelector(this.threeDotPopup.editPopup.editBaseSelector);
        await page.fill(
            this.threeDotPopup.editPopup.editDescriptionSelector,
            editSpaceDescription
        );
    }

    async clickOnCancelUpdateBtn(){
        await page.waitForSelector(this.threeDotPopup.editPopup.editBaseSelector);
        await page.locator(this.threeDotPopup.editPopup.cancelUpdateBtnSelector).click();
    }

    async clickOnCloseUpdateBtn(){
        await page.waitForSelector(this.threeDotPopup.editPopup.editBaseSelector);
        await page.locator(this.threeDotPopup.editPopup.closeUpdateBtnSelector).click();
    }

    async clickOnDeleteConfirmBtn(){
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
        await page.waitForSelector(this.createSpacePopup.alertMessageSelector);
        const alertMessage = await page.locator(
            this.createSpacePopup.alertMessageSelector
        ).innerText();
        return alertMessage.trim();
    }

}

module.exports = SpacePage;