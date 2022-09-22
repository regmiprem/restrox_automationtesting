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
            editSpaceInputSelector: ".select__input",
            editInputCapacitySelector: ".rc-input-number-handler-wrap",
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

        this.qrIconSelector = "#cell-5-0 > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)",
        this.qrPopup = {
            qrBaseSelector: "div.show:nth-child(2) > div:nth-child(1)",
            qrDownloadIconSelector: "div.show:nth-child(2) > div:nth-child(1) > div:nth-child(2) > svg:nth-child(1)",
            qrPrintIconSelector: "div.show:nth-child(2) > div:nth-child(1) > div:nth-child(2) > svg:nth-child(2)",
        }
        
        this.downloadQRsSelector = "button.ms-2:nth-child(5) > span:nth-child(1)",
        this.requestQRCodeSelector = "button.ms-2:nth-child(3) > span:nth-child(1)",
        this.requestQRCodePopup = {
            requestBaseSelector: ".swal2-popup",
            requestConfirmSelector: ".swal2-confirm",
            requestCancelSelector: ".swal2-cancel"
        }

        this.searchInputSelector = "#search-invoice",
        this.searchedDataSelector = ".user-info.text-truncate.ml-1"
                                   //#cell-1-21 > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1)


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

    // async clearTableDetails(){
    //     await page.waitForSelector(this.threeDotPopup.editTablePopup.editBaseSelector);

               

    //     await page.locator(this.threeDotPopup.editTablePopup.editInputCapacitySelector).click();
    //     let j = parseInt(await page.locator(this.threeDotPopup.editTablePopup.editInputCapacitySelector).innerText());
    //     for (let i = j; i >= 0; i--){
    //         await page.locator(this.threeDotPopup.editTablePopup.editSubCapacityBtnSelector).click();
    //     }     
    // }

    async editTableDetails(editName, editSpace, editStatus){
        await page.waitForSelector(this.threeDotPopup.editTablePopup.editBaseSelector);
        await page.locator(this.threeDotPopup.editTablePopup.editNameSelector).click();
        await page.keyboard.press("Control+A");
        await page.keyboard.press("Backspace");
        await page.fill(
            this.threeDotPopup.editTablePopup.editNameSelector,
            editName
        )
        await page.locator(this.threeDotPopup.editTablePopup.editSpaceSelector).click();
        await page.locator( this.threeDotPopup.editTablePopup.editSpaceInputSelector).fill(editSpace);
        await page.keyboard.press("Enter");

        //Couldn't write code to edit the Capacity according to the example. So, I left it for this time, will visit it after 
        //writing the code for the other test cases. 

        if (editStatus == "Open") {
            await page.locator(this.threeDotPopup.editTablePopup.editOpenStatusBtnSelector).click();
        } else {
            await page.locator(this.threeDotPopup.editTablePopup.editOutOfServiceStatusBtnSelector).click();
        }
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

    async clickOnUpdateTableBtn(){
        await page.waitForSelector(this.threeDotPopup.editTablePopup.editBaseSelector);
        await page.locator(this.threeDotPopup.editTablePopup.editUpdateBtnSelector).click();
    }

    async clickOnCancelUpdateTableBtn(){
        await page.waitForSelector(this.threeDotPopup.editTablePopup.editBaseSelector);
        await page.locator(this.threeDotPopup.editTablePopup.editCancelBtnSelector).click();
    }

    async clickOnCloseUpdateTableBtn(){
        await page.waitForSelector(this.threeDotPopup.editTablePopup.editBaseSelector);
        await page.locator(this.threeDotPopup.editTablePopup.editCloseBtnSelector).click();
    }

    async clickOnQRIcon(tableName){
        await page.waitForSelector(this.qrIconSelector);
        await page.locator(this.qrIconSelector, tableName).click();
    }

    async clickOnQRDownloadIcon(){
        await page.waitForSelector(this.qrPopup.qrDownloadIconSelector);
        await page.locator(this.qrPopup.qrDownloadIconSelector).click();
    }

    async clickOnQRPrintIcon(){
        await page.waitForSelector(this.qrPopup.qrPrintIconSelector);
        await page.locator(this.qrPopup.qrPrintIconSelector).click();
    }

    async clickOnDownloadQRsBtn(){
        await page.waitForSelector(this.downloadQRsSelector);
        await page.locator(this.downloadQRsSelector).click();
    }

    async clickOnRequestQRCodeBtn(){
        await page.waitForSelector(this.requestQRCodeSelector);
        await page.locator(this.requestQRCodeSelector).click();
    }

    async clickOnRequestConfirmQRCodeBtn(){
        await page.waitForSelector(this.requestQRCodePopup.requestBaseSelector);
        await page.locator(this.requestQRCodePopup.requestConfirmSelector).click();
    }

    async clickOnRequestCancelQRCodeBtn(){
        await page.waitForSelector(this.requestQRCodePopup.requestBaseSelector);
        await page.locator(this.requestQRCodePopup.requestCancelSelector).click();
    }

    async fillSearchForm(searchKeyword){
        await page.waitForSelector(this.searchInputSelector);   
        await page.locator(this.searchInputSelector).click(); 
        await page.fill(this.searchInputSelector, searchKeyword);
    }

    async getSearchResult(tableName){
        await page.waitForSelector(this.searchedDataSelector);
        await page.locator(this.searchedDataSelector, tableName);
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