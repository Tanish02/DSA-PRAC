// swap there value without using third element
// let a = 2;
// let b = 3;
// a = a + b; // a =5
// b = a - b; //5-3 = 2
// a = a - b; // 5-2 = 3
// console.log("A", a, "B", b); // A 3 B 2

// //====== using destructur
// let a = 2;
// let b = 3;
// [a, b] = [b, a];
// console.log("A:", a, "B:", b);

//============================== print common elements
let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6, 7];
// // print the common elements
// let SetB = new set(b);
// let c = a.filter(value => setB.has(value));
let c = a.filter((value) => b.includes(value));
console.log(c);

// let a = [1,2,3,4,5]
// muliplication of numbers
// using reduce method
