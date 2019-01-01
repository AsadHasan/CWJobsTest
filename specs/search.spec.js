// @flow
import driver from "selenium-webdriver";
import { expect } from "chai";
import Homepage from "../pages/home.page";

describe("CW Jobs board", () => {
  const webdriver = new driver.Builder().forBrowser("chrome").build();
  const homepage = new Homepage(webdriver);

  it("should display homepage", async () => {
    const expectedTitle =
      "IT jobs | Permanent & contract IT careers | The UK IT Jobs Board at CWJobs.co.uk";
    await homepage.open();
    const actualTitle = await homepage.getPageTitle();
    expect(actualTitle).to.equal(expectedTitle);
  });

  it("should allow job search", async () => {
    await homepage.searchJob("tester", "Bradford");
  });
});
