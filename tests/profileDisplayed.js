const assert = require("assert");
const DriverManager = require("../core/browserManager");
const HomePage = require("../page_objects/home_page");
const PostPage = require("../page_objects/post_page");
const Logger = require("../core/logger");
const ProfilePage = require("../page_objects/profile_page");

(async function isProfileDisplayed() {
  const driverManager = new DriverManager();
  const driver = await driverManager.getDriver();
  const url = "https://pikabu.ru/";

  try {
    const homePage = new HomePage(driver);
    const postPage = new PostPage(driver);
    const profilePage = new ProfilePage(driver);

    // Переходим на сайт Pikabu
    await homePage.visit(url);

    // Ждем несколько секунд для полной загрузки страницы
    await homePage.wait(10000);

    // Проверяем, отображается ли секция комментариев
    const profile = await profilePage.isProfileDisplayed();

    await profilePage.wait(10000);

    assert.ok(profile, "Comment section is not displayed ❌");

    if (profile) {
      Logger.log("Test for profile: Passed ✅");
    }
    // Извлекаем комментарии
  } finally {
    // Закрываем браузер
    await driverManager.quitDriver();
  }
})();
