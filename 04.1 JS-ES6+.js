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

    let aNum = 55;
    for (let aNum = 0; aNum < 5; aNum++) {
        console.log(aNum+' | var name "aNum" defined inside the for loop');
    }
    console.log(aNum+' | var name "aNum" defined before the loop and if were a normal var would be set to the value on the line above from the loop');
