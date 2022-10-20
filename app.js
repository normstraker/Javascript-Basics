// Arrays, Functions and Objects
// expressions - another way to define a function
// create a variable, assign to a FUNCTION (not value), use var
// diff - hoisting, use - arrow func, libraries

// function definition/declaration
function addValues(num1, num2) {
  return num1 + num2;
}

const firstValue = addValues(3, 4);
const secondValue = addValues(12, 34);

// function expression (you can omit (or keep) the name "addValues" since the value is now in the const "add") - anonomous function
const add = function (num1, num2) {
  return num1 + num2;
};

// const thirdValue = add(5, 6);
const values = [firstValue, secondValue, add(5, 6)];
console.log(values);

// arrow function (only as an expression)
const multiply = (num1, num2) => num1 * num2