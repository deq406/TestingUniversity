const BasePage = require("./base_page");
const { By, until } = require("selenium-webdriver");

class ProfilePage extends BasePage {
  constructor(driver) {
    super(driver);

    this.postUrl = "https://pikabu.ru/story/ya_pobedila_bolezn_11446159";
    this.profileUrl = "https://pikabu.ru/@forestsvet";
    this.profilePath = By.xpath(
      "/html/body/div[1]/div[1]/div[2]/main/div[1]/div/section[1]/div[2]"
    );
  }

  async isProfileDisplayed() {
    await this.driver.get(this.postUrl);

    new Promise((resolve) => setTimeout(resolve, 10000));

    await this.driver.get(this.profileUrl);

    console.log(await this.driver.getCurrentUrl());

    new Promise((resolve) => setTimeout(resolve, 10000));

    const profile = await this.driver.wait(
      until.elementLocated(this.profilePath),
      20000
    );
    return await profile.isDisplayed();
  }
}

module.exports = ProfilePage;
