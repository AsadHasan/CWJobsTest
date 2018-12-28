import BasePage from "./base.page";

class SearchPage extends BasePage {
  constructor(webdriver) {
    super(webdriver);
    this.driver = webdriver;
  }
}
export default SearchPage;
