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
console.log(age)
person.name = "bob"
console.log(person.name);
console.log(person.siblings[2]);
// run the method
person.greeting();
