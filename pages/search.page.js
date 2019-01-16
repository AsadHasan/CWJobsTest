// @flow
import { WebDriver, By, WebElement } from "selenium-webdriver";
import BasePage from "./base.page";

class SearchPage extends BasePage {
  driver: WebDriver;

  jobResultsCSS: string;

  jobResultsLocator: By;

  constructor(webdriver: WebDriver) {
    super(webdriver);
    this.driver = webdriver;
    this.jobResultsCSS = "div.job-results>div.job";
    this.jobResultsLocator = By.css(this.jobResultsCSS);
  }

  async getSearchResults(): WebElement[] {
    const searchResults: WebElement[] = await super.getElementsWhenLocated(
      this.jobResultsLocator
    );
    return searchResults;
  }
}
export default SearchPage;
