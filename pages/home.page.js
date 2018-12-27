// const webdriver = require('selenium-webdriver');

const Homepage = function homepage(webdriver) {
  this.driver = new webdriver.Builder().forBrowser('chrome').build();
  this.searchBoxCSSLocator = 'input#keywords[name=Keywords][type=search]';
  this.locationBoxCSSLocator = 'input#location[type=search]';
  this.searchBoxSelector = this.driver.By.css(this.searchBoxCSSLocator);
  this.locationBoxSelector = this.driver.By.css(this.locationBoxCSSLocator);

  function open() {
    this.driver.get('https://www.cwjobs.co.uk/');
  }
};

module.exports = Homepage;
