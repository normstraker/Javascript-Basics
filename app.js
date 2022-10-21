// Conditional Statements Challenge

const person1 = {
  name: "nrom",
  age: 17,
  status: "tourist",
};

const person2 = {
  name: "shrilye",
  age: 55,
  status: "resident",
};

if (person1.age >= 18 && person1.status === "resident") {
  console.log("welcome to the usa");
} else {
  console.log("sorry, no entry");
}

if (person2.age >= 18 && person2.status === "resident") {
  console.log("welcome to the usa");
} else {
  console.log("sorry, no entry");
}
