// small concepts

// Problem : try to change [n to r] from "Tanish"
// let ab = "Tanish";
// ab[2] = "r";
// console.log(ab); // Tanish = string is immutable
//=============================
// 1 approach using slicing
// let ab = "Tanish";
// ab = ab.slice(0, 2) + "r" + ab.slice(3);
// console.log(ab);
// // Tanish = Tarish

// // 2 approach converting string to array
let ab = "Tanish".split("");
ab[2] = "r";
ab = ab.join("");
console.log("Output :", ab);
//// Tanish = Tarish

// const abc = {
//   x: 1,
// };
// const xyz = abc;
// xyz.x = 2;

// console.log(abc.x);

// // output is 2 x is reassign
