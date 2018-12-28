import { By } from "selenium-webdriver";
import BasePage from "./base.page";

class Homepage extends BasePage {
  constructor(webdriver) {
    super(webdriver);
    this.driver = webdriver;
    this.searchBoxCSSLocator = "input#keywords[name=Keywords][type=search]";
    this.locationBoxCSSLocator = "input#location[type=search]";
    this.searchBoxSelector = By.css(this.searchBoxCSSLocator);
    this.locationBoxSelector = By.css(this.locationBoxCSSLocator);
  }

  async open() {
    await this.driver.get("https://www.cwjobs.co.uk/");
    return this;
  }
}

export default Homepage;
