const { Builder, Capabilities } = require("selenium-webdriver");

class DriverManager {
  constructor() {
    const capability = new Capabilities();
    capability.setPageLoadStrategy("normal");
    this.driver = new Builder()
      .withCapabilities(capability)
      .forBrowser("chrome")
      .build();
  }

  async getDriver() {
    return this.driver;
  }

  async quitDriver() {
    if (this.driver) {
      await this.driver.quit();
    }
  }
}

module.exports = DriverManager;
