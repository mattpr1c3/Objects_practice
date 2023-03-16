let hobbit = {
    firstName: "Frodo",
    lastName: "Baggins",
    age: 51,
  };

// Dot notation

console.log(hobbit.firstName);
console.log(`${hobbit.firstName} ${hobbit.lastName} is ${hobbit.age} years old`);

//Square bracket notation

console.log(hobbit["firstName"]);
console.log(`${hobbit["firstName"]} ${hobbit["lastName"]} is ${hobbit["age"]} years old`);
