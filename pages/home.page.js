// @flow
import { By, WebDriver, WebElement, Key } from "selenium-webdriver";
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

  async open(): Homepage {
    await this.driver.get("https://www.cwjobs.co.uk/");
    return this;
  }

  async searchJob(job: string, location: string, locationRadius: string) {
    const searchBox: WebElement = await super.getElementWhenLocated(
      this.searchBoxLocator
    );
    const locationBox: WebElement = await super.getElementWhenLocated(
      this.locationBoxLocator
    );
    const locationRadiusMenuBox: WebElement = await super.getElementWhenLocated(
      this.locationRadiusMenuLocator
    );

    await super.typeWhenReady(searchBox, job);
    await super.typeWhenReady(locationBox, location);
    await super.clickWhenReady(locationRadiusMenuBox);
    await super.typeWhenReady(locationRadiusMenuBox, locationRadius);
    await super.typeWhenReady(locationRadiusMenuBox, Key.ENTER);
  }
}

export default Homepage;
