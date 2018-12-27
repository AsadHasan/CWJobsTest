var driver=require('selenium-webdriver');
require('../pages/home.page');

describe('CW Jobs test', function(){
    let webdriver=new driver.Builder().forBrowser('chrome').build();

    it('should open homepage',function(){
        let homepage=new Homepage(webdriver);
        homepage.open();
    })
})

