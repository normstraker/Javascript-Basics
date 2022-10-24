// Strings Challenge #8

// function fullName(firstName, lastName) {
//   const fullName = `${firstName} ${lastName}`;
//   return fullName.toUpperCase();
// }

// console.log(fullName("Alexander", "Perambulathu"));

function fullName({ firstName, lastName }) {
  const fullName = `${firstName} ${lastName}`;
  return fullName.toUpperCase();
}

// order doesn't matter
console.log(fullName({ lastName: "Perambulathu", firstName: "Alexander" }));
