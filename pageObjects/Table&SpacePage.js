const util = require("util");
const MainPage = require("./MainPage");

class TableAndSpacePage extends MainPage {
    constructor() {
        super();
        this.overflowMenuSelector = ".sidebar-left";
        this.subMenuSelectorUsingName =
            "//parent::a/span[text()='%s']"; 
        this.staticValues = {
            availableMenu: {
                tables: "Table",
                spaces: "Space",
            },
        };
    }

    /**
     * Function to click on a particular menu (menu at left side)
     * @param {string} spaceName - name of the menu to select
     */
    async clickOnSpace(spaceName) {
        const subMenuSelector = util.format(this.subMenuSelectorUsingName, spaceName);
        await page.waitForSelector(subMenuSelector);
        await page.locator(subMenuSelector).click();
    }
}

module.exports = TableAndSpacePage;