// Arrays, Functions and Objects
// return
// default undefined, shorcuts, ignores after
// 1 inch = 2.54cm (inch * 2.54)

const wallHeight = 80;
const wallWidth = 100;

function calculate(value) {
  //   const newValue = value * 2.54;
  //  return newValue;
  //               or
  return value * 2.54;
}

// returns the result of the function to the const
const width = calculate(wallWidth);
const height = calculate(wallHeight);

// array is populated with the const's results
const dimensions = [width, height];
console.log(
  dimensions[0] + " is the width and " + dimensions[1] + " is the height."
);
console.log(
  `${dimensions[0]} is the width and ${dimensions[1]} is the height.`
);
