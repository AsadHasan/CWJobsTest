// @flow
import { By, until, WebDriver } from "selenium-webdriver";

class BasePage {
  driver: WebDriver;

  constructor(webdriver: WebDriver) {
    this.driver = webdriver;
  }

  getPageTitle() {
    return this.driver.getTitle();
  }

  getElementWhenLocated(locator: By) {
    this.driver.wait(until.elementLocated(locator));
    return this.driver.findElement(locator);
  }
}

export default BasePage;
