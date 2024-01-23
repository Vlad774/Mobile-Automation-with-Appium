const { config } = require('../wdio.shared.conf.js');


// ========================
// BrowserStack Credentials
// ========================
config.user = 'vladqatester_zWFQMD';
config.key = 'SADCt8AXTSUVpHbetLbJ';



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
// ========================
// MY DEMO APP
// ========================
    //'../test/specs/android/Android-MyDemo.spec.js'
    //'../test/specs/android/Android-MyDemo.spec.js'
    
    //'../test/specs/android/General-Store.spec.js'
    //'../test/specs/UberAndroid/UberEatsTest.js'
    //'../test/specs/UberAndroid/test*.js'
    

];

// ========================
// Capabilities
// ========================
config.capabilities = [{
    // capabilities for local Appium web tests on an Android Emulator
    platformName: 'Android',
    
    'appium:deviceName': 'Google Pixel 7',
    'appium:platformVersion': '13.0',
    'appium:automationName': 'UiAutomator2',
    //'appium:app': "D:\\appium_test_2\\webdrover-io-appium\\app\\android\\ApiDemos-debug.apk",
    'appium:app': "bs://bd2b64f458c2124c34f571d7ebbda484157d4719",
    //'appium:app': "D:\\appium_test_2\\webdrover-io-appium\\app\\android\\uber-eats-6.apk",
    //'appium:app': "D:\\appium_test_2\\webdrover-io-appium\\app\\android\\UberApp_android.apk",
    //'appium:app': "D:\\appium_test_2\\webdrover-io-appium\\app\\android\\Android-MyDemo.apk",
    //'appium:app': "D:\\appium_test_2\\webdrover-io-appium\\app\\android\\General-Store.apk",
                      
    'appium:autoGrantPermissions': true
    
}]


// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['browserstack'];

exports.config = config;