
describe ('Android Elements Tests', async () => {
    it('Find element by accessibility id', async () => {
        // find element by accessibility id
        const appOption = await $('~App');
        
        //click on element
        await appOption.click();
        //assertion
        const actionBar = await $('~Action Bar');
        
        await expect(actionBar).toBeExisting();
        
    })

   
    /*it('Find element by class name', async () => {
        // find element by class name
        const className = await $('android.widget.TextView');

        //Assertion
        await expect(className).toHaveText("API Demos")

    })

    ///  XPATH NOT WORKING WELL (NOT RECOMMENDED)  ///

    it('Find elements by Xpath', async () => {
        // xpath - (//tagname[@attribute=value])
        await driver.pause(5000);
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
        await driver.pause(5000);
    
       // find by resourcesId

        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();
        await driver.pause(5000);

        // find element by text

        await $('//android.widget.TextView[@text="Command two"]').click();
        await driver.pause(5000);

        //find element by class - assertion
        
       const textAssertioon = await $('//android.widget.TextView');
       await expect(textAssertion).toHaveText("You selected: 1, Command two");

    });
    */

    /// Find Elements by UIAutomator ///
    
    it('Find elements by UIAutomator', async () => {
        // find by text contains
        
        await $('android=new UiSelector().textContains("Alert")').click();
         
    });
    

    it('Find multiple elements', async () =>  {
        const expectedList = ['API Demos', "Access'ibility", 'Accessibility', 'Animation', 'App', 'Content',
        'Graphics', 'Media', 'NFC', 'OS', 'Preference', 'Text', 'Views']
        const actualList = []

        // find multiple elements
        const textList = await $$('android.widget.TextView');

        // loop through them
        for (const element of textList) {
            actualList.push(await element.getText());
            
        }
        
        // assertion the list

        await expect(actualList).toEqual(expectedList);
    });



        // WORKING WITH TEXT FIELD
    it('Working with text field', async () => {
        //access the screen

        await $ ('~Views').click();
        await $ ('//*[@text="Auto Complete"]').click();
        await $ ('~1. Screen Top').click();

        // enter counrty name

        const className = await $('android.widget.EditText');
        await driver.pause(5000);
        await className.addValue('Canada');
        await driver.pause(5000);
        // verify the country name 
        await expect(className).toHaveText('Canada');

    });
   

});
