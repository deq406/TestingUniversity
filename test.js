const {
  Builder,
  By,
  Key,
  until,
  Capabilities,
  Capability,
} = require("selenium-webdriver");

const Logger = require("./core/logger");

var assert = require("assert");

(async function example() {
  const capability = new Capabilities();
  capability.setPageLoadStrategy("normal");
  let driver = await new Builder()
    .withCapabilities(capability)
    .forBrowser("chrome")
    .build();

  try {
    await driver.get("https://pikabu.ru");

    await driver.sleep(3000);

    let story = await driver.findElement(By.className("story__title"));

    await driver.sleep(3000);

    const text = await story.getText();

    assert.ok(text, "Error");
    if (text) {
      Logger.log("Test for popular posts: Passed ✅");
    }
  } finally {
    // Закрываем браузер
    await driver.quit();
  }
})();
