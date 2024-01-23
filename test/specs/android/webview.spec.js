const AddNoteScreen = require("../../screenobjects/android/add-note.screen");



describe('Web Browser Access', () => { 


    it('Skip tutorial', async () => {
        
        await AddNoteScreen.skipBtn.click();

        driver.pause(3000);

        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed();

    });


    it('Access external link and verigy content in the browser', async () => {
        
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]')
        .click();

        // click on Facebook link

        await $('//*[@text="Like us on Facebook"]').click();


        await $('//android.view.View[@text="󱤅"]').click();

        // get current context

        //console.log(await driver.getContext())

        await driver.pause(2000)

        //get all the contexts
        await driver.getContexts()

        //switch to webview chrome context
        //await driver.switchContext('WEBVIEW_chrome')

        

        const coverImg = await $('//*[@text="ColorNote"]');
        await expect(coverImg).toBeDisplayed()

        // switch back to app
        await driver.switchContext('NATIVE_APP')
        await driver.back()
        await driver.back()

        //continue with the app stuff..

        await $('//*[@text="Notes"]').click();
        const addNoteText = await $('//*[@text="Add note"]')
        await expect(addNoteText).toBeDisplayed()




    
    });
});