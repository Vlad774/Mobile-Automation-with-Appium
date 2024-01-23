describe('Login In Tests', () => {
    it('Find Login Page', async () => {


        // Navigate Menu bar and click
        await $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView')
        .click();
        

        // Find Login Page

        await $('//android.widget.TextView[@text="Log In"]')
        .click();
        
        // Assertion Login Page displayed.
        await expect($('(//android.widget.TextView[@text="Login"])[1]')).toBeDisplayed();
        
    });

    
    
    
    it('Successful Login', async () => {

        //Login and Password input


        await $('~Username input field').addValue("bob@example.com");

        await driver.pause(1000);

        await $('~Password input field').addValue("10203040");

        await driver.pause(1000);

        await $('~Login button').click();

        await driver.pause(3000);

        
        
    });   
    
    it('Find Login out button', async () => {


        // Navigate Menu bar and click
        await $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView')
        .click();

        //Log out

        await $('//android.widget.TextView[@text="Log Out"]')
        .click();

        // Log out button
        await $('//android.widget.Button[@resource-id="android:id/button1"]')
        .click();
        
        // Click OK button
        await $('//*[@text="OK"]').click();
                      
        // Assertion Login Page displayed.
        await expect($('(//android.widget.TextView[@text="Login"])[1]')).toBeDisplayed();
        
    });

    it('Invalid Username', async () => {

        //Login and Password input

        // Username filed clear
        const usernameInput = $('~Username input field');
        
        await usernameInput.clearValue();

        // Password filed clear
        const passwordInput = $('~Password input field');
        
        await passwordInput.clearValue();


        await $('~Username input field').addValue("bob@examle.com");

        await driver.pause(1000);

        await $('~Password input field').addValue("10203040");

        await driver.pause(1000);

        await $('~Login button').click();

        await driver.pause(3000);

        // Assertion Login Page displayed.
        
        await expect($('//android.widget.TextView[@text="Provided credentials do not match any user in this service."]')).toBeDisplayed();

        await driver.pause(1000);
    });

    it('Invalid Password', async () => {

        //Login and Password input

        // Username filed clear
        const usernameInput = $('~Username input field');
        
        await usernameInput.clearValue();

        // Password filed clear
        const passwordInput = $('~Password input field');
        
        await passwordInput.clearValue();


        await $('~Username input field').addValue("bob@example.com");

        await driver.pause(1000);

        await $('~Password input field').addValue("0203040");

        await driver.pause(1000);

        await $('~Login button').click();

        await driver.pause(1000);

        // Assertion invalid password
        
        await expect($('//android.widget.TextView[@text="Provided credentials do not match any user in this service."]')).toBeDisplayed();

        await driver.pause(1000);
    });


    it('Blank Fields Username', async () => {

        // Username Field clear
        const usernameInput = $('~Username input field');

        
        await usernameInput.clearValue();

        
        await $('~Username input field').addValue("");

        await driver.pause(1000);

        await $('~Password input field').addValue("10203040");

        await driver.pause(1000);

        await $('~Login button').click();

        await driver.pause(1000);

        // Assertion Username is required.
        
        await expect($('//android.widget.TextView[@text="Username is required"]')).toBeDisplayed();

        await driver.pause(1000);
    });
   

    it('Blank Fields Password', async () => {

        // Username filed clear
        const usernameInput = $('~Username input field');
        
        await usernameInput.clearValue();

        // Password filed clear
        const passwordInput = $('~Password input field');
        
        await passwordInput.clearValue();
       
        await $('~Username input field').addValue("bob@examle.com");

        await driver.pause(1000);

        await $('~Password input field').addValue("");

        await driver.pause(1000);

        await $('~Login button').click();

        await driver.pause(1000);

        // Assertion Username is required.
        
        await expect($('//android.widget.TextView[@text="Password is required"]')).toBeDisplayed();

        await driver.pause(1000);
    });

    it('Special Characters in Username', async () => {

        //Login and Password input

        // Username filed clear
        const usernameInput = $('~Username input field');
        
        await usernameInput.clearValue();

        // Password filed clear
        const passwordInput = $('~Password input field');
        
        await passwordInput.clearValue();


        await $('~Username input field').addValue("bob@examle.com!!!");

        await driver.pause(1000);

        await $('~Password input field').addValue("10203040");

        await driver.pause(1000);

        await $('~Login button').click();

        await driver.pause(1000);

        // Assertion Login Page displayed.
        
        await expect($('//android.widget.TextView[@text="Provided credentials do not match any user in this service."]')).toBeDisplayed();

        await driver.pause(1000);
    });

    it('Special Characters in Password', async () => {

        //Login and Password input

        // Username filed clear
        const usernameInput = $('~Username input field');
        
        await usernameInput.clearValue();

        // Password filed clear
        const passwordInput = $('~Password input field');
        
        await passwordInput.clearValue();


        await $('~Username input field').addValue("bob@example.com");

        await driver.pause(1000);

        await $('~Password input field').addValue("!!!0203040");

        await driver.pause(1000);

        await $('~Login button').click();

        await driver.pause(1000);

        // Assertion invalid password
        
        await expect($('//android.widget.TextView[@text="Provided credentials do not match any user in this service."]')).toBeDisplayed();

        await driver.pause(1000);
    });

    it('Locked out Account', async () => {

        //Login and Password input

        // Username filed clear
        const usernameInput = $('~Username input field');
        
        await usernameInput.clearValue();

        // Password filed clear
        const passwordInput = $('~Password input field');
        
        await passwordInput.clearValue(); 


        await $('~Username input field').addValue("alice@example.com");

        await driver.pause(1000);

        await $('~Password input field').addValue("10203040");

        await driver.pause(1000);

        await $('~Login button').click();

        await driver.pause(1000);

        // Assertion Login Page displayed.
        
        await expect($('//android.widget.TextView[@text="Sorry, this user has been locked out."]')).toBeDisplayed();

        await driver.pause(1000);
    });

    
        


});