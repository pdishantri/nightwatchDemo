
module.exports =
{

  "src_folders" : ["tests"],
  "page_objects_path" : ["page-objects"],
  "globals_path": "global.js",

 



  "selenium" : {
    "start_process": true,
    //"server_path": "node_modules/.bin/chromedriver",
    "server_path": "node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.141.59.jar",
    //"port": 9515,
    "host" : "127.0.0.1",
    "port": 4445,
    "cli_args": {
      "webdriver.chrome.driver": "node_modules/.bin/chromedriver",
      "webdriver.gecko.driver": "node_modules/.bin/geckodriver",
      "webdriver.opera.driver": "node_modules/.bin/operadriver"
    }
  },


  "test_workers": {
    "enabled": true,
    "workers": "auto"
  },


  // reporter: function(results , done) {
  //   let srcResult = "/Users/pramod.dishantri/sites/Nightwatch copy/reports";
  //   var generation = allure(["generate", "--clean", srcResult]);
  //   generation.on ('exit',()=>{
  //     done();
  //   });
  // },



  "test_settings" : {
    "default" : {
      // "launch_url": "",
      // "selenium_port": 4445,
      // "selenium_host": "localhost",
      // "silent": true,
      "skip_testcases_on_fail": false,
      "end_session_on_fail": true,
      "screenshots": {
        "enabled": false,
        "path": "/Users/pramod.dishantri/sites/Nightwatch copy/reports",
        "on_failure": true,
        "on_error": true,
        "on_pass":false
      },
     
      "desiredCapabilities": {
        //"server_path": "node_modules/.bin/chromedriver",
        "browserName": "chrome",
       "javascriptEnabled": true,
        // "chromeOptions": {
        //   "args":
        //   [
        //    "headless",
        //    "window-size=1920,1200"
        //    ]
        // }
       
      }
    },
    "firefox": {
      "desiredCapabilities": {
        "browserName": "firefox",
        "marionette": true,
        // "alwaysMatch": {
        //   "moz:firefoxOptions": {
        //       "args": ["-headless"]
        //   }
      //}  
       }
    },
    "opera": {
      "desiredCapabilities": {
        "browserName": "opera"
      }
    },
    "ie": {
      "desiredCapabilities": {
        "browserName": "ie",
      }
    }
  }
}





// test_settings: {
//   default: {
//     launch_url: 'https://nightwatchjs.org'
//   },

   

//   selenium: {
//     // Selenium Server is running locally and is managed by Nightwatch
//     selenium: {
//       start_process: true,
//       port: 80,
//       server_path: require('selenium-server').path,
//       cli_args: {
//         'webdriver.gecko.driver': require('geckodriver').path,
//         'webdriver.chrome.driver': require('chromedriver').path,
//        // 'webdriver.ie.driver': process.platform === 'win32' ? require('iedriver').path : ''
//         'webdriver.ie.driver':  require('iedriver').path = 'node_modules/.bin/iedriver' 
//       },
//       "test_workers": {
//         "enabled": true,
//         "workers": "auto"
//       },
//     },
    
//     webdriver: {
//       start_process: true
//     },
    

//   },

  

//   'chrome': {
//     extends: 'selenium',
//     desiredCapabilities: {
//       browserName: 'chrome',
//       chromeOptions : {
//         w3c: false
//       }
//     }
//   },

//   'firefox': {
//     extends: 'selenium',
//     desiredCapabilities: {
//       browserName: 'firefox'
//     }
//   },

//   'ie': {
//     extends: 'selenium',
//     desiredCapabilities: {
//       browserName: 'internet explorer'
//     }
//   },

//   'selenium.safari': {
//     extends: 'safari',
//     desiredCapabilities: {
//       browserName: 'safari'
//     }
//   }
// }
// }
