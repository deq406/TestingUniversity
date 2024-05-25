const BasePage = require("./base_page");
const { By, until } = require("selenium-webdriver");

class PostPage extends BasePage {
  constructor(driver) {
    super(driver);
    this.commentSection = By.xpath(
      "/html/body/div[1]/div/div[2]/main/div/div[3]/div/section[1]"
    ); // Локатор для секции комментариев
    this.comments = By.className("rv-comment"); // Локатор для комментариев
    this.postUrl =
      "https://pikabu.ru/story/skolko_plyusov_naberet_moe_bessmyislennoe_litso_11440857";
  }

  async isCommentSectionDisplayed(url) {
    const commentSection = await this.driver.wait(
      until.elementLocated(this.commentSection),
      20000
    );
    return await commentSection.isDisplayed();
  }

  async getComments() {
    const comments = await this.findElements(this.comments);
    console.log(comments);
    let commentTexts = [];
    for (let comment of comments) {
      commentTexts.push(await comment.getText());
    }
    return commentTexts;
  }
}

module.exports = PostPage;
