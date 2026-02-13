// reverse a string  ["Tanish"]
// const arr = ["Tanish"];
// let str = arr[0].split("").reverse().join("");
// console.log("Result :", str);

// reverse a string "Tanish"
// const arr = "Tanish Sharma";
// let str = arr.split("").reverse().join("");
// console.log("Result :", str);

// const arr = "My name is Tanish";
// // yM eman si hsinaT
// let str = arr.split("").reverse().join("");
// console.log(arr); // My name is Tanish
// console.log(str); // hsinaT si eman yM

let str = "My name is Tanish"; // yM eman si hsinaT
let words = str.split(" ");
let reversed = words.map((words) => words.split("").reverse().join(""));
let result = reversed.join(" ");
console.log(result);
