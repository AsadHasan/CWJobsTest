const driver = require('selenium-webdriver');
const Homepage = require('../pages/home.page');

describe('CW Jobs test', () => {
  // const webdriver = new driver.Builder().forBrowser('chrome').build();
  // webdriver.findElement()
  // this.webdriver = driver;

  it('should open homepage', () => {
    const homepage = new Homepage(driver);
    homepage.open();
  });
});
