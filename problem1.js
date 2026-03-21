// 1 Input: "aBcD"
// Output: "AbCd"
// 2 Input: "taNISH"
// Output:
// Uppercase: 4
// Lowercase: 2
//3  Input: "aB1@cD"
// Output:
// lower: [a, c]
// upper: [B, D]
// digit: [1]
// symbol: [@]
// 4 Input: "abCdeF"
// Output: "C"
// 5 Input: "a1B2c"
// Output: "A1b2C"
// 6 Remove Uppercase
// "aBcDeF" → "ace"
// 7 Replace Lowercase with *
// "aBcD" → "*B*D"
// 8 Check if All Uppercase
// "ABC" → true
// 9@ Toggle WITHOUT built-in ❗
// 👉 Uses:
// charCodeAt()
// 10. Count Vowels & Consonants

// =========================== solutions ==================
// 1 Input: "aBcD"
// Output: "AbCd"

// const switchchar = () => {
//   const str = "aBcD";
//   let str1 = "";
//   for (let k of str) {
//     if (k >= "a" && k <= "z") {
//       str1 += k.toUpperCase();
//     } else if (k >= "A" && k <= "Z") {
//       str1 += k.toLowerCase();
//     }
//   }
//   return str1;
// };
// console.log(switchchar());

// =================================================
// 2 Input: "taNISH"
// Output:
// Uppercase: 4
// Lowercase: 2

// const str = "taNISH";
// const count = () => {
//   let Uppercase = 0;
//   let Lowercase = 0;
//   for (let k of str) {
//     if (k >= "a" && k <= "z") {
//       Lowercase++;
//     } else if (k >= "A" && k <= "Z") {
//       Uppercase++;
//     }
//   }
//   return { Uppercase, Lowercase };
// };
// console.log(count());

//=======================================================
//3  Input: "aB1@cD"
// Output:
// lower: [a, c]
// upper: [B, D]
// digit: [1]
// symbol: [@]

const str = "aB1@cD";

const separate = () => {
  let lower = [];
  let upper = [];
  let digit = [];
  let symbol = [];

  for (let k of str) {
    if (k >= "a" && k <= "z") {
      lower.push(k);
    } else if (k >= "A" && k <= "Z") {
      upper.push(k);
    } else if (k >= "0" && k <= "9") {
      digit.push(k);
    } else {
      symbol.push(k);
    }
  }
  return { lower, upper, digit, symbol };
};
console.log(separate());
