// Erhan's Exercices: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45
// **************************************************************************

// **************************************************************************
// 3. Create a calculator
// Create a calculator that allows a user to send 2 numbers, the type of operation and return the result.

// Example:
// calculator(2, 10, "+"); // 12
// calculator(20, 3, "*"); // 60
// calculator(10, 0, "/") // Cannot divide by 0

// **************************************************************************

// let result;
// function calculator (number1, number2, operator) {
//     if (operator == "+") {
//         return result = number1 + number2;
//     }
//     else if (operator == "-") {
//         return result = number1 - number2;
//     }
//     else if (operator == "*") {
//         return result = number1 * number2;
//     }
//     else if (operator == "/" && number2 == 0) {
//         console.log("To divide by 0 is forbidden! GO CHECK THE OPERATOR MATH RULES!")
//     }
//     else {
//         return result = number1 / number2;
//     }
// }
// console.log(calculator(2, 10, "+"));
// console.log(calculator(20, 3, "*"));
// console.log(calculator(10, 0, "/"));
// console.log(calculator(10, 3, "/"));

// **************************************************************************
// **************************************************************************

// 6. myEach
// Define a myEach function that simulates the forEach method on Array.

// myEach should be a function that expects an array and a function.

// DO NOT USE forEach in the implementation.

// **************************************************************************

// let myArray = [1, 'hello', 2, 'world'];

// function myEach (myArray) {
//     for (i = 0; i < myArray.length; i++) {
//         console.log(myArray[i]);
//     }
// }
// console.log(myEach(myArray));

// **************************************************************************
// **************************************************************************
// @@@@@@@@@@@@@@@@@@@@@@@@ I SKIPPED THAT ONE @@@@@@@@@@@@@@@@@@@@@@@@
// 9. Merge
// <<merge>> takes two or more objects and returns one object 
// with all the properties of the objects passed. 
// If a property is in more than one object, 
// the object passed first should have priority.

// Example:

// merge({ a: 3, b: 2 }, { a: 2, c: 4 });                  // { a: 3, b: 2, c: 4 }
// merge({ a: 3, b: 2 }, { a: 2, c: 4 }, { e: 8, c: 5});   // { a: 3, b: 2, c: 4, e: 8 }

// **************************************************************************

// const array1 = [{ a: 3, b: 2 }, { a: 2, c: 4 }];
// let array2 = [{ a: 3, b: 2 }, { a: 2, c: 4 }, { e: 8, c: 5}];

// let merged = [];

// function merger ()

// // Array.prototype.push.apply(array1, array2);

// const merge = [...new Set(array1.map(item => item.group))];

// console.log(merge);
// -----------
// const data = [
//     { group: 'A', name: 'SD' }, 
//     { group: 'B', name: 'FI' }, 
//     { group: 'A', name: 'MM' },
//     { group: 'B', name: 'CO'}
//   ];
// const unique = [...new Set(data.map(item => item.group))]; // [ 'A', 'B']

// console.log(unique);
// **************************************************************************
// **************************************************************************

// 12. Word count
// Write a function to count the number of words. 
// We limit the number of words by 30, so if there is more, 
// please return an error message with the first 30 words.

// Example:
// wordCount("Perfection is achieved, not when there is nothing more to add, 
// but when there is nothing left to take away. - Antoine de Saint-Exupery"); // 24

// wordCount("Life is a series of natural and spontaneous changes. 
// Don't resist them; that only creates sorrow. Let reality be reality. 
// Let things flow naturally forward in whatever way they like. ― Lao Tzu")

// // ERROR: you wrote 33 words. We only can accept the following words: 
// "Life is a series of natural and spontaneous changes. 
// Don't resist them; that only creates sorrow. Let reality be reality. 
// Let things flow naturally forward in whatever way they like. ―"

// **************************************************************************

// function WordCount(str) { 
//     let counter = str.split(" ").length;
//     let emptyArray = [];
    
//     str.split(" ").forEach(word => {
//         if ( emptyArray.length < 30 ) {
//             emptyArray.push(word);
//         } 
//     } )

//     let acceptedWords = emptyArray.join(' ');

//     if (counter > 30) {
//         console.log(`Error: You wrote ${counter} words. We only can accept the following words: ${acceptedWords}`);
//     } else {
//         return str.split(" ").length;
//     }
// }

// console.log(WordCount("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint-Exupery"));
// console.log(WordCount("Life is a series of natural and spontaneous changes. Don't resist them; that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like. ― Lao Tzu"));

// **************************************************************************
// **************************************************************************

// 15. Print the Century!
// Create a function that takes in a year and returns the correct century.

// Example:

// century(999) // "10th century"
// century(1001) // "11th century"
// century(2005) // "21st century"

// **************************************************************************

// function century(year) {
//     return ( Math.ceil(year/100) + ". Century" );     
// }                            // actually I don't know the indication for 'th' or 'st' Number differentiation. 

// console.log(century(999));
// console.log(century(1001));
// console.log(century(2005));

// **************************************************************************
// **************************************************************************

// 18. Adding a Function to the String Prototype
// One of the fun parts of JavaScript is that you can extend all the standard 
// types by extending their prototype. In this challenge, you need to give 
// JavaScript Strings a swapCase() function, which will return a new string with 
// all upper case characters swapped for lower case characters, and vice versa. 
// Any non-alphabetic characters should be kept as they are.

// Example:

// "Hello".swapCase() // "hELLO"
// "aBcD".swapCase().swapCase() // "aBcD"

// **************************************************************************

// String.prototype.swapCase = function () {
//     var newString = '';
//     for (var i = 0; i < this.length; i++) {
//         var c = this[i];
//       newString += c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
//     }
//     return newString;
//   };

// console.log("Hello".swapCase());
// console.log("aBcD".swapCase().swapCase());

// **************************************************************************
// **************************************************************************

// 21. Help me finish my words …
// Write a function that will return if from few letters we can write the word expected. 
// The function will accept two parameters: the first one will be letters, 
// and the second one will be a complete word. From these letters, 
// you have to return if we can achieve to write the complete word or not.

// We expect the use of recursion.

// Example:
// wordHelper("bbece", "barbecue"); // True
// wordHelper("bbecce", "barbecue"); // False
// wordHelper("bdg", "butterfly"); // False

// **************************************************************************

let fewLetters;
let expectedWord;

function wordHelper (a, b) {


}

// **************************************************************************
// **************************************************************************
// Erhan: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45

// I skipped 9 for now.
// **************************************************************************
// **************************************************************************