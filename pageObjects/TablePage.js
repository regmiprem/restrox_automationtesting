const MainPage = require("./MainPage");

class TablePage extends MainPage{
    constructor(){
        super();

        this.createTableBtnSelector = "button.ms-2:nth-child(4)";
        this.createTablePopup = {
            baseSelector: ".modal-content",
            nameSelector: "input#basicInput[placeholder='Name']",
            spaceSelector: ".select__control",
            spaceInputSelector: ".select__input",
            addCapacityBtnSelector: "span.rc-input-number-handler:nth-child(1)",
            capacityInputSelector: "",
            subCapacityBtnSelector: "span.rc-input-number-handler:nth-child(2)",
            openStatusBtnSelector: ".btn-success",
            outOfServiceStatusBtnSelector: ".TableModal_button__2B3FE",
            saveTableBtnSelector: "button.me-1",
            cancelTableBtnSelector: ".mr-2",
            closeTableBtnSelector: ".btn-close",
            alertMessageSelector: ".mr-50", 
        }

        this.threeDotIconSelector = "#cell-5-0 > div:nth-child(1) > div:nth-child(2)";
        this.threeDotPopup = {
            baseSelector: "#cell-5-0 > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)",
            editTableBtnSelector: "#cell-5-0 > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > a:nth-child(1)",
            deleteTableBtnSelector: "#cell-5-0 > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > a:nth-child(2)",
        }

        this.threeDotPopup.editTablePopup = {
            editBaseSelector: ".modal-dialog",
            editNameSelector: "#basicInput",
            editSpaceSelector: ".select__control",
            editAddCapacityBtnSelector: "span.rc-input-number-handler:nth-child(1)",
            editSubCapacityBtnSelector: "span.rc-input-number-handler:nth-child(2)",
            editOpenStatusBtnSelector: "button.TableModal_button__3PVes:nth-child(1)",
            editOutOfServiceStatusBtnSelector: "button.TableModal_button__3PVes:nth-child(2)",
            editUpdateBtnSelector: "button.TableModal_mgt10__1Rh-i:nth-child(1)",
            editCancelBtnSelector: "button.TableModal_mgt10__1Rh-i:nth-child(9)",
            editCloseBtnSelector: "div.mb-3:nth-child(1) > svg:nth-child(2)",
        }

        this.threeDotPopup.deleteTablePopup = {
            deleteBaseSelector: ".swal2-popup",
            deleteConfirmBtnSelector: ".swal2-confirm",
            deleteCancelBtnSelector: ".swal2-cancel",
        }

        this.popupMessage = {
            tostifyHeaderSelector: "#root > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)",
            headerTextSelector: "#root > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h6:nth-child(2)",   
            tostifyBodySelector: "#root > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1)",
        }
    }

    async clickOnCreateTableBtn(){
        await page.waitForSelector(this.createTableBtnSelector);
        await page.locator(this.createTableBtnSelector).click();
    }

    async fillTableDetails(tableName, tableSpace, tableCapacity, tableStatus){
        await page.waitForSelector(this.createTablePopup.baseSelector);
        await page.fill(
            this.createTablePopup.nameSelector,
            tableName
        )
        await page.locator(this.createTablePopup.spaceSelector).click();
        await page.locator( this.createTablePopup.spaceInputSelector).fill(tableSpace);
        await page.keyboard.press("Enter");
        let j = parseInt(tableCapacity);
        for (let i = 0; i < j ; i++) {
            await page.locator(
                this.createTablePopup.addCapacityBtnSelector
            ).click();
        }
        if (tableStatus == "Open") {
            await page.locator(this.createTablePopup.openStatusBtnSelector).click();    
        } else {
            await page.locator(this.createTablePopup.outOfServiceStatusBtnSelector).click();
        }

    }

    async clickOnSaveTableBtn(){
        await page.waitForSelector(this.createTablePopup.saveTableBtnSelector);
        await page.locator(this.createTablePopup.saveTableBtnSelector).click();
    }

    async clickOnCancelTableBtn(){
        await page.waitForSelector(this.createTablePopup.cancelTableBtnSelector);
        await page.locator(this.createTablePopup.cancelTableBtnSelector).click();
    }
    
    async clickOnCloseTableBtn(){
        await page.waitForSelector(this.createTablePopup.closeTableBtnSelector);
        await page.locator(this.createTablePopup.closeTableBtnSelector).click();
    }

    async clickOnThreeDotIcon(tableName){
        await page.waitForSelector(this.threeDotIconSelector);
        await page.locator(this.threeDotIconSelector, tableName).click();
    }

    async clickOnEditTableBtn(){
        await page.waitForSelector(this.threeDotPopup.baseSelector);
        await page.locator(this.threeDotPopup.editTableBtnSelector).click();
    }

    async clickOnDeleteTableBtn(){
        await page.waitForSelector(this.threeDotPopup.baseSelector);
        await page.locator(this.threeDotPopup.deleteTableBtnSelector).click();
    }

    async clickOnConfirmDeleteTableBtn(){
        await page.waitForSelector(
            this.threeDotPopup.deleteTablePopup.deleteBaseSelector
        );
        await page.locator(
            this.threeDotPopup.deleteTablePopup.deleteConfirmBtnSelector
        )
        .click();
    }

    async clickOnCancelDeleteTableBtn(){
        await page.waitForSelector(
            this.threeDotPopup.deleteTablePopup.deleteBaseSelector
        );
        await page.locator(
            this.threeDotPopup.deleteTablePopup.deleteCancelBtnSelector
        )
        .click();
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
        await page.waitForSelector(this.createTablePopup.alertMessageSelector);
        const alertMessage = await page.locator(
            this.createTablePopup.alertMessageSelector
        ).innerText();
        return alertMessage.trim();
    }
}

module.exports = TablePage;