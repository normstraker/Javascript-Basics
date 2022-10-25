// Array and for loop

const names = ["Walter", "Shirley", "Rick", "Vicki", "Jackie", "Pam", "Norm", "Jon"];
const lastName = "Straker";
let newArray = [];

// for loop
for (let i = 0; i < names.length; i++) {
  console.log(i);
  console.log(names[i]);
  // const fullName = `${names[i]} ${lastName}`;
  newArray.push(`${names[i]} ${lastName}`);
}

console.log(names);
console.log(newArray);
