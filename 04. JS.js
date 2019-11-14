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
    console.log(whatdayisIt)
