describe('Select Backpack and Shirt and to Cart', () => {
    it('Find Page Products', async () => {

        await $('//*[@text="Products"]').click();
        await expect($('//*[@text="Products"]')).toBeDisplayed();

        // Scroll down find object with text

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Sauce Labs Onesie")')
        .click();
        
        await expect($('//*[@text="Sauce Labs Onesie"]')).toBeDisplayed();

        await $('//android.view.ViewGroup[@content-desc="red circle"]/android.view.ViewGroup').click();

        await $('//*[@text="Add To Cart"]').click();

        await driver.back();

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Sauce Labs Backpack")')
        .click();
        
        await $('//android.view.ViewGroup[@content-desc="blue circle"]/android.view.ViewGroup').click();

        await $('//*[@text="Add To Cart"]').click();

        await $('//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.ImageView').click();

        await $('(//android.view.ViewGroup[@content-desc="counter plus button"])[1]/android.widget.ImageView')
        .click();

        await $('//*[@text="Proceed To Checkout"]').click();

        await driver.pause(1000);

    });

    
    
    
    it('Login', async () => {

        //Login and Password input


        await $('~Username input field').addValue("bob@example.com");

        await driver.pause(1000);

        await $('~Password input field').addValue("10203040");

        await driver.pause(1000);

        await $('~Login button').click();

        await driver.pause(1000);
        
    });    

    it('Enter Personal Data', async () => {

        //Entering personal data


        await $('~Full Name* input field').addValue("Vlad Vesninskiy");

        await $('~Address Line 1* input field').addValue("Beverly Hills");
        
        await $('~City* input field').addValue("Los Angeles");

        await $('~State/Region input field').addValue("California");

        await $('~Zip Code* input field').addValue("89750");

        await $('~Country* input field').addValue("United States");

        await $('~To Payment button').click();

        await driver.pause(1000);
      
        
    });

    it('Payment Information',  async () => {

        // Entering paymeant information

        await $('~Full Name* input field').addValue("Vlad Vesninskiy");

        await $('~Card Number* input field').addValue("325812657568789");
        
        await $('~Expiration Date* input field').addValue("0325");

        await $('~Security Code* input field').addValue("123");

        await $('//android.view.ViewGroup[@content-desc="checkbox for My billing address is the same as my shipping address."]/android.view.ViewGroup/android.widget.ImageView')
        .click()

        await $('//android.view.ViewGroup[@content-desc="checkbox for My billing address is the same as my shipping address."]/android.view.ViewGroup')
        .click()
                  
        await $('//*[@text="Review Order"]').click();

        await driver.pause(1000);

        await $('//*[@text="Place Order"]').click();

        await driver.pause(1000);

        await $('//*[@text="Thank you for your order"]').click();

        await expect($('//*[@text="Thank you for your order"]'));

        await driver.pause(1000);
    
        
    });
        












        

        








        


    



});