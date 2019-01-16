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

  async getElementsWhenLocated(locator: By): WebElement[] {
    await this.driver.wait(until.elementsLocated);
    const elements: WebElement[] = await this.driver.findElements(locator);
    return elements;
  }

  async clickWhenReady(element: WebElement): void {
    await this.driver.wait(until.elementIsVisible(element));
    await element.click();
  }

  async typeWhenReady(element: WebElement, text: string): void {
    await this.driver.wait(until.elementIsVisible(element));
    await element.sendKeys(text);
  }
}

export default BasePage;
