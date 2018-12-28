class BasePage {
  constructor(webdriver) {
    this.driver = webdriver;
  }

  getPageTitle() {
    return this.driver.getTitle();
  }
}

export default BasePage;
