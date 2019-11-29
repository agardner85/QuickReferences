/* --------------------------------------------- */
/* --------------------------------------------- */
/* -------------------  ES6  ------------------- */
/* --------------------------------------------- */
/* --------------------------------------------- */ 



/* --------------------------------------------- */
/* --------------------------------------------- */
/* ----------------  Variables  ---------------- */
/* --------------------------------------------- */
/* --------------------------------------------- */

    // Const = a constant value. once set can not be changed
    // Let = a var that will update

    const name = 'Andrew Gardner';
    let age = 35;
    console.log(name)
    console.log(age)

    // change the value of these variables
    // name = 'Andreeeeee Gardner'; // Will produce an error as it was already defined above
    age = 40;
    console.log(age)

    // the biggest thing to know how these new variable declerations is that they are only valid values for code that is in the same block of code.
    // if a functions declares a let or const inside a if statment else where, it can not been 'seen' or usedany where else but in that if statment

    function personDetails() {

        if (1 === 1) {
            const name2 = 'Andrew Gardner';
            let age2 = 35;
            console.log(name2+' | '+age2)
        }
        //console.log(name+' | '+age) // trying to call the value of the const/let variable outside of the block is was declared in will result in an error
    }
    personDetails()

    // becouse let and const are block scoped variables, you can reuse the same name to hold different values as long as they are not in the same block

/* --------------------------------------------- */
/* --------------------------------------------- */
/* ----------  Block restricted data  ---------- */
/* --------------------------------------------- */
/* --------------------------------------------- */

    let aNum = 55;
    for (let aNum = 0; aNum < 5; aNum++) {
        console.log(aNum+' | var name "aNum" defined inside the for loop');
    }
    console.log(aNum+' | var name "aNum" defined before the loop and if were a normal var would be set to the value on the line above from the loop');


    // this is a quick way to restrict data to a block with out using a function
    {
        const restrictedToThisBlock = 'you can read me';
        console.log(restrictedToThisBlock);
    }
    // console.log(restrictedToThisBlock); // trying to call the above const in the {} will display an error


/* --------------------------------------------- */
/* --------------------------------------------- */
/* -----------------  Strings  ----------------- */
/* --------------------------------------------- */
/* --------------------------------------------- */


    // you build string diferently... instead of ('hello' + fName + 'how are you today' + getdatenow)
    // you can now do the following
    
    // note that you use back ticks ` define the entirty of the string
    let fName = 'Andrew';
    const lName = 'Gardner';
    let trans = 'car';
    console.log(`${fName} ${lName} drives a ${trans} to work`);

    fName = 'Bob';
    trans = 'bike';
    let response = `${fName} ${lName} drives a ${trans} to work`;
    console.log(response);


    // you can look to see whaat and where characters are in the string.

    //does the string START with a desired character?
    console.log(response.startsWith('A')); // false
    console.log(response.startsWith('b')); // false
    // it is case sensative
    console.log(response.startsWith('B')); // true


    //does the string END with a desired character?
    console.log(response.endsWith('K')); // false
    console.log(response.endsWith('k')); // true


    //does the string contain a unique sequence of characters?
    console.log(response.includes('drives a car')); // false
    console.log(response.includes('drives a bike')); // true

    fName = "O\'Brian";
    response = `${fName} ${lName} drives a ${trans} to work`;
    console.log(response);
    console.log(response.includes('O Brian')); // false
    console.log(response.includes("O\'Brian")); // true

    // you can also repeat a variable as many times as you want
    console.log(`${fName}`.repeat(3));




























