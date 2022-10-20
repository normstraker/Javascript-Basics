// Arrays, Functions and Objects
// Objects - key/value pairs  methods (when a function is a value in an object)
// dot notation

// creating an object
const person = {
  name: "john",
  lastName: "peters",
  age: 40,
  education: false,
  married: true,
  siblings: ["anna", "susan", "peter"],
  // common way to add method to object (no function word)
  // greeting(){}
  greeting: function () {
    console.log("hello my name is JOHN");
  },
};

const age = person.age;
console.log(age);
person.name = "bob";
console.log(person.name);
console.log(person.siblings[2]);
// run the method
person.greeting();

// Object Challenge

const car = {
  make: "Honda",
  model: "Accord",
  year: 2017,
  colors: ["white", "tan", "black"],
  hybrid: false,
  drive() {
    console.log("smooth drive with lots of power");
  },
  stop() {
    console.log("advanced braking");
  },
};
console.log(car.make);
console.log(car.colors[0]);
car.drive();
car.stop();