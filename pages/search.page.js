// @flow
import { WebDriver } from "selenium-webdriver";
import BasePage from "./base.page";

class SearchPage extends BasePage {
  driver: WebDriver;

  constructor(webdriver: WebDriver) {
    super(webdriver);
    this.driver = webdriver;
  }
}
export default SearchPage;
