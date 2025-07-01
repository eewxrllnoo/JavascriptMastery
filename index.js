// console.log(`Hello`);
// console.log(`I love pizza!`);

// window.alert(`This is an alert!`);
// window.alert(`I like pizza!`);

//  document.getElementById("myH1").textContent = 'Hello';
//  document.getElementById("myP").textContent = 'I like pizza!';

// This is comment

/*
This 
is 
multi line
comment
*/

/********* How to accept JavaScript USER INPUT in 5 minutes 💬 **********/

// 1. Easy way = window prompt
// 2. Professional way =  HTML textbook

// let username;
// username = window.prompt("Whats your username?");

// let username;
// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("mytext").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`
// }

/********* Learn JavaScript TYPE CONVERSION in 5 minutes! 💱 **********/

// Type conversion = change the datatype of a value to another
// (strings, number, booleans)

// let age = window.prompt("How old are you?");
// age = Number(age);
// age+=1

// console.log(age, typeof age);

// let x = "0";
// let y = "0"
// let z = "0"

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

/********* Learn JS METHOD CHAINING in 5 minutes! ⛓ **********/
// Method Chaining = Calling one method after another in one continuous
// line of Code.

// ----- No Method Chaining -------

// let username = window.prompt("Enter your username: ");

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();
// username = letter + extraChars;

// console.log(username);

// // -----  Method Chaining -------
// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

// console.log(username);

/*********  Learn 2D ARRAYS in JavaScript in 6 minutes! ⬜ **********/

// 2D array = multi-dimensional array that stores a matrix of data
// in rows and columns. Useful for games, spreadsheets, or representing images

// [x, o, x]
// [o, x, o]
// [x, o, x]

// const matrix = [[1,2,3],
//                 [4,5,6],
//                 [7,8,9]];

// matrix[0][0] = 'x';
// matrix[0][1] = 'o';
// matrix[0][2] = 'x';

// matrix[1][0] = 'o';
// matrix[1][1] = 'x';
// matrix[1][2] = 'o';

// matrix[2][0] = 'x';
// matrix[2][1] = 'o';
// matrix[2][2] = 'x';

// for(let row of matrix) {
//     const rowString = row.join(' ');
//     console.log(rowString);
// }

/*********  JavaScript map() method in 7 minutes! 🗺️ **********/

// .map() = accepts a callback and applies that function to each element
//  of an array, then return a new array

// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map(square);
// const cubes = numbers.map(cube);

// console.log(squares);
// console.log(cubes);

// function square(element) {
//   return Math.pow(element, 2);
// }

// function cube(element) {
//   return Math.pow(element, 3);
// }

// another example

const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);

console.log(studentsUpper);
console.log(studentsLower);

function upperCase(element) {
  return element.toUpperCase();
}

function lowerCase(element) {
  return element.toLowerCase();
}

// another example

// const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
// const formattedDates = dates.map(formatDates);

// console.log(formattedDates);

// function formatDates(element) {
//   const parts = element.split("-");
//   return `${parts[1]}/${parts[2]}/${parts[0]}`;
// }

/*********  JavaScript ASYNC/AWAIT is easy! ⏳ **********/

/// Async/Await = Async = makes a function return a promise
//                        Await = makes an async function wait for a promise

// Allows you write asynchronous code in a synchronous manner
// Async doesn't have resolve or reject set up as parameters
// Everything after Await is placed in an event queue

// function walkDog(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const dogWalked = true;

//             if(dogWalked){
//                 resolve("You walk the dog 🐕");
//             }
//             else{
//                 reject("You DIDN'T walk the dog");
//             }
//         }, 1500);
//     });
// }

// function cleanKitchen(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const kitchenCleaned = true;

//             if(kitchenCleaned){
//                 resolve("You clean the kitchen 🧹");
//             }
//             else{
//                 reject("You DIDN'T clean the kitchen");
//             }
//         }, 2500);
//     });
// }

// function takeOutTrash(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const trashTakenOut = true;

//             if(trashTakenOut){
//                 resolve("You take out the trash ♻");
//             }
//             else{
//                 reject("You DIDN'T take out the trash");
//             }

//         }, 500);
//     });
// }

// async function doChores(){

//     try{
//         const walkDogResult = await walkDog();
//         console.log(walkDogResult);

//         const cleanKitchenResult = await cleanKitchen();
//         console.log(cleanKitchenResult);

//         const takeOutTrashResult = await takeOutTrash();
//         console.log(takeOutTrashResult);

//         console.log("You finsihed all the chores!");
//     }
//     catch(error){
//         console.error(error);
//     }
// }

// doChores();

/*********  Learn JavaScript CALLBACKS in 7 minutes! 🤙 **********/

// callback = a function that is passed as an argument
//            to another function.

// used to handle asynchronous operations:
//    1. Reading a file
//    2. Network requests
//    3. Interacting with databases

//"Hey, when you're done, call this next."

// hello(wait);

// function hello(callback){
//     console.log("Hello!");
//     callback();
// }

// function wait(){
//     console.log("Wait!");
// }
// function goodbye(){
//     console.log("Goodbye!");
// }

// // Sample #2

// sum(displayPage, 1, 2);

// function sum(callback, x, y){
//     let result = x + y;
//     callback(result);
// }

// function displayConsole(result){
//     console.log(result);
// }

// function displayPage(result){
//     document.getElementById("myH1").textContent = result;
// }

/*********  JavaScript forEach() method in 8 minutes! ➿ **********/

// forEach() = method used to iterate over the elements
//             of an array and apply a specified function (callback)
//             to each element

//             array.forEach(callback)
//             element, index, array are provided

// ------------- EXAMPLE 1 -------------

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(double);
// numbers.forEach(display);

// function double(element, index, array){
//     array[index] = element * 2;
// }

// function triple(element, index, array){
//     array[index] = element * 3;
// }

// function square(element, index, array){
//     array[index] = Math.pow(element, 2);
// }

// function cube(element, index, array){
//     array[index] = Math.pow(element, 3);
// }

// function display(element){
//     console.log(element);
// }

// // ------------- EXAMPLE 2 -------------

// let fruits = ["apple", "orange", "banana", "coconut"];

// fruits.forEach(capitalize);
// fruits.forEach(display);

// function upperCase(element, index, array){
//     array[index] = element.toUpperCase();
// }

// function lowercase(element, index, array){
//     array[index] = element.toLowerCase();
// }

// function capitalize(element, index, array){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }

/*
function display(element){
    console.log(element);
}
*/

/*********  JavaScript filter() method in 6 minutes! 🚰 **********/

// filter() = creates a new array by filtering out
//            elements with a callback

// ----------- EXAMPLE 1 -----------
// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let evenNums = numbers.filter(isEven);
// let oddNums = numbers.filter(isOdd);

// console.log(evenNums);

// function isEven(element){
//     return element % 2 === 0;
// }

// function isOdd(element){
//     return element % 2 !== 0;
// }

// ----------- EXAMPLE 2 -----------
// let ages = [16, 17, 17, 18, 19, 20, 65];
// let adults = ages.filter(isAdult);
// let children = ages.filter(isChild);

// console.log(children);

// function isAdult(element){
//     return element >= 18;
// }

// function isChild(element){
//     return element < 18;
// }

// // ----------- EXAMPLE 3 -----------
// const words = ["apple", "orange", "kiwi", "banana", "pomegranate", "coconut"];
// const longWords = words.filter(getLongWords);
// const shortWords = words.filter(getShortWords);
// const upperCases = words.map(upperCase);

// console.log(upperCases);

// function getShortWords(element) {
//   return element.length <= 6;
// }

// function getLongWords(element) {
//   return element.length > 6;
// }

// function upperCase(element) {
//   return element.toUpperCase();
// }
