// Valid
// calcSum()

// Invalid due to definition being lower in an arrow function
// calcSum2()

// Has hoisting (being able to call the function before the definition)
function calcSum(x, y) {
  return x + y;
}

// Does not hoist
const calcSum2 = (x, y) => {
  return x + y;
};

// console.log(calcSum(2, 2)); // return 4

// This function takes in a "message" and then returns it
function welcomeMessage(message) {
  return message;
}

// By setting up welcomeMessage to take in any message, we can then create different versions for welcoming with their own messages
// Each of these variables then equal the return of using the welcomeMessage function with the string that is passed in.
const greeting = welcomeMessage("So nice to have you here! Welcome!");
const welcomeBack = welcomeMessage("Good to see you again!");
const sendOff = welcomeMessage("Sad to see you go!");

// console.log(greeting)
// console.log(welcomeBack)
// console.log(sendOff)

// CALLBACKS
function login(check) {
  // Function checks login
  // Function runs birthdayCheck with user info

  // This is using whatever function that is being passed into login, a callback
  check();
}

function birthdayCheck(userBirthday) {
  let today = new Date();
  if (today === userBirthday) {
    console.log("It's your birthday!");
  }
}

// The login function is being passed the birthdayCheck function to use inside of login
// login(birthdayCheck)

// When using a callback, you can pass in a function you write at that moment (an anonymous function)
// login(function (){
//     console.log("woot!")
// })

// ANONYMOUS FUNCTIONS
// This function takes in a string and an anonymous function (one that is defined at the call)
function getLength(str, anonFunc) {
  anonFunc(str);
}

// This version does a check to see how many letters the string has
// getLength('aleksandra', function (str) {
//   console.log(`${str} has ${str.length} letters.`);
// });

// => aleksandra has 10 letters.

// This version just returns the length of the string
// getLength('nick', function (str) {
//   console.log(str.length);
// });
// => 4

// OBJECTS & THIS
const user = {
  // Object use key-value pairs
  name: "julian",
  age: 31,
  // The value can be a function, a function that is apart of an object is a method
  getOlder: function () {
    // setTimeout lets you do something after a set amount of time
    setTimeout(() => {
      console.log(
        `INSIDE OF SETTIMEOUT: ${this.name} just had a birthday and is now ${this.age}`
      );
    }, 5000);
    // In the above code, the timeout is for 5 seconds as the setTimeout function uses milliseconds

    // By assigning our setInterval to a variable, we now have an ID for clearInterval later
    let aging = setInterval(() => {
      // By checking the age before the increase, we would need to add a return to not increase the age again on line 100
      // if (this.age >= 35){
      //     clearInterval(aging)
      //     return
      // }

      this.age++;
      console.log(this.age);

      // By checking the age after the increase, we implicitly return and will not enter another interval
      if (this.age >= 35) {
        clearInterval(aging);
      }
    }, 1000);

    // If we console log aging, we are able to see that it is an object that has all of the rules it needs to manage the intervals
    console.log(aging);
    setTimeout(() => {
      console.log(aging);
    }, 6000);

    console.log(
      `OUTSIDE OF SETTIMEOUT: ${this.name} just had a birthday and is now ${this.age}`
    );
  },
};

// To access a property of an object, you use dot notation user.name or user.age as an example
// let something = user.getOlder();
// console.log(something)

// ARGUMENTS
function printSomething() {
  // arguments is a reserved word for the values inside of the () of a function call
  console.log(arguments);
}

// When the function console logs arguments in this case, it will have an empty object cause nothing was passed into it
// printSomething();

// Even if a function does not expect a value passed to it, you can pass items to it
// printSomething("hi");
// printSomething("hi", 2, "somemthing");

// FOREACH
let names = ["julian", "michael", "seth"];
let ages = [31, 30, 29];

// names.forEach(name => console.log(name))
// ages.forEach(age => console.log(age*2))

// MAP
// Map lets you return something at the end unlike a forEach
let newAges = ages.map((age) => {
  if (age < 30) {
    return age + 1;
  }
  return age;
});
// console.log({ newAges });

let fetchedArticles = [
  {
    title: "Something",
    preview: "http://some.img",
    description:
      "Something, something... darkside... something, something... complete",
  },
  {
    title: "Something else",
    preview: "http://some.img",
    description:
      "Something, something... darkside... something, something... complete",
  },
  {
    title: "Something new",
    preview: "http://some.img",
    description:
      "Something, something... darkside... something, something... complete",
  },
  {
    title: "Done",
    preview: "http://some.img",
    description:
      "Something, something... darkside... something, something... complete",
  },
];

// When mapping, you can target just one element of an object like just grabbing the title
let articles = fetchedArticles.map((article) => {
  // console.log(article.title)
  return article.title;
});
// console.log(articles)

let errors = ["First error", "Second error", "Third error"];

// If we wanted to log to the user what errors they have, a forEach could be used since we don't need something returned at the end.
// errors.forEach(error => {
//     console.log(`Hey! This just happened: ${error}`)
// })

const cities = [
  "miami",
  "barcelona",
  "madrid",
  "amsterdam",
  "berlin",
  "sao paulo",
  "lisbon",
  "mexico city",
  "paris",
];

// Return a list of all cities with the names capitalized
const capitalizedCities = cities.map((city) => {
  // Spilts the string into the separate words that make up the city name
  let parts = city.split(" ");

  // Map through the separate words of the city name
  const capitalizedCity = parts
    .map((part) => {
      let firstLetter = part.slice(0, 1).toUpperCase();

      return `${firstLetter}${part.slice(1, part.length)}`;
    })
    .join(" ");

  return capitalizedCity;
});

// console.log(capitalizedCities)

/**
 * "mexico city"
 * perform split
 * ["mexico", "city"]
 * map over it
 * "mexico"
 * slice first letter
 * m
 * uppercase that letter
 * M
 * return the capitalized letter and the rest of the word
 * Mexico
 * "city"
 * slice first letter
 * c
 * uppercase that letter
 * C
 * return the capitalized letter and the rest of the word
 * City
 * capitalizedCity = ["Mexico", "City"]
 * join the values together
 * capitalizedCity = "Mexico City"
 *
 */

// REDUCE
// Reduce boils down an array to one value
const numbers = [4, 3, 5, 2, 1, 5];

// const total = numbers.reduce(function (accumulator, currentValue) {
//   console.log(
//     "accumulator is: ",
//     accumulator,
//     "and current value is: ",
//     currentValue
//   );
//   return accumulator + currentValue;
// });

const total = numbers.reduce(function (accumulator, currentValue) {
  //   console.log(
  //     "accumulator is: ",
  //     accumulator,
  //     "and current value is: ",
  //     currentValue
  //   );
  return accumulator * currentValue;
});

// console.log("total is: ", total);
// Reducing always needs an accumulator variable and a currentValue variable often writen as the following
let rating = numbers.reduce((acc, curr) => acc + curr) / numbers.length;
// console.log({rating})

// FILTER
// Filter returns a version of the array that meets a certain condition
const people = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 20 },
  { name: "Nettie", age: 21 },
  { name: "Stuart", age: 17 },
  { name: "Bill", age: 19 },
];

// Return a list of people of drinking age
const ofAge = people.filter((person) => (person.age >= 21 ? person : null));
// console.log({ofAge})

// SORT
const otherNumbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

// By default, sort orders things based on unicode values
otherNumbers.sort();
console.log(otherNumbers);

function compare(a, b) {
  if (a < b) return -1; // a is less than b
  if (a > b) return 1; // a is greater than b
  if (a === b) return 0; // a equals b
}

// You can pass a function to the sort method that allows you to choose how it will be sorted
// This example is now going to sort the elements by their value so the numbers would sort properly instead of as strings
otherNumbers.sort(compare);
console.log(otherNumbers);
