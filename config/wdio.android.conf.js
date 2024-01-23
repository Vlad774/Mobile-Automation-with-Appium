const { config } = require('../wdio.shared.conf.js');



config.port =  4723;

// ========================
// Specs
// ========================
config.specs = [
    // ToDo: define location for spec files here
    //'../test/specs/**/android-native*.js'
// ========================
// NOTE APP
// ========================
    //'../test/specs/android/add-note.spec*.js'   
    '../test/specs/android/add-note-screen.spec.js',
    //'../test/specs/android/webview.spec.js',
// ========================
// MY DEMO APP
// ========================
    //'../test/specs/android/Android-MyDemo.spec.js'
    //'../test/specs/android/Android-MyDemo.Login.spec.js'
    
    //'../test/specs/android/General-Store.spec.js'
    //'../test/specs/UberAndroid/UberEatsTest.js'
    //'../test/specs/UberAndroid/test*.js'
    

];


config.capabilities = [{
    // capabilities for local Appium web tests on an Android Emulator
    platformName: 'Android',
    
    'appium:deviceName': 'Pixel 7',
    'appium:platformVersion': '10.0',
    'appium:automationName': 'UiAutomator2',
    //'appium:app': "D:\\appium_test_2\\webdrover-io-appium\\app\\android\\ApiDemos-debug.apk",
    'appium:app': "D:\\appium_test_2\\webdrover-io-appium\\app\\android\\ColorNote+Notepad.apk",
    //'appium:app': "D:\\appium_test_2\\webdrover-io-appium\\app\\android\\uber-eats-6.apk",
    //'appium:app': "D:\\appium_test_2\\webdrover-io-appium\\app\\android\\UberApp_android.apk",
    //'appium:app': "D:\\appium_test_2\\webdrover-io-appium\\app\\android\\Android-MyDemo.apk",
    //'appium:app': "D:\\appium_test_2\\webdrover-io-appium\\app\\android\\General-Store.apk",
                      
    'appium:autoGrantPermissions': true
    
}  
]


// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['appium'];




exports.config = config;