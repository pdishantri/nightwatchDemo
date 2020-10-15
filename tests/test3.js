module.exports ={
    'Third Test' : function(browser){
    browser.url('https://www.google.com')
    .waitForElementVisible('input[type=text]')
    browser.assert.urlContains('google.com')
    .assert.visible('input[type=text]')
    .setValue('input[type=text]','Pramod Dishantri')
    .end()
    
    
    }
}