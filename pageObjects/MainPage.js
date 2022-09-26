const util = require("util");

class MainPage {
    constructor() {
        this.overflowMenuSelector = "#overflow";
        this.menuSelectorUsingName =
            "//div[@id='leftMenu']//parent::a/span[text()='%s']";
        this.staticValues = {
            availableMenu: {
                dashboard: "Dashboard",
                departments: "Department",
                tableAndSpaces: "Table & Space",
            },
        };
    }

    /**
     * Function to click on a particular menu (menu at left side)
     * @param {string} menuName - name of the menu to select
     */
    async clickOnMenu(menuName) {
        const menuSelector = util.format(this.menuSelectorUsingName, menuName);
        await page.waitForSelector(menuSelector);
        await page.locator(menuSelector).click();
    }
}

module.exports = MainPage;