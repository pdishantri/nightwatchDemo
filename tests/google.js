module.exports={

    '@tags': ['google'],
    'Google Advance search': function(browser){

        const searchWord = 'input[name="as_q"]';
        const language = '[id="lr_button"]';
        const englishSelect = '[id=":d"]';
        const lastUpdate = '[id=":84"]';
        const timeSelect = '[id=":83"]';
        const region = '[id="cr_button"]';
        const indiaSelect= '[id=":44"]';
        const searchButton = '[value="Advanced Search"]';
        const searchResult ='#searchform [name="q"]';
        const selectedLanguage='[class="hdtb-mn-hd hdtb-tsel"]';


        browser
        .url('https://www.google.com/advanced_search')
        .assert.urlContains('advanced_search')
        .setValue(searchWord,'Nightwatch JS')
        .click(language)
        .click(englishSelect)
        .click(region)
        .click(indiaSelect)
        .click(lastUpdate)
        .click(timeSelect)
        .click(searchButton)
        .assert.valueContains(searchResult,'Nightwatch JS')
        .assert.containsText(selectedLanguage, 'English')
        .assert.urlContains('Nightwatch')
        .assert.urlContains('JS')
        .saveScreenshot('tests_output/google.png')

    }
}