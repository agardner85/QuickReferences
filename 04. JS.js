/* ---------------------------------------------------------
         __     __         _       _     _           
         \ \   / /_ _ _ __(_) __ _| |__ | | ___  ___ 
          \ \ / / _` | '__| |/ _` | '_ \| |/ _ \/ __|
           \ V / (_| | |  | | (_| | |_) | |  __/\__ \
            \_/ \__,_|_|  |_|\__,_|_.__/|_|\___||___/
                                             
--------------------------------------------------------- */                                           
                                             

    // How to set a variable version 'A' (recommended)
        var newVar = 'hi there'; // String
        var newVar2 = '6'; // String
        var newNum = 5; // number

    // How to set a variable version 'B'
        var newVar, newVar2, newNum

        // using one of the above variables at this time will return 'undefined' until you set a value to them

        //note that you no longer need to add 'var' in front of them
        newVar = 'hi there'; // String
        newVar2 = '6'; // String
        newNum = 5; // number

    // redfeining a variable

        var aThing = 'car';
        aThing = 'truck';

/* -- display message / browser message / system popup -- */

    var displayThisMessage = 'This is the message';

    // This will display a pop up presented by the bowser. The user can not move forward until untill this is acknowledged
        alert(displayThisMessage);

    // This will present the information as aline item with in the inspector console
        console.log(displayThisMessage);

    // This will display a question to the user that much like the alert, must be addressed before the user can move on
        prompt('What day is today?');

    // You would not do this unless you want to store/use the information so you can set it to a variable
        var whatDayIsIt = prompt('What day is today?');
        console.log(whatDayIsIt);
