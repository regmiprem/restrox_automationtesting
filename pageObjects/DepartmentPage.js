const MainPage = require("./MainPage");

class DepartmentPage extends MainPage {
    constructor() {
        super();
        this.createDepartmentBtnSelector =
            "//button[contains(text(), 'Create Department')]";
        this.createDepartmentPopup = {
            baseSelector: ".modal-content",
            nameSelector: "input#basicInput[placeholder='Department Name']",
            descriptionSelector:
                "textarea#basicInput[placeholder='Description']",
            saveBtnSelector: "//button[contains(text(), 'Save Department')]",
        };

        this.popupMessage = {
            tostifyHeaderSelector: ".Toastify .toastify-header",
            headerTextSelector: ".Toastify .toastify-header h6",
            tostifyBodySelector: ".toastify-body",
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

    async clickOnCreateDepartmentBtn() {
        await page.waitForSelector(this.createDepartmentBtnSelector);
        await page.locator(this.createDepartmentBtnSelector).click();
    }

    async clickOnSaveDepartmentBtn() {
        await page.waitForSelector(this.createDepartmentPopup.baseSelector);
        await page.locator(this.createDepartmentPopup.saveBtnSelector).click();
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
}

module.exports = DepartmentPage;
