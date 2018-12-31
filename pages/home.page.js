// @flow
import { By, WebDriver } from "selenium-webdriver";
import BasePage from "./base.page";

class Homepage extends BasePage {
  driver: WebDriver;

  searchBoxCSS: string;

  locationBoxCSS: string;

  searchBoxLocator: By;

  locationBoxLocator: By;

  constructor(webdriver: WebDriver) {
    super(webdriver);
    this.driver = webdriver;
    this.searchBoxCSS = "input#keywords[name=Keywords][type=search]";
    this.locationBoxCSS = "input#location[type=search]";
    this.searchBoxLocator = By.css(this.searchBoxCSS);
    this.locationBoxLocator = By.css(this.locationBoxCSS);
  }

  async open() {
    await this.driver.get("https://www.cwjobs.co.uk/");
    return this;
  }

  async searchJob() {
    const searchBox = super.getElementWhenLocated(this.searchBoxLocator);
    const locationBox = super.getElementWhenLocated(this.locationBoxLocator);

    await searchBox.sendKeys("abc");
  }
}

export default Homepage;
