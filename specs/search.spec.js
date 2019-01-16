// @flow
import { ThenableWebDriver, WebElement, Builder } from "selenium-webdriver";
import { expect } from "chai";
import { describe, it, after } from "mocha";
import Homepage from "../pages/home.page";
import "chromedriver";
import SearchPage from "../pages/search.page";

describe("CW Jobs board", () => {
  const webdriver: ThenableWebDriver = new Builder()
    .forBrowser("chrome")
    .build();
  const homepage: Homepage = new Homepage(webdriver);

  it("should display homepage", async () => {
    const expectedTitle: string =
      "IT jobs | Permanent & contract IT careers | The UK IT Jobs Board at CWJobs.co.uk";
    await homepage.open();
    const actualTitle: string = await homepage.getPageTitle();
    await expect(actualTitle).to.equal(expectedTitle);
  });

  it("should show search results", async () => {
    const searchPage: SearchPage = await homepage.searchJob(
      "tester",
      "Bradford",
      "5"
    );
    const searchResults: WebElement[] = await searchPage.getSearchResults();
    await expect(searchResults).to.not.be.empty;
  });

  after(async () => {
    await webdriver.quit();
  });
});
