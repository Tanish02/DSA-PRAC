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

//
let str = "my name is tanish";
let str1 = str.split(" ");
let str2 = str1.map((str1) => str1.split("").reverse().join(""));
let str3 = str2.join(" ");
console.log(str3);
