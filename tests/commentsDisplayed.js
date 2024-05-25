const assert = require("assert");
const DriverManager = require("../core/browserManager");
const HomePage = require("../page_objects/home_page");
const PostPage = require("../page_objects/post_page");
const Logger = require("../core/logger");

(async function isCommentsDisplayed() {
  const driverManager = new DriverManager();
  const driver = await driverManager.getDriver();
  const url = "https://pikabu.ru/story/ya_pobedila_bolezn_11446159";

  try {
    const homePage = new HomePage(driver);
    const postPage = new PostPage(driver);

    await homePage.visit("https://pikabu.ru/");

    await homePage.wait(10000);

    // Переходим на сайт Pikabu
    await homePage.visit(url);

    // Ждем несколько секунд для полной загрузки страницы
    await homePage.wait(10000);

    // Проверяем, отображается ли секция комментариев
    const isCommentSectionDisplayed =
      await postPage.isCommentSectionDisplayed();

    await postPage.wait(10000);

    assert.ok(isCommentSectionDisplayed, "Comment section is not displayed ❌");

    // Извлекаем комментарии
    const comments = await postPage.getComments();
    assert.ok(comments.length > 0, "No comments found ❌");

    if (comments.length > 0) {
      Logger.log("Test for comments: Passed ✅");
    }
  } finally {
    // Закрываем браузер
    await driverManager.quitDriver();
  }
})();
