const BasePage = require("./base_page");
const { By } = require("selenium-webdriver");

class HomePage extends BasePage {
  constructor(driver) {
    super(driver);
    this.storyTitle = By.className("story__title");
  }

  async getStoryTitle() {
    return await this.getText(this.storyTitle);
  }
  async openFirstPost() {
    await this.click(this.storyTitle);
  }
}

module.exports = HomePage;
