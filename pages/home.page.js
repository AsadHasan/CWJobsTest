// @flow
import { By, WebDriver, WebElement, Key } from "selenium-webdriver";
import BasePage from "./base.page";
import SearchPage from "./search.page";

class Homepage extends BasePage {
  driver: WebDriver;

  searchBoxCSS: string;

  locationBoxCSS: string;

  locationRadiusMenuCSS: string;

  submitButtonCSS: string;

  searchBoxLocator: By;

  locationBoxLocator: By;

  locationRadiusMenuLocator: By;

  submitButtonLocator: By;

  constructor(webdriver: WebDriver) {
    super(webdriver);
    this.driver = webdriver;
    this.searchBoxCSS = "input#keywords[name=Keywords][type=search]";
    this.locationBoxCSS = "input#location[type=search]";
    this.locationRadiusMenuCSS = "select#Radius[name=Radius]";
    this.submitButtonCSS = "input#search-button[value=Search][type=submit]";
    this.searchBoxLocator = By.css(this.searchBoxCSS);
    this.locationBoxLocator = By.css(this.locationBoxCSS);
    this.locationRadiusMenuLocator = By.css(this.locationRadiusMenuCSS);
    this.submitButtonLocator = By.css(this.submitButtonCSS);
  }

  async open(): Homepage {
    await this.driver.get("https://www.cwjobs.co.uk/");
    return this;
  }

  async searchJob(
    job: string,
    location: string,
    locationRadius: string
  ): SearchPage {
    const searchBox: WebElement = await super.getElementWhenLocated(
      this.searchBoxLocator
    );
    const locationBox: WebElement = await super.getElementWhenLocated(
      this.locationBoxLocator
    );
    const locationRadiusMenuBox: WebElement = await super.getElementWhenLocated(
      this.locationRadiusMenuLocator
    );
    const submitButton: WebElement = await super.getElementWhenLocated(
      this.submitButtonLocator
    );

    await super.typeWhenReady(searchBox, job);
    await super.typeWhenReady(locationBox, location);
    await super.clickWhenReady(locationRadiusMenuBox);
    await super.typeWhenReady(locationRadiusMenuBox, locationRadius);
    await super.typeWhenReady(locationRadiusMenuBox, Key.ENTER);
    await super.clickWhenReady(submitButton);

    const searchPage: SearchPage = await new SearchPage(this.driver);
    return searchPage;
  }
}

export default Homepage;
