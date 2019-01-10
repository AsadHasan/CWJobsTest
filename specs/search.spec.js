// @flow
import driver from "selenium-webdriver";
import { expect } from "chai";
import { describe, it, after } from "mocha";
import Homepage from "../pages/home.page";
import "chromedriver";

describe("CW Jobs board", () => {
  const webdriver: driver.ThenableWebDriver = new driver.Builder()
    .forBrowser("chrome")
    .build();
  const homepage: Homepage = new Homepage(webdriver);

  it("should display homepage", async () => {
    const expectedTitle: string =
      "IT jobs | Permanent & contract IT careers | The UK IT Jobs Board at CWJobs.co.uk";
    homepage.open();
    const actualTitle: string = homepage.getPageTitle();
    expect(actualTitle).to.equal(expectedTitle);
  });

  it("should allow job search", async () => {
    await homepage.searchJob("tester", "Bradford", "5");
  });

  after(async () => {
    await webdriver.quit();
  });
});
