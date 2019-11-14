/* --------------------------------------------- */
/* --------------------------------------------- */
/* ----------------  Variables  ---------------- */
/* --------------------------------------------- */
/* --------------------------------------------- */                                          
                                             
    // How to set a variable version 'A' (recommended)
        var newVar = 'hi there'; // String
        var newVar2 = '6'; // String
        var newNum = 5; // number
        var newNum2 = 6; // number
        var numOneBigger = newNum > newNum2; // =false / boolean

    // How to set a variable version 'B'
        var newVar, newVar2, newNum;

        // using one of the above variables at this time will return 'undefined' until you set a value to them

        //note that you no longer need to add 'var' in front of them
        newVar = 'hi there'; // String
        newVar2 = '6'; // String
        newNum = 5; // number

    // redfeining a variable

        var aThing = 'car';
        aThing = 'truck';

    // How do know for a fact of what value type you have
        var newVar = 'hi there'; // String
        var newVar2 = '6'; // String
        var newNum = 5; // number
        console.log(typeof newVar2); // = String

/* --------------------------------------------- */
/* --------------------------------------------- */
/* ------------  Browser messaging  ------------ */
/* --------------------------------------------- */
/* --------------------------------------------- */

    var displayThisMessage = 'This is the message';

    // This will present the information as a line item with in the inspector console
        console.log(displayThisMessage);

    // This will display a pop up presented by the bowser. The user can not move forward until untill this is acknowledged
        alert(displayThisMessage);

    // This will display a question to the user that much like the alert, must be addressed before the user can move on
        prompt('What day is today?');

        // You would not do this unless you want to store/use the information, so you can set it to a variable
            var whatDayIsIt = prompt('What day is today?');
            console.log(whatDayIsIt);

/* --------------------------------------------- */
/* --------------------------------------------- */
/* ------  Operators - Math - true/false  ------ */
/* --------------------------------------------- */
/* --------------------------------------------- */

      // Addition
      var newNumber = 1+2; // =3

      // Subtraction
      var newNumber = 7-2; // =5

      // Multiplication
      var newNumber = 5*5; // =25

      // Division
      var newNumber = 10/2; // =10

      // order of operation / stuff in parentheses is calulated first
      var newNumber = 5*5+((12-5)+(2*5));
      // eq1=(12-5=7) 
      // eq2=(2*5=10)
      // eq3='eq1+eq2'=(7+10=12)
      // eq4=(5*5=25)
      // eq5='eq3+eq4'=(25+12=42)
      // newNumber = 42

      // if somthing true/false using greaterthan lessthan
      var numOne = 5;
      var numTwo = 10;
      var numOneBigger = numOne > numTwo;
      var numOneBigger2 = numOne < numTwo;
      console.log(numOneBigger); // = false
      console.log(numOneBigger2); // = true
