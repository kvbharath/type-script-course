// const userName = "Bharath";

// let age = 30;

// age = 29;
// var result;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   var isOld = true;
// }

// console.log(isOld);

// const add = (a: number, b: number = 1) => a + b;

// const printOutput: (a: number | string) => void = (output: string | number) => {
//   console.log(output);
// };

// const button = document.querySelector("button");

// if (button) {
//   button.addEventListener("click", (event) => {
//     console.log(event);
//   });
// }

// printOutput(add(5));

// const hobbies = ["Sports", "Cooking"];
// const activeHobbies = ["Hiking"];

// activeHobbies.push(...hobbies);

// // console.log(hobbies[0], hobbies[1]);

// const person = {
//   firstName: "Bharath",
//   age: 24,
// };

// const copiedPerson = { ...person };

// const add = (...numbers: number[]) => {
//   return numbers.reduce((curResult, curValue) => {
//     return curResult + curValue;
//   }, 0);
// };

// const addNumbers = add(5, 10, 2, 3.7);
// console.log(addNumbers);

// const [hobby1, hobby2, ...remainingHobbies] = hobbies;

// console.log(hobbies, hobby1, hobby2);

// const { firstName: userName, age } = person;

// console.log(userName, age, person);

class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
  describe() {
    console.log("Department: " + this.name);
  }
}

const accounting = new Department("Accounting");

accounting.describe();
