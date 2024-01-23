describe('Android Native Features Tests', () => {
    it('Access an Activity directly', async () => {
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");

        await driver.pause(5000);

        // assertion
        await expect($('//*[@class=android.widget.TextView]'))
    })



    it('Working with Dialog boxes', async () => {
        

        const appOption = await $('~OK Cancel dialog with a message');

        await appOption.click();

        // await driver.acceptAlert();

        //get alert text
        console.log('ALERT TEXT -->', await driver.getAlertText());


        // Click on Ok button
        await $('//*[@resource-id="android:id/button1"]').click();

        //assertion - alert box is no longr visisble 
        await expect ($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
             
              
                

    })

    it('Vertical Scrolling', async () => {
        await $('~App').click();
        await $('~Activity').click();

        // Scroll to the end (not stable if element gets moved)
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');

        // Scroll Test Into View - more stable

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

        // await $('~Secure Surfaces').click();

        // assertion
        await expect($('~Secure Dialog')).toExist();

    });

    it("Horizontal Scrolling", async () => {
        await driver.startActivity(
            "io.appium.android.apis",
            "io.appium.android.apis.view.Gallery1"
        );


        // Horizontal scrolling 
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollToEnd(1,5)');

        await driver.pause(3000);


    })

    it('Working with a date picker', async () => {
        // access the date picker
        await driver.startActivity(
        "io.appium.android.apis",
        "io.appium.android.apis.view.DateWidgets1"
    )

        // get current date
        const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
        const currentDate = await date.getText();

        //click on change the date button

        await $('~change the date').click();

        //scroll right to the next month

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollToEnd(1,5)');

        await driver.pause(3000);

        // select the 10th date
        await $('//*[@text="10"]').click();

        //click on OK button 
        await $('//*[@resource-id="android:id/button1"]').click();

        //verify the updates date

        await expect(await date.getText()).not.toEqual(currentDate);
    })
})