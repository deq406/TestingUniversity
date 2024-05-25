const assert = require("assert");
const DriverManager = require("../core/browserManager");
const HomePage = require("../page_objects/home_page");
const Logger = require("../core/logger");

(async function popularPosts() {
  const driverManager = new DriverManager();
  const driver = await driverManager.getDriver();

  try {
    const homePage = new HomePage(driver);

    // Переходим на сайт Pikabu
    await homePage.visit("https://pikabu.ru");

    // Ждем несколько секунд для полной загрузки страницы
    await homePage.wait(3000);

    // Извлекаем заголовки статей
    const text = await homePage.getStoryTitle();

    assert.ok(text, "Error ❌");
    if (text) {
      Logger.log("Test for popular posts: Passed ✅");
    }
  } finally {
    // Закрываем браузер
    await driverManager.quitDriver();
  }
})();
