const AddNoteScreen = require("../../screenobjects/android/add-note.screen");

describe('Add Notes', () => {
    it('Skip tutorial', async () => {
        
        await AddNoteScreen.skipBtn.click();

        driver.pause(3000);

        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed();

    });

    it('add a note, save changes & verify note', async () => {
        await AddNoteScreen.addNoteTxt.click();
        await AddNoteScreen.textOption.click();

        await expect(AddNoteScreen.textEditing).toBeDisplayed();

        await AddNoteScreen.noteHeading.addValue("Grocery List");


        //add note body
        await AddNoteScreen.noteBody
        .addValue("Carrots\nPotatoes\nTomatoes\nCabbage\nSour Cream\nChicken Breast\nBeef");



        // save the changes
        await AddNoteScreen.saveNote()

        //assertion
        await expect(AddNoteScreen.editBtn).toBeDisplayed();
        

        await expect(AddNoteScreen.viewNote)
        .toHaveText("Carrots\nPotatoes\nTomatoes\nCabbage\nSour Cream\nChicken Breast\nBeef");

        await driver.pause(5000);
        await driver.back();

    });    
    

    it('Delete a note & check the note in trash can', async () => {
        
        
       


        const note = await AddNoteScreen.firstNote.getText();

        //click on note
        await AddNoteScreen.firstNote.click();
       
       
        //click on more icon
        await AddNoteScreen.moreIcon.click(); 

        // click on Delete
        await AddNoteScreen.deleteIcon.click();

        //accept alert
        await driver.acceptAlert();

        //click on nav icon
        await AddNoteScreen.navIcon.click();

        await driver.pause(2000);
        
        //click on Trash can list item
        await AddNoteScreen.trashCanitem.click();

        // assertion 
        // eslint-disable-next-line no-unused-vars
        

        await expect(AddNoteScreen.firstNote).toHaveText(note);

        
    });


});
