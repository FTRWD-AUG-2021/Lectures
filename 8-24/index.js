// getElementById allows you to target an element in the DOM by passing a string of the id
// const cat = document.getElementById("cat")
// console.log(cat)

// Once saved as a variable, you can then target different attributes and make changes
// cat.innerHTML = cat.innerHTML + "<span>Wow</span>";
// cat.innerText = cat.innerText + 'I am a cat!'

// When updating a css property, use a string
// cat.style.color = 'blue'

// When targeting a css property that would be written with -'s, use camelCase
// cat.style.backgroundColor = 'green'

// You can use a variable to store a desired value however that variable will still need to be a string for it to properly apply
// let blueText = '#0000F4'
// cat.style.color = blueText

// getElementsByClassName will give you an HTML Collection which is similar to an array but does not have all of the methods attached
// i.e. map, filter, reduce, sort...
// const mice = document.getElementsByClassName('mouse')

// In order to get all of the array methods, create a new array to store all of the values of the HTML Collection
// const miceArray = [...mice]

// console.log(mice) // Returns an HTML Collection
// console.log(miceArray)// Returns an array

let paragraph = document.getElementById("paragraph");

// let paragraphAttributes = paragraph.getAttribute('');
// console.log(paragraphAttributes)

// setAttribute replaces the attribute being targeted with a value
// paragraph.setAttribute('class', 'redText')
//                          ^           ^
//                   html attribute     new value

console.log(paragraph);
setInterval(() => {
  // getAttribute returns the values that are associated with that attribute
  let classes = paragraph.getAttribute("class") || "";
  //                                      ^     ^   ^
  //             attribute we are targeting    OR  an empty string if we don't get a value out of the call to getAttribute

  // classes.includes("redText")
  //   ? paragraph.removeAttribute("class", "redText")
  //   : paragraph.setAttribute("class", `${classes} redText`);

  //   The ternary above is doing the same as the text below
  if (classes.includes("redText")) {
    paragraph.removeAttribute("class");
  } else {
    paragraph.setAttribute("class", `${classes} redText`);
    //                                        ^
    //                       The value being assigned here is 
  }

  console.log(classes);
}, 500);

// Creating an element constructs the element in JavaScript but does not put it into the DOM (the visual space we see)
let h2Tag = document.createElement("h2");
h2Tag.innerHTML = "Elephant";

let parent = document.getElementsByTagName("body")[0];
// Using appendChild is like pushing an element into an array, meaning it will place it at the bottom of the section that you target
parent.appendChild(h2Tag);

setTimeout(() => {
  parent.removeChild(h2Tag);
}, 1000);

