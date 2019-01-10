// @flow
import { By, until, WebDriver, WebElement } from "selenium-webdriver";

class BasePage {
  driver: WebDriver;

  constructor(webdriver: WebDriver) {
    this.driver = webdriver;
  }

  async getPageTitle(): string {
    const title: string = await this.driver.getTitle();
    return title;
  }

  async getElementWhenLocated(locator: By): WebElement {
    await this.driver.wait(until.elementLocated(locator));
    const element: WebElement = await this.driver.findElement(locator);
    return element;
  }
}

export default BasePage;
