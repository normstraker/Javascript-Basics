# Javascript Basics

- course content lessons by heading (Javascript Tutorial and Projects Course 2022 - Udemy - J.Smilga)

## Contents

[Inline Javascript](#inline-javascript)  
[Internal Javascript](#internal-javascript)  
[Helper Methods](#helper-methods)  
[Variables](#variables)  
[Variables Challenge](#variables-challenge)  
[String Concatenation](#string-concatenation)  
[String Concatenation Challenge](#string-concatenation-challenge)  
[Numbers Challenge](#numbers-challenge)  
[Data types](#data-types)  
[Arrays](#arrays)  
[Arrays Challenge](#arrays-challenge)  
[Function - declare, invoke](#functions---declare-invoke)  
[Functions - Parameters, Arguments](#functions---parameters-arguments)  
[Functions - Return](#functions---return)  
[Functions - Expressions](#functions---expressions)  
[Function Challenge](#function-challenge)  
[Objects](#objects)  
[Object Challenge](#object-challenge)  
[Conditional Statements](#conditional-statements)  
[Equality](#equality)  
[Logical Operators](#logical-operators)  
[Switch Statement](#switch-statement)  
[Conditional Statements Challenge](#conditional-statements-challenge)  
[While Loops](#while-loops)  
[Do While Loops](#do-while-loops)  
[For Loop](#for-loop)  
[String Properties and Methods](#string-properties-and-methods)  
[Template Literals](#template-literals)  
[Strings Challenge](#strings-challenge)  
[Array Properties and Methods](#array-properties-and-methods)

## Inline Javascript

`<button onclick="alert('hello world')">Click Me!</button>` [ ▲](#contents)

## Internal Javascript

`<script> document.querySelectorAll('.btn').forEach((item) => { item.addEventListener('click', () => { alert('this is an alert') }) }) </script>`[ ▲](#contents)

## Helper Methods

`document.write('hello world');`  
`alert('hello world');`  
`console.log('hello world')`[ ▲](#contents)

## Variables

- Variable - Most basic building block
- alert('hello world');
- Variables - Store, access, modify === value
- console.log('hello world')
- Declare, assignment operator, assign value
- assign value later, modify existing
- can contain digits, letters, underscore, $
- must start with a letter, $ or \_
- cannot use keywords as variables
- cannot start with a number
- case sensitive - fullname vs Fullname
- camelCase or underscore (full_name)
- using const (CONSTANT) - can't be reassigned
- cannot assign a const without a value as you
  can with let

`let name = "norm";`  
`let address, zip, state, city;`  
`address = "101 main street"`  
`zip = "76777"`  
`city = "Saginaw"`  
`state = "MI"`  
`console.log(name, address, city, state, zip)`[ ▲](#contents)

## Variables Challenge

1. create "firstName" and "last_name" variables
2. assign your values
3. create "address" variable and assign "main street" value to it
4. reassign address to "first street" later
5. log all values in the console

`let firstName, last_name;`  
`firstName = "nrom";`  
`last_name = "strekar";`  
`let address = "main street";`  
`address = "first street";`  
`console.log(firstName, last_name, address);`[ ▲](#contents)

## String Concatenation

// String Concatenation - combine string values  
// `` - backticks (template strings) easier option

`const name = "john";`  
`const lastName = "shakeandbake";`  
`let fullName = name + " " + lastName + ".";`  
`console.log("Hello there my full name is: " + fullName);`  
`const website = "youTube";`  
`const url = "https://www." + website + ".com";`  
`console.log(url);`[ ▲](#contents)

## String Concatenation Challenge

Concatenate Strings #2

1. create "street" and "country" variables
2. assign your values
3. create "fullMailingAddress" variable and assign the result of "street + country"
4. remember about the space
5. log "fullMailingAddress" in the console
   \*/

`const street = "101 main street";`  
`const country = "russia";`  
`const fullMailingAddress = street + " " + country;`  
`console.log(fullMailingAddress);`[ ▲](#contents)

## Numbers Challenge

// Numbers #3 Challenges

// const score1 = 20;  
// const score2 = 30;  
// const score3 = 49;

// let totalScore, averageScore;  
// totalScore = score1 + score2 + score3;  
// averageScore = (totalScore)/3;

// console.log(totalScore, averageScore)

`const plates = 20;`  
`const people = 7;`  
`let remainingPlates = (plates % people);`  
`remainingPlates++;`  
`const message = There are ${remainingPlates} plates available.;`  
`console.log(message);`[ ▲](#contents)

## Data types

// Data Types - 7 total  
// Primitive - String, Number, Boolean, Null, Undefined, Symbol  
// Object - Arrays, Functions, Objects

// typeof - operator (typeof variable) (typeof value)

// String  
// const text = "some text";  
// Number  
// const numberEx = 45;  
// Boolean  
// let value1 = true;  
// let value2 = false;  
// Null  
// const result = null;  
// Undefined  
// let name;  
// Symbol(ES6)

`console.log(typeof text);`  
`console.log(typeof "some text");`  
`console.log(typeof numberEx);`  
`console.log(typeof 45);`  
`console.log(typeof value1);`  
`console.log(typeof value2);`  
// typeof null returns object - this is wrong - a bug in js - should return null
`console.log(typeof result);`  
`console.log(typeof name);`[ ▲](#contents)

## Arrays

// Arrays, Functions and Objects  
// Arrays = [], 0 index based

`const friend1 = "anna";`  
`const friend2 = "bob";`  
`const friend3 = "carla";`  
`const friend4 = "david";`

`const friends = ["john", "peter", "bob", "susie", 45, undefined, null];`

`let bestFriend = friends[3];`  
`friends[4] = "anna";`  
`console.log(friends[4]);`  
`console.log(friends);`  
`console.log(friends[0]);`  
`console.log(bestFriend);`[ ▲](#contents)

## Arrays challenge

// Arrays Challenge #4

`const fruits = ['apple', 'banana', 'coconut', 'date', 45]`  
`const firstFruit = fruits[0]`  
`fruits[4] = 'fig'`  
`console.log(firstFruit, fruits)`[ ▲](#contents)

## Functions - declare, invoke

// Arrays, Functions and Objects  
// Functions - declace, invoke

// function declaration  
`function hello() {`  
 `console.log("Hello There Bob");`  
 `console.log("Hello There Anna");`  
 `console.log("Hello There Susie");`  
`}`

// function invocation  
`hello();`

// some code here....  
`hello();`

// some code here....  
`hello();`

// some code here....[ ▲](#contents)

## Functions - Parameters, Arguments

// Arrays, Functions and Objects  
// params - when declare/define  
// placeholders, local vars  
// arguments - when invoke/call/run  
// use var/values, multiple params, undefined  
// local variables - only used within the function

`function greet(name) {`  
`console.log(Hello there ${name}!);`  
`}`

`greet("Jonathan");`  
`greet("Mattia");`  
`greet("Perambulathu");`[ ▲](#contents)

## Functions - Return

// Arrays, Functions and Objects  
// return  
// default undefined, shorcuts, ignores after  
// 1 inch = 2.54cm (inch \* 2.54)

`const wallHeight = 80;`  
`const wallWidth = 100;`

`function calculate(value) {`  
 // const newValue = value _ 2.54;  
 // return newValue;  
 // or  
 `return value _ 2.54;` `}`

// returns the result of the function to the const  
`const width = calculate(wallWidth);`  
`const height = calculate(wallHeight);`

// array is populated with the const's results  
`const dimensions = [width, height];`  
`console.log(`  
 ` dimensions[0] + " is the width and " + dimensions[1] + " is the height.");`  
`console.log(${dimensions[0]} is the width and ${dimensions[1]} is the height.);`[ ▲](#contents)

## Functions - Expressions

// Arrays, Functions and Objects  
// expressions - another way to define a function  
// create a variable, assign to a FUNCTION (not value), use var  
// diff - hoisting, use - arrow func, libraries

// function definition/declaration  
`function addValues(num1, num2) {`  
 ` return num1 + num2;`  
`}`

`const firstValue = addValues(3, 4);`  
`const secondValue = addValues(12, 34);`

// function expression (you can omit (or keep) the name "addValues" since the value is now in the const "add") - anonomous function  
`const add = function (num1, num2) {`  
 ` return num1 + num2;`  
`};`

// const thirdValue = add(5, 6);  
`const values = [firstValue, secondValue, add(5, 6)];`  
`console.log(values);`

// arrow function (only as an expression)  
`const multiply = (num1, num2) => num1 * num2`[ ▲](#contents)

## Function Challenge

// Functions #5 Challenge

// function calculateTotal(subTotal, tax) {  
// return subTotal + tax;  
// }  
// console.log(calculateTotal(200, 20));

// Refactored;  
`const calculateTotal = function (subTotal, tax) {`  
 `return subTotal + tax;`  
`};`

`const order1 = calculateTotal(100, 10);`  
`const order2 = calculateTotal(50, 5);`  
`const order3 = calculateTotal(25, 5);`

`console.log(order1, order2, order3);`[ ▲](#contents)

## Objects

// Arrays, Functions and Objects  
// Objects - key/value pairs methods (when a function is a value in an object)  
// dot notation

// creating an object  
`const person = {`  
 `name: "john",`  
 `lastName: "peters",`  
 `age: 40,`  
 `education: false,`  
 `married: true,`  
 `siblings: ["anna", "susan", "peter"],`  
 // common way to add method to object (no function word)  
 // greeting(){}  
 `greeting: function () {`  
 `console.log("hello my name is JOHN");`  
 `},`  
`};`

`const age = person.age;`  
`console.log(age)`  
`person.name = "bob"`  
`console.log(person.name);`  
`console.log(person.siblings[2]);`  
// run the method  
`person.greeting();`[ ▲](#contents)

## Object Challenge

// Object Challenge

`const car = {`  
 `make: "Honda",`  
 `model: "Accord",`  
 `year: 2017,`  
 `colors: ["white", "tan", "black"],`  
 `hybrid: false,`  
 `drive() {`  
 `console.log("smooth drive with lots of power");`  
 `},`  
 `stop() {`  
 `console.log("advanced braking");`  
 `},`  
`};`  
`console.log(car.make);`  
`console.log(car.colors[0]);`  
`car.drive();`  
`car.stop();`[ ▲](#contents)

## Conditional Statements

// Conditional Statements  
// Comparison Operators  
// >, <, >=, <=, ==, ===, !=, !===  
// else if and !

// =============================  
// const value = 2 > 1;  
// console.log(typeof value)  
// const value2 = false;  
// if(value){ // if value is true  
// console.log('hello wolrd')  
// } else { // if value is false  
// console.log('hello peolpe')  
// }  
// =============================

`const num1 = 6;`  
`const num2 = 6;`  
`const result = num1 >= num2;`

`const value = false`

`if(!value){`  
 `console.log('value is false')`  
`}`

// if (num1 > num2) {  
// console.log("first number is larger than second number");  
// } else if (result) {  
// // num1 >= num2  
// console.log("first number is equal to second number");  
// } else {  
// console.log("second number is larger than first number");  
// }[ ▲](#contents)

## Equality

// Comparison Operators  
// >, <, >=, <=, ==, ===, !=, !===  
// else if and !  
// = is for assignment only  
// == checks only value  
// === check value and type

`const num1 = 6`  
`const num2 = '6';`

`const value = num1 != num2;`  
`const value2 = num1 !== num2;`

`console.log(value);`  
`console.log(value2);`[ ▲](#contents)

## Logical Operators

// Logical Operators  
// (|| - OR), (&& - AND), !

`const name = "bob";`  
`const age = 23;`

`if(name === "bob" && age !== 24){`  
 `console.log('hello there user')`  
`} else {`  
 `console.log('wrong values')`  
`}`[ ▲](#contents)

## Switch Statement

// Switch  
// dice values: 1 - 6

`const dice = 4;`

`switch (dice) {`  
`case 1:`  
`console.log("you got one");`  
` break;`  
` case 2:`  
` console.log("you got two");`  
` break;`  
` case 3:`  
` console.log("you got three");`  
` break;`  
` case 4:`  
` console.log("you got four");`  
` break;`  
` case 5:`  
` console.log("you got five");`  
` break;`  
` case 6:`  
` console.log("you got six");`  
` break;`  
` default:`  
` console.log("you did not roll the dice");`  
`}`

// else if  
// if (dice === 1) {  
// console.log("you got one");  
// } else if (dice === 2) {  
// console.log("you got two");  
// } else {  
// console.log("you did not roll the dice");  
// }

// all if  
// if (dice === 1) {  
// console.log('you got one')  
// }  
// if (dice === 2) {  
// console.log('you got two')  
// }  
// if (dice < 1 || dice >6) {  
// console.log('you did not roll the dice')  
// }[ ▲](#contents)

## Conditional Statements Challenge

// Conditional Statements Challenge

`const person1 = {`  
 `name: "nrom",`  
 `age: 17,`  
 `status: "tourist",`  
`};`

`const person2 = {`  
 `name: "shrilye",`  
 `age: 55,`  
 `status: "resident",`  
`};`[ ▲](#contents)

## While Loops

// Loops  
// repeatedly run a block of code while the condition is met or true  
// while loop  
// TURN OFF AUTOSAVE

`let amount = 10;`

`while (amount > 0) {`  
 ` console.log(I have ${amount} dollars and I'm going to the mall);`  
 ` amount--;`[ ▲](#contents)

## Do While Loops

// Loops  
// repeatedly run a block of code while the condition is met or true  
// code block first, condition second  
// runs at least  
// TURN OFF AUTOSAVE

// let money = 12;  
`let money = 0;`

`do {`  
` console.log(`You have ${money} dollars`);`  
` money++;`  
`} while (money < 10);`[ ▲](#contents)

## For Loop

// Loops  
// repeatedly run a block of code while the condition is met or true  
// for loop

// let i;  
// for (i = 0; i < 10; i++) {  
// console.log(`and the number is: ${i}`);  
// }

`for (number = 11; number >= 0; number--) {`  
 ` console.log(and the number is: ${number});`  
`}`[ ▲](#contents)

## String Properties and Methods

// String properties and methods  
// wrapper String Object, don't memoize methods

`let text = " Peter Jordan";`  
`let result = text.length;`  
`console.log(result);`

`console.log(text.length);`  
`console.log(text.toLowerCase());`  
`console.log(text.toUpperCase());`  
`console.log(text.charAt(0));`  
`console.log(text.charAt(12));`  
`console.log(text.charAt(text.length - 1));`  
`console.log(text.charAt(result - 1));`  
`console.log(text.indexOf("e"));`  
`console.log(text.trim());`  
`console.log(text.trim().toLowerCase().startsWith("peter"));`  
`console.log(text.includes("eter"));`  
`console.log(text.slice(0, 4));`  
`console.log(text.slice(-4));`

// const person = {  
// name: "peter", // property  
// greeting() {  
// // method  
// console.log("Hey, I'm Peter");  
// },  
// };

// console.log(person);

// console.log(person.name);  
// person.greeting();[ ▲](#contents)

## Template Literals
// Template Literals - ES6+  
// Backtick characters `` - above tab key  
// Interpolation ${} - insert expression(value)  

`const name = 'john'`  
`const age = 25`  
`const sentence = "Hey it's " + name + ' and he is ' + age + " years old."`  
`const newSentence = Hey it's ${name} and he is ${age} years old and ${4 + 4} is my brother's age.`  

`console.log(sentence)`  
`console.log(newSentence)`[ ▲](#contents)

## Strings Challenge
// Strings Challenge #8  

// function fullName(firstName, lastName) {  
//   const fullName = ${firstName} ${lastName};  
//   return fullName.toUpperCase();  
// }  

// console.log(fullName("Alexander", "Perambulathu"));  

`function fullName({ firstName, lastName }) {`  
 ` const fullName = ${firstName} ${lastName};`  
 ` return fullName.toUpperCase();`  
`}`  

// order doesn't matter  
`console.log(fullName({ lastName: "Perambulathu", firstName: "Alexander" }));`[ ▲](#contents)

## Array Properties and Methods
// Array Properties and Methods  
`let names = ["john", "bobo", "barry", "olga", "ben"];`  

// length  
`console.log(names.length);`  
`console.log(names[names.length - 1]);`  

// concat  
`const lastNames = ["pepper", "onion", "banana"];`  
`const allNames = names.concat(lastNames);`  
`console.log(allNames);`  
// reverse  
`console.log(allNames.reverse());`  
// unshift  
`allNames.unshift("susy");`  
`console.log(allNames);`  
// shift  
`allNames.shift()`  
`console.log(allNames)`  
// push  
`allNames.push('susy')`  
`console.log(allNames)`  
// pop  
`allNames.pop()`  
`console.log(allNames)`  
// slice - mutates the original array  
`allNames.splice(2, 1)`  
`console.log(allNames)`[ ▲](#contents)