//var webdriver=require('selenium-webdriver');
//var drv=new webdriver.Builder().forBrowser('chrome').build();
//drv.get("");
class Homepage{
    searchBoxCSSLocator="input#keywords[name=Keywords][type=search]";
    locationBoxCSSLocator="input#location[type=search]";
    searchBoxSelector;
    locationBoxSelector;

    constructor (webdriver){
        this.searchBoxSelector=webdriver.By.css(this.searchBoxCSSLocator);
        this.locationBoxSelector=webdriver.By.css(this.locationBoxCSSLocator);
    }

    open(){
        webdriver.get("https://www.cwjobs.co.uk/");
    }
}
module.exports=Homepage;
