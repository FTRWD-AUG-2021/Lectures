sayHello("Michael");
let games = ["Dark Souls", "Sekiro", "CyberPunk 2077"];
console.log(games[games.length - 1].split("7"));
// console.log(games)

let phoneNumber = "305-123-4567";
console.log(phoneNumber.split("-").join(" "));
// games.push("Overwatch");
// console.log(games)

// games.unshift("Call of Duty");
// console.log(games)

// console.log(games[0][0])

let ages = [31, 28, 42, 52];
console.log(ages);

let newAges = [];
//
ages.forEach((age) => {
  if (age !== 42) {
    newAges.push(age);
  } else {
    newAges.push(age + 1);
  }
});
console.log(newAges);

let student = {
  firstName: "Craig",
  lastName: "Anderson",
  subject: "Web Dev",
};

console.log(student);
student.location = "Remote";
console.log(student);

console.log(`Hello ${student.firstName}, how are you?`);

// Available at any time
function sayHello(name) {
  console.log("Hello" + (name !== undefined ? ` ${name}` : ""));
}
// Available after definition
// const hello = (name) => {
//   console.log("Hello" + (name !== undefined ? ` ${name}` : ""));
// }
sayHello();

// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

const isLonger = (driver, navigator) => {
    if (driver.length === navigator.length){
        return "Wow, you both have equally long names, XX characters!";
    }

    if (driver.length > navigator.length) {
      return "The driver has the longest name, it has XX characters.";  
    } else {
      return "It seems that the navigator has the longest name, it has XX characters.";  
    }
}

console.log(isLonger("John", "Joe"))