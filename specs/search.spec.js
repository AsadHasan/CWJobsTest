import driver from "selenium-webdriver";
import { expect } from "chai";
import Homepage from "../pages/home.page";

describe("CW Jobs test", () => {
  const webdriver = new driver.Builder().forBrowser("chrome").build();

  it("should open homepage", async () => {
    const expectedTitle =
      "IT jobs | Permanent & contract IT careers | The UK IT Jobs Board at CWJobs.co.uk";
    const homepage = await new Homepage(webdriver).open();
    const actualTitle = await homepage.getPageTitle();
    expect(actualTitle).to.equal(expectedTitle);
  });
});
