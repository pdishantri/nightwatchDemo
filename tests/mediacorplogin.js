const test = require("./test");

module.exports={

    '@tags':['media'],
    'MediaCorp Login Page: Enter Username': function(browser){
      
   // console.log('Bas',process.env.BASE_URL);
     const login = browser.page.login();

     login
     .navigate()
     .assert.title('Log in | MediaCorp Core')
     .setValue('@email',process.env.CMS_USERNAME)
    },

    'MediaCorp Login Page: Enter Password': function(browser){
        const login = browser.page.login();
   
        login
        .setValue('@password',process.env.CMS_PASSWORD)
        .click('@login')
        //.saveScreenshot('./reports/login.png');

        


    }

}