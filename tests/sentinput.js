module.exports={
    'enter data in input box' : function(browser){
        browser
        .url('http://the-internet.herokuapp.com/')
        .assert.title('The Internet')
        .waitForElementVisible('#content > ul > li:nth-child(27) > a', 10000, false,  'Element not visible!')
        .click('#content > ul > li:nth-child(27) > a')
        .waitForElementVisible('input[type=number]',10000)
        .assert.elementPresent("input[type=number]")
        .pause(10000)
        .click('input[type=number]')
        .setValue('input[type=number]','11111111')
        .pause(10000)
        console.log('value entered');

    },

    'enter data in input box 2' : function(browser){
        browser
        .url('http://the-internet.herokuapp.com/')
        .assert.title('The Internet')
        .waitForElementVisible('#content > ul > li:nth-child(27) > a', 10000, false,  'Element not visible!')
        .click('#content > ul > li:nth-child(27) > a')
        .waitForElementVisible('input[type=number]',10000)
        .assert.elementPresent("input[type=number]")
        .pause(10000)
        .click('input[type=number]')
        .setValue('input[type=number]','11111111')
        .pause(10000)
        console.log('value entered');

    }
    
}