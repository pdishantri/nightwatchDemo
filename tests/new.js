module.exports = {

    '@tags':['pageobject'],
    'legacy page object': function (browser) {
  
      let myPageObject = browser.page.MyLegacyPage();
      myPageObject.navigate();
      

    }
  };