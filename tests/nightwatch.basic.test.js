const { expect } = require('chai');
module.exports = {
    "Assertion of Address in website": (browser)=>{
    browser
    .url('https://www.nisum.com')
    .waitForElementVisible("[class='mega-drop-1 loaded']")
    .click("[class='mega-drop-1 loaded']")
    .useXpath()
    .waitForElementVisible("//span[contains(text(),'Jami')]")
    .waitForElementVisible("//span[contains(text(),'DHA')]")
    },
    "demoTestAsync": async function(browser) {
        let nisumAddress = await browser.useXpath().getText("//span[contains(text(),'Jami')]", function(result) {
            console.log(result.value)
        })
        browser.url('https://www.google.com')
        .waitForElementVisible('css selector','input[name="q"]')
        .setValue('css selector','input[name="q"]',"Nisum Karachi")
        .keys(browser.Keys.ENTER)
        .waitForElementVisible('css selector','.LrzXr:nth-child(2)')
        
        let nisumGoogleAddress = await browser.getText('css selector','.LrzXr:nth-child(2)' )
        // .verify.containsText(nisumGoogleAddress.value,nisumAddress.value)
        expect(nisumGoogleAddress.value).to.contains(nisumAddress.value);
    },
};