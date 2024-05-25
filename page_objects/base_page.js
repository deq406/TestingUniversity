const { By, until } = require("selenium-webdriver");

class BasePage {
  constructor(driver) {
    this.driver = driver;
  }

  async visit(url) {
    await this.driver.get(url);
  }

  async findElement(locator) {
    await this.driver.wait(until.elementLocated(locator), 5000);
    return await this.driver.findElement(locator);
  }

  async findElements(locator) {
    await this.driver.wait(until.elementsLocated(locator), 5000);
    return await this.driver.findElements(locator);
  }

  async click(locator) {
    const element = await this.findElement(locator);
    await element.click();
  }

  async type(locator, inputText) {
    const element = await this.findElement(locator);
    await element.sendKeys(inputText);
  }

  async getText(locator) {
    const element = await this.findElement(locator);
    return await element.getText();
  }

  async wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

module.exports = BasePage;
