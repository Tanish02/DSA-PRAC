// let abc = 100;
// var xyz = 200;
// console.log("abc :", abc, "xyz :", xyz);
// // output will be referenceError because we are logging it before declaring what it is ...

//==================

// // rest perameters example (...)
// function abc(a, ...b) {
//   console.log(b, typeof b);
// }
// abc(1, 2, 3, 4);

//=======================

// let arr = ["Tanish", 10, 500, "A", "300"];
// // sepeate character , numbers , string and log it

// let num = [];
// let str = [];
// let ch = [];

// arr.forEach((item) => {
//   if (typeof item === "number") {
//     num.push(item);
//   } else if (typeof item === "string") {
//     item.length > 1 ? str.push(item) : ch.push(item);
//   }
// });
// console.log(num, str, ch);
//==========================================================
//console.log([] == false);
// output will be true becaue of "==" it will trigger type conversion instead use "===" it will return false.
//  [] == false   → true
// [] === false  → false

//==========================================================
//console.log(typeof []);
// // output will be object and [] is truthy value
//==========================================================
// if ([]) {
//   console.log("runs");
// } // output will be runs
//===============================
//console.log([1, 2, 3] == "1,2,3");
// output will be true [1,2,3] == (convert) into string and it matches 1,2,3.
//================================
// let a = [];
// let b = [];

// console.log(a == b);   // false different stored memory
// console.log(a === b);  // false

//===========================

// let arr = ["tanish", "ash"];
// // check character present in 1st string
// let [str1, str2] = arr;
// let charSet = new Set(str1);
// let result = {};
// for (let char of str2) {
//   result[char] = charSet.has(char);
// }
// console.log(result);
//======================================

// console.log("tanish" + 100);
// in case of "tanish"+100 will contacinate and give tanish100.
// in case of "tanish"-100 will give error NaN.

//==============================
// let a = 100;
// let z = a++; // a++ first use then increment
// console.log(a + z);
// // a  = 100 , z =101 , a+z = a+z = 201

// let arr = [1,10,18,14,6]
// function abc(b, ...a) {
//     console.log(a)
// }
// abc(8,9,10,11,12)
// output will be 9,10,11,12
// 8 will goes in b and ...a will spread and create a new array

const arr = ["a", "1", "b", "2", "c", "3"];
// seprate them
