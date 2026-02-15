/// =====================================LOGIC===============================================
// let str = "Tanish kumar sharma"; // default string
// // 1st split default string
// // use .map for record character location
// let str1 = str.split("").reverse("").join(""); // join characters into words
// // join again for words to join into sentence
// console.log(str1);
//
// logic order <=====> string → split->(convert into array)→ map → modify elements -> print

//===========================================================================================
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
// let str = "my name is tanish";
// let str1 = str.split(" ");
// let str2 = str1.map((str1) => str1.split("").reverse().join(""));
// let str3 = str2.join(" ");
// console.log(str3);

// let str = "tanish is my name";
// let str1 = str.split(" "); // str split and convert into array
// let str2 = str1.map((str1) => str1.split("").reverse("").join("")); // str1 mapping & split then reverse and join
// var str3 = str2.join(" ");
// console.log("Result :", str3);

let str = "My name is Tanish";
let str1 = str.split(" ");
// console.log(str1);
let str2 = str1.map((str1) => str1.split("").reverse("").join(""));
// console.log(str2);
let str3 = str2.join(" ");
console.log(str3);
