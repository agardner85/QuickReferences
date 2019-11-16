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
        console.log(newNumber);

    // Subtraction
        var newNumber = 7-2; // =5
        console.log(newNumber);

     // Multiplication
        var newNumber = 5*5; // =25
        console.log(newNumber);

    // Division
        var newNumber = 10/2; // =5
        console.log(newNumber);

    // order of operation / stuff in parentheses is calulated first
        var newNumber = 5*5+((12-5)+(2*5));
        // eq1=(12-5=7) 
        // eq2=(2*5=10)
        // eq3='eq1+eq2'=(7+10=12)
        // eq4=(5*5=25)
        // eq5='eq3+eq4'=(25+12=42)
        // newNumber = 42
        console.log(newNumber);

    // if something true/false using greaterthan lessthan
        var numOne = 5;
        var numTwo = 10;
        var numOneBigger = numOne > numTwo;
        var numOneBigger2 = numOne < numTwo;
        console.log(numOneBigger); // = false
        console.log(numOneBigger2); // = true

/* --------------------------------------------- */
/* --------------------------------------------- */
/* --------------  If Statement  --------------- */
/* --------------------------------------------- */
/* --------------------------------------------- */     

    // if statments will stop on the first statment that is true
    // always add an 'else' to your fif statmenst. it seems like extra unneeded work, but it adds a level of fallback that allows you to find errors or redirect a probelms so that the codes does not die on that line.


    // The below statment will stop on the first stament even though there is more written below it
        var numOne = 5;
        var numTwo = 8;
        if (numOne == 5) {
            console.log('this number is 5 | Statment 1 was satisfied and stoped');
        }
        else if (numTwo == 8) {
            console.log('this number is 8 | Statment 1 was not satisifed but statment 2 was');
        }
        else {
            console.log('this number is something other than 5 or 8');
        }

    // The below statment failed the firststamnet and was satissfied on the 2nd and stoped
        var numOne = 5;
        var numTwo = 8;
        if (numOne == 9) {
            console.log('this number is 5 | Statment 1 was satisfied and stoped');
        }
        else if (numTwo == 8) {
            console.log('this number is 8 | Statment 1 was not satisfied but statment 2 was');
        }
        else {
            console.log('this number is something other than 5 or 8 | no statments were satisfied');
        }

    // None of the statments were satisfied so it resulted into a generic catch all at the bottom of the statment.
        var numOne = 5;
        var numTwo = 8;
        if (numOne == 9) {
            console.log('this number is 5 | Statment 1 was satisfied and stoped');
        }
        else if (numTwo == 1) {
            console.log('this number is 8 | statment 1 was not satisfied but statment 2 was');
        }
        else {
            console.log('this number is something other than 5 or 8 | no statments were satisfied');
        }

/* --------------------------------------------- */
/* --------------------------------------------- */
/* ------  If Statement with Operators --------- */
/* --------------------------------------------- */
/* --------------------------------------------- */ 

    // you can put multiple requirements into a single statment.


    // statment one is false, but statment 2 has 2 requirements to fill to be satisfied
    // && = and statment - this means that both statmenst need to be true
        var numOne = 5;
        var numTwo = 8;
        if (numOne == 5 && numTwo == 8) {
            console.log('all requirements were satisfied');
        }
        else {
            console.log('this number is something other than 5 or 8');
        }


    // || = or statment - this means that only one of the requirmenst hass to be correct to be satisfied
        var numOne = 5;
        var numTwo = 8;
        if (numOne == 5 || numTwo == 12) {
            console.log('at least 1 of the requirements were satisfied');
        }
        else {
            console.log('this number is something other than 5 or 8');
        }


    // ! = does not equal - This means that the requirmenst needs to be something other than the spacific value it is looking for.
        var numOne = 5;
        var numTwo = 8;
        if (numOne != 4 && numTwo != 10) {
            console.log('both requirmenst are something other than the spacific value it is looking for');
        }
        else {
            console.log('-');
        }


    // > = greaterthan statment - the first requiment needs to be larger than the second
        var numOne = 5;
        var numTwo = 8;
        if (numTwo > numOne) {
            console.log('numTwo is larger than numOne');
        }
        else {
            console.log('numTwo is smaller than numOne');
        }


    // >= = greaterthan or equal too statment - the first requiment needs to be the same as or larger that what it is being compared too.
        var numOne = 5;
        var numTwo = 8;
        if (numTwo >= 8) {
            console.log('The value is equal too or larger than numTwo');
        }
        else {
            console.log('numTwo is smaller than the value is is looking for');
        }


    // < = greaterthan statment - the first requiment needs to be larger than the second
        var numOne = 5;
        var numTwo = 8;
        if (numOne < numTwo) {
            console.log('numOne is smaller than numTwo');
        }
        else {
            console.log('numOne is larger than numTwo');
        }


    // <= = greaterthan or equal too statment - the first requiment needs to be the same as or larger that what it is being compared too.
        var numOne = 5;
        var numTwo = 8;
        if (numOne <= 5) {
            console.log('numOne is equal too or less than the value');
        }
        else {
            console.log('numOne is larger than the value');
        }

/* --------------------------------------------- */
/* --------------------------------------------- */
/* - Ternary statement (shorthand if statment)   */
/* --------------------------------------------- */
/* --------------------------------------------- */  

    // you can write if statmnets with less code.

        // ? acts as the {} portion directly after a standard if statment
        // : acts as the else portion of the if statment

        var myName = 'Andrew';
        var age = 20;
        age >= 18 ? console.log(myName + 'is of legal age and has full access') : console.log(myName + 'is a minor and has restricted access');

        var myName = 'Andrew';
        var age = 16;
        age >= 18 ? console.log(myName + 'is of legal age and has full access') : console.log(myName + 'is a minor and has restricted access');


        // you can set a variable this way as well.

        var age = 20;
        var isOfAge = age >= 18 ? 'adult' : 'minor';
        console.log(myName + ' is a ' + isOfAge);

        var age = 16;
        var isOfAge = age >= 18 ? 'adult' : 'minor';
        console.log(myName + ' is a ' + isOfAge);

/* --------------------------------------------- */
/* --------------------------------------------- */
/* ----------- Switch / case statment ---------- */
/* --------------------------------------------- */
/* --------------------------------------------- */ 

    // if you want a shorter version of a ifstatment where you are checking a single requiment you can write a case statment

        var whoAmI = 'Batman';
        switch (whoAmI) {
            case 'Superman' : console.log('I fear green rocks'); // if
                break; 
            case 'Aquaman' : console.log('I fear fishing nets'); // else if
                break; 
            case 'Batman' : console.log('I fear nothing'); // else if
                break; 
            default : console.log('What was that shadow?'); // else
        }

        // you can have multiple cases to satisfy an argument
        var whoAmI = 'Batmaaaaan';
        switch (whoAmI) {
            case 'Superman' : console.log('I fear green rocks'); // if
                break; 
            case 'Aquaman' : console.log('I fear fishing nets'); // else if
                break; 
            case 'Batman' : case 'Batmaaaaan' : console.log('I fear nothing'); // else if
                break; 
            default : console.log('What was that shadow?'); // else
        }

        // you can use a switch/case statment to verify a true/false statment., It will find which one is 'true' and exicute it
        var age = 20;
        switch (true) {
            case age < 18 : console.log('underage'); // if
                break; 
            case age > 18 && age < 50 : console.log('adult'); // else if
                break; 
            case age > 50 : console.log('Is that a gray hair?'); // else if
                break; 
            default : console.log('i am agless'); // else
        }

/* --------------------------------------------- */
/* --------------------------------------------- */
/* ----------------- Functions ----------------- */
/* --------------------------------------------- */
/* --------------------------------------------- */

    // you can make a function to do the same code over and over with out re-writting it. Basicly you can create a set of instructions to a variable and the cann the variable... but call it a function

        // declare the name of the function
        // 'birthYear' is a peramiter that you will be defining
        function whatIsYourAge (birthYear) {
            // when you use the function, what ever number you use to replace 'birthYear' will be placed in the equations and evaluated
            return 2019 - birthYear;
        }

        var guyOneAge = whatIsYourAge(1988);
        var guyTwoAge = whatIsYourAge(1990);
        var guyThreeAge = whatIsYourAge(1872);

        // write out the values of each varable after it has been passed through the function
        console.log(guyOneAge, guyTwoAge, guyThreeAge)


        // this is the same as above, but with multyiple steps
        // each peramiter is seperated by a comma. When the function is ran it will find the value of that peramiter and evaluate it as the function is ran.
        function yearsLeftToDeath (birthYear, fName) {
            var age = whatIsYourAge (birthYear);
            var death = 100 - age;
            console.log(fName + ' has ' +death+ ' many years left');
        }

        // The function has its own console.log in its, so calling the function will display the information whats the function is completed.
        yearsLeftToDeath (1980, 'Andrew');
        yearsLeftToDeath (1992, 'Bill');
        yearsLeftToDeath (2007, 'Bob');


/* --------------------------------------------- */
/* --------------------------------------------- */
/* ------------------ Arrays ------------------- */
/* --------------------------------------------- */
/* --------------------------------------------- */

    // you can store more than one value in a variable and then find that value or its place in the listing of values


        var products = ['shirt','shoes','pants','jacket'];
        var productColors = ['black','red','blue','green','orange','brown'];


        // js uses 0 as the first number, so 2 will be the thired entry in the array
        console.log(products[2]); // = pants
        console.log(productColors[5]); // = brown

        console.log(productColors[1]+' '+products[1]); // = red shirt

        // you can dynamicly overwrite a value in the array
        var products = ['shirt','shoes','pants','jacket'];
        console.log(products); // = shirt shoes pants jacket
        products [2] = 'skirt'; // replace 'pants' with 'skirt'
        console.log(products); // = shirt shoes skirt jacket


        // you can ad to the array a few differnet ways
        var products = ['shirt','shoes','pants','jacket'];
        products [4] = 'skirt';
        console.log(products);

        // or
       
        // push will append the value to the end of the arry
        var products = ['shirt','shoes','pants','jacket'];
        products.push('skirt');
        console.log(products);


        // you can add the begining of the array
        var products = ['shirt','shoes','pants','jacket'];
        products.unshift('heels');
        console.log(products);


        // you can remove the last item with pop
        var products = ['shirt','shoes','pants','jacket'];
        products.pop();
        console.log(products);


        // you can remove the firdt item with shift
        var products = ['shirt','shoes','pants','jacket'];
        products.shift();
        console.log(products);


        // find the location of one of the items in the array
        var products = ['shirt','shoes','pants','jacket'];
        console.log(products.indexOf('shoes')); // = 1... which is the 2nd position when yous taty with 0
































































































