class Homepage {
  constructor(webdriver) {
    this.driver = new webdriver.Builder().forBrowser("chrome").build();
    this.searchBoxCSSLocator = "input#keywords[name=Keywords][type=search]";
    this.locationBoxCSSLocator = "input#location[type=search]";
    this.searchBoxSelector = webdriver.By.css(this.searchBoxCSSLocator);
    this.locationBoxSelector = webdriver.By.css(this.locationBoxCSSLocator);
  }

  open() {
    this.driver.get("https://www.cwjobs.co.uk/");
  }
}

export default Homepage;
