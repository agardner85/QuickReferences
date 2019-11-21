/* --------------------------------------------- */
/* --------------------------------------------- */
/* ----------------  Quickies  ---------------- */
/* --------------------------------------------- */
/* --------------------------------------------- */ 
    
    // convert all text in a string to lower case
        var sentence = 'Each Of THESE leTTERs will retURn loWerCase'
        sentence = sentence.toLowerCase();
        console.log(sentence); // = each of these letters will return lowercase


    // see if somthing exsists with in a string.
        var sentence = 'Each Of THESE leTTERs will retURn loWerCase'
        if (sentence.toLowerCase().indexOf('return') != 0) {
            console.log(sentence.toLowerCase()); // = each of these letters will return lowercase
        }

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
/* -------------  Calling the URL  ------------- */
/* --------------------------------------------- */
/* --------------------------------------------- */


    // get the full current url of the page the user is on. Will not pick up any paramiters (anything after the ?)
        console.log(window.location.href)

    // breaking down all parts of the url
        //window.location.replace(window.location.href+'?hello=greeting&wave=no#title1');

        var urlParser = document.createElement('a');
        //urlParser.href = window.location.href
        urlParser.href = "http://example.com:3000/pathname/?hello=greeting&wave=no#title1";

        console.log('protocal: '+urlParser.protocol); // = "http:"
        console.log('hostname: '+urlParser.hostname); // = "example.com"
        console.log('port: '+urlParser.port); // = "3000"
        console.log('pathname: '+urlParser.pathname); // = "/pathname/"
        console.log('hash: '+urlParser.hash); // = "#hash"
        console.log('host: '+urlParser.host); // = "example.com:3000"
        console.log('paramaters: '+urlParser.search); // = "?search=test"
        
        // convert the 'urlParser.search' into a array of values.
        var paramArray = urlParser.search.replace('?','').split('&');
        console.log(paramArray);

        // write out all of the paramaters names and values
        var paramSplit = '';
        for (var i = 0; i < paramArray.length; i++) {
           paramSplit = paramArray[i].split('=');
           console.log('paramater'+[i+1]+' = paramaterName: '+paramSplit[0]+' | paramaterValue: '+paramSplit[1]);
        }

        // write out a spacific paramaters name and value.
        paramSingleSplit = paramArray[1].split('=');
        console.log(paramSingleSplit[0]);
        console.log(paramSingleSplit[1]);

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

    // find out of a number is odd or even using a function.
    // % operator returns where or not the value of the devision equation is a full number or has a remainder... it  will return a 1 or 0 value.
        function isOdd(num) { return num % 2;}
        console.log("1 is " + isOdd(1));
        console.log("2 is " + isOdd(2));
        console.log("3 is " + isOdd(3));
        console.log("4 is " + isOdd(4));

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
        age >= 18 ? console.log(myName + ' is of legal age and has full access') : console.log(myName + 'is a minor and has restricted access');

        var myName = 'Andrew';
        var age = 16;
        age >= 18 ? console.log(myName + ' is of legal age and has full access') : console.log(myName + 'is a minor and has restricted access');


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

/* --------------------------------------------- */
/* --------------------------------------------- */
/* ----------------- Objects ------------------- */
/* --------------------------------------------- */
/* --------------------------------------------- */


    // how to build out a object that will contain multiple values and then search/call out those values.

        // the object
        var person = {
            fName: 'Andrew',
            lName: 'Gardner',
            birthYear: 1985,
            hashelicopter: false,
            cars: ['Tesla','Hyundai','Ford','Chevy','GM','Honda']
        }


        // calling out the value in a object one of two ways
        console.log(person.fName +' '+ person.lName);
        
        // or

        console.log(person['hashelicopter']);


        // calling a value form an array in the object
        console.log(person.cars[1]);


        // you can change the value of values in a object by redefining tgem.
        person['hashelicopter'] = true;
        person.fName = 'Andreeeeeeew';
        console.log(person.fName +' '+ person.lName);
        console.log(person['hashelicopter']);


        // you can display all the values in the object with just calling the object
        console.log(person);


        // you can toss in a function inside the object

        var person = {
            fName: 'Andrew',
            lName: 'Gardner',
            birthYear: 1985,
            hashelicopter: false,
            cars: ['Tesla','Hyundai','Ford','Chevy','GM','Honda'],
            pAge: function(personAge) {
                return 2019 - personAge;
            }
        }

        console.log(person.pAge(1988));
        console.log(person);


        // you can use a value inside the object to make a new value, even inside the function
        var person = {
            fName: 'Andrew',
            lName: 'Gardner',
            birthYear: 1985,
            hashelicopter: false,
            cars: ['Tesla','Hyundai','Ford','Chevy','GM','Honda'],
            pAge: function() {
                this.age = 2019 - this.birthYear;// new value being added to the object which values is based on other values already in the ovject.
            }
        }

        person.pAge();
        console.log(person);

/* --------------------------------------------- */
/* --------------------------------------------- */
/* ------------------ Loops -------------------- */
/* --------------------------------------------- */
/* --------------------------------------------- */


    // if you want to do something over and over again... usually a set amount of times.

        // var i is set to a number
        // i++ = that ever time thr loop is run, it will take the value of i and add one to it.
        // then since the condition is to run the loop until i is less than 10... it will count up from zero to nine.
        for (var i = 0; i < 10; i++) {
            console.log(i);
        }

        var person = {
            fName: 'Andrew',
            lName: 'Gardner',
            birthYear: 1985,
            hashelicopter: false,
            cars: ['Tesla','Hyundai','Ford','Chevy','GM','Honda'],
            pAge: function() {
                this.age = 2019 - this.birthYear;
            }
        }

        // setting the length of the array to a variable
        var loopHowManyTimes = person.cars.length;
        for (var i = 0; i < loopHowManyTimes; i++) {
            console.log(person.cars[i]);
        }


        // or


        // adding the length of the array in the for loop
        for (var i = 0; i < person.cars.length; i++) {
            console.log(person.cars[i]);
        }



        //while loop
        var person = {
            fName: 'Andrew',
            lName: 'Gardner',
            birthYear: 1985,
            hashelicopter: false,
            cars: ['Tesla','Hyundai','Ford','Chevy','GM','Honda'],
            pAge: function() {
                this.age = 2019 - this.birthYear;
            }
        }

        var i = 0;
        while (i < person.cars.length){
            console.log(person.cars[i]);
            i++
        }


        // continue and break in a loop

        //continue, if it finds somthing that does not match its conditions, it will skip that value and continue
        var person = {
            fName: 'Andrew',
            lName: 'Gardner',
            birthYear: 1985,
            hashelicopter: false,
            cars: ['Tesla','Hyundai',2015,'Ford','Chevy',1998,'GM','Honda'], // note that numbers have been added to the arry
            pAge: function() {
                this.age = 2019 - this.birthYear;
            }
        }

        for (var i = 0; i < person.cars.length; i++) {
            if (typeof person.cars[i] !== 'string') continue;
                console.log(person.cars[i]);
        }

        // or

        for (var i = 0; i < person.cars.length; i++) {
            if (typeof person.cars[i] !== 'string') {
                continue;
            } 
               console.log(person.cars[i]);  
        }


        //break, if it finds somthing that does not match its conditions, it will stop the loop
        var person = {
            fName: 'Andrew',
            lName: 'Gardner',
            birthYear: 1985,
            hashelicopter: false,
            cars: ['Tesla','Hyundai',2015,'Ford','Chevy',1998,'GM','Honda'], // note that numbers have been added to the arry
            pAge: function() {
                this.age = 2019 - this.birthYear;
            }
        }

        for (var i = 0; i < person.cars.length; i++) {
            if (typeof person.cars[i] !== 'string') break;
                console.log(person.cars[i]);
        }

        // or

        for (var i = 0; i < person.cars.length; i++) {
            if (typeof person.cars[i] !== 'string') {
                break;
            } 
               console.log(person.cars[i]);  
        }

/* --------------------------------------------- */
/* --------- Array value manipulation ---------- */
/* ---------- Call back functions -------------- */
/* ------ Functions as function argument ------- */
/* --------------------------------------------- */

        // you can use a function to build or rebuild an array of values.
        var years = [1980,1982,1985,1990,2000,2010];
        console.log(years);

        // this function is going to grab an array and pass it through another funtions that is defined below
        // this function will not product anything by its self and need the suppporting functions below
        function yearsUpdate(arrData, yearUpdateFunction){
            var newArray = []; // empty array
            console.log (newArray + ' | this is the new empty array');
            // loop through each value of the array and do 'something'
            for (var i = 0; i < arrData.length; i++) {
                // push adds the new value to the end of the array.
                // in this example the new value in the array has had a number added or subtracted from it based on which one function below was used as a value passed into this parent funtion
                newArray.push(yearUpdateFunction(arrData[i]));
                console.log (newArray); // this console.log will show thr array being rebuilt interation by interation until all values in the array has been passed
            }
            return newArray;
        }

        // This location/value of the value in the array will have 30 added to it.
        function yearIncrease(aVal) {
            return 30 + aVal;
        }

        // This location/value of the value in the array will have 5 subtracted from it.
        function yearDecrease(aVal) {
            return aVal - 5;
        }

        // will pass the array and the desired funtion through the parent funtion to produce the desired result.
        var whatIsYearUp = yearsUpdate(years, yearIncrease);
        var whatIsYearDown = yearsUpdate(years, yearDecrease);

        // you can then use the new array and pass it through the parent function again if needed
        var whatIsYearUpAgain = yearsUpdate(whatIsYearUp, yearIncrease);

        // will display the value of new array based on the location that was called.
        console.log(whatIsYearUp[1]);
        console.log(whatIsYearDown[4]);
        console.log(whatIsYearUpAgain[3]);

/* --------------------------------------------- */
/* --------------------------------------------- */
/* ------------- Object contructor ------------- */
/* --------------------------------------------- */
/* --------------------------------------------- */
        
    //Object contructor allows you you to make new objects and define/fill them with values as you pas through the code

        // create the template the information will folow
        var bob = {
            name:'Bob',
            yearOfStart: 2005,
            jobTitle:'Web Guy',
        };

        // create a contructor the same as a variable
        // the constructor will be set to look at its self for the values used to calculated based on the values passed into it
        var Person = function(name, yearOfStart, jobTitle) {
            this.name = name;
            this.yearOfStart = yearOfStart;
            this.jobTitle = jobTitle;
        }

        // Once the constructor is set, you can the use it as a variable and add to it using 'prototype'
        Person.prototype.calcJobTime = function () {
            console.log(2019 - this.yearOfStart)
        }

        // once the constructor is done, you can then call the constructor/variable and pass your information into it
        // it will take the values and pass it through constructor making a new object and then run the objects values trhough it to generate the correct information.
        var bob = new Person ('BoB', 2005, 'Web guy');
        var jane = new Person ('Jane', 2008, 'Designer');
        var bill = new Person ('Bill', 2010, 'IT guy');

        bob.calcJobTime();
        jane.calcJobTime();
        bill.calcJobTime();

        // even though the object has not been define by hand... the constructor built the object for us
        console.log(jane)

/* --------------------------------------------- */
/* --------------------------------------------- */
/* ------------------- DOM --------------------- */
/* --------------------------------------------- */
/* --------------------------------------------- */


    // you can update html and css by editing the DOM

        /*

        <div id="start" class="blargness">hello how are you</div>

        */

        // how to select the html to edit based on a a ID
        var newVar = 34
        document.querySelector('#start').textContent = newVar;

        // or

        document.querySelector('#start').innerHTML = '<strong>The new text</strong>';

        // you can use the same selection method to add/edit css by placing inline css
        // note this time we are targeting a class
        document.querySelector('.blargness').style.background = '#cccccc';


        // you can add and remove clases
        document.querySelector('.blargness').classList.add('buttonThing');
        document.querySelector('.blargness').classList.remove('buttonThing');

        //you can also have a class add and remove its self by seeif if that class exisits and then do the oposite of its current state with toggle
        document.querySelector('.blargness').classList.toggle('active');

/* --------------------------------------------- */
/* --------------------------------------------- */
/* ------------ Events / listener -------------- */
/* --------------------------------------------- */
/* --------------------------------------------- */


    // this is how when you interact with elements on the page, you can get a reponse. the response is then what you want to happen
    // this is a sumer simple version, there are many events that you can monitor to do things.

        /*

        <div id="start" class="blargness buttonThing">click me</div>

        */

        // listener for click events

        function buttonFunction () {
            document.querySelector('.buttonThing').style.background = '#cccccc';
        }

        // this will call a function to exicute
        document.querySelector('.buttonThing').addEventListener('click', buttonFunction);

        // if you do not want to call a function, you can define that it does by its self.
        document.querySelector('.buttonThing').addEventListener('click', function() {
            document.querySelector('.buttonThing').style.background = '#cccccc';
         });































