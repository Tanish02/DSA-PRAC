// swap there value without using third element
// let a = 2;
// let b = 3;
// a = a + b; // a = 5
// b = a - b; // b=a-b = 5-3 = b=2
// a = a - b; // a=a-b = 5-2=3 = a=3
// console.log("A", a, "B", b); // A 3 B 2

//====== using destructur
let a = 2;
let b = 3;
[a, b] = [b, a];
console.log(a, b);
