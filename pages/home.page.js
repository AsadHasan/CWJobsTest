// @flow
import { By, WebDriver, WebElement } from "selenium-webdriver";
import BasePage from "./base.page";

class Homepage extends BasePage {
  driver: WebDriver;

  searchBoxCSS: string;

  locationBoxCSS: string;

  locationRadiusMenuCSS: string;

  searchBoxLocator: By;

  locationBoxLocator: By;

  locationRadiusMenuLocator: By;

  constructor(webdriver: WebDriver) {
    super(webdriver);
    this.driver = webdriver;
    this.searchBoxCSS = "input#keywords[name=Keywords][type=search]";
    this.locationBoxCSS = "input#location[type=search]";
    this.locationRadiusMenuCSS = "select#Radius[name=Radius]";
    this.searchBoxLocator = By.css(this.searchBoxCSS);
    this.locationBoxLocator = By.css(this.locationBoxCSS);
    this.locationRadiusMenuLocator = By.css(this.locationRadiusMenuCSS);
  }

  async open() {
    await this.driver.get("https://www.cwjobs.co.uk/");
    return this;
  }

  async searchJob(job: string, location: string) {
    const searchBox: WebElement = await super.getElementWhenLocated(
      this.searchBoxLocator
    );
    const locationBox: WebElement = await super.getElementWhenLocated(
      this.locationBoxLocator
    );
    const locationRadiusMenuBox: WebElement = await super.getElementWhenLocated(
      this.locationRadiusMenuLocator
    );

    await searchBox.sendKeys(job);
    await locationBox.sendKeys(location);
    await locationRadiusMenuBox.click();
  }
}

export default Homepage;
