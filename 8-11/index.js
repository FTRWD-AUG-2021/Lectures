// Var's are global
// var name = "Julian"

// Let is scoped 
let location = "Miami"

// Const is constant
const status = "alive"

// camelCase
let isThisAwesome = true

// kabob-case

// This will be used to load user names
var username = "julian"

//          function name 
// |        |
function sayBye(username) {
    //           |
    //          pararameter variables (props)
    console.log(`Bye ${username}`)
    if (username == "julian" || username === "John") {
        username = "Michael"
    }
    console.log(`Bye ${username}`)
}

const sayHello = (username) => {
    console.log(`Hello ${username}`)
}

// console.log(sayBye(username))
// username = "John"
// console.log(sayBye(username))
// console.log(sayBye(username))
// console.log(sayHello(username))
// console.log(username)

// Number
let one = 1
// String
let anotherOne = "1"

// console.log(typeof(one))
// console.log(typeof(anotherOne))
// console.log(one !== anotherOne ? true : false)

let hasDog = true;

// console.log(!hasDog)

let isCool;


// Loops

// For Loop
let array = "Lunch Time!"
//      iterator         condition         incrementor
//          |               |               |
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);   
}

// While Loop
let test = array.length - 1;

while (test >= 0) {
  console.log(array[test]);
  test--;
}


// 2.1. Depending on which name is longer, print:

/**
 * We need a function 
 * that is going to take in two names
 *  print message
 * When driver is longer
 // - The driver has the longest name, it has XX characters. or
 * When navigator is longer
 // - It seems that the navigator has the longest name, it has XX characters. or
 * When they are equal
 // - Wow, you both have equally long names, XX characters!. 
 * 
 * 
 */

const longerName = (firstPerson, secondPerson) => {
    if (firstPerson === secondPerson) {
        return `Wow, you both have equally long names, ${firstPerson.length - 1} characters!.`
    }
    
    if (firstPerson.length - 1 > secondPerson.length - 1){
        return "The driver has the longest name, it has " + firstPerson + "characters.";
    } else {
        return "It seems that the navigator has the longest name, it has XX characters.";
    }

}