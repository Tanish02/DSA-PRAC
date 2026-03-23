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

// const str = "aB1@cD";

// const separate = () => {
//   let lower = [];
//   let upper = [];
//   let digit = [];
//   let symbol = [];

//   for (let k of str) {
//     if (k >= "a" && k <= "z") {
//       lower.push(k);
//     } else if (k >= "A" && k <= "Z") {
//       upper.push(k);
//     } else if (k >= "0" && k <= "9") {
//       digit.push(k);
//     } else {
//       symbol.push(k);
//     }
//   }
//   return { lower, upper, digit, symbol };
// };
// console.log(separate());

//============================================================

// 4 Input: "abCdeF"
// Output: "C"

// const select = () => {
//   let str = "abCdeF";
//   let Output = [];

//   for (let k of str) {
//     if (k >= "A" && k <= "Z") {
//       return k;
//     }
//   }
//   return null;
// };
// console.log(select());

//===========================================
// 5 Input: "a1B2c"
// Output: "A1b2C"
// const str = "a1B2c";
// const switchchar = () => {
//   let str1 = "";
//   for (let k of str) {
//     if (k >= "a" && k <= "z") {
//       str1 += k.toUpperCase();
//     } else if (k >= "A" && k <= "Z") {
//       str1 += k.toLowerCase();
//     } else {
//       str1 += k;
//     }
//   }
//   return str1;
// };
// console.log(switchchar());

//==========================================
// 6 Remove Uppercase
// "aBcDeF" → "ace"

// const str = "aBcDeF";
// const select = (str) => {
//   let result = "";
//   for (let k of str) {
//     if (k >= "a" && k <= "z") {
//       result += k;
//     }
//   }
//   return result;
// };
// console.log(select("aBcDeF"));

//=============================
// 7 Replace Lowercase with *
// "aBcD" → "*B*D"
//7.1 Input: "aBcD";
// Output: "a#c#";
//7.2 Input: "a1B2c3";
// Output: "a*B*c*";

// // 7
// const str1 = "aBcD";
// const replace7 = () => {
//   let result = "";
//   for (let k of str1) {
//     if (k >= "a" && k <= "z") {
//       result += "*";
//     } else result += k;
//   }
//   return result;
// };
// console.log(replace7());

// // 7.1
// const str2 = "aBcD";
// const replace7_1 = () => {
//   let result1 = "";
//   for (let k of str2) {
//     if (k >= "A" && k <= "Z") {
//       result1 += "#";
//     } else {
//       result1 += k;
//     }
//   }
//   return result1;
// };
// console.log(replace7_1());

// // 7.2
// const str3 = "a1B2c3";
// const replace7_3 = () => {
//   let result2 = "";
//   for (let k of str3) {
//     if (k >= "0" && k <= "9") {
//       result2 += "*";
//     } else {
//       result2 += k;
//     }
//   }
//   return result2;
// };
// console.log(replace7_3());

//==================================================
// 8 Check if All Uppercase
// "ABC" → true

//8.1 Input: "abc"
// Output: true

//8.2 Input: "abC";
// Output: false;

// 8.3 Input: "12345";
// Output: true;
// 8.4 Input: "12a45";
// Output: false;
// 8.5 Input: "1245@$";
// Output: false;

// const check8_1 = (str) => {
//   for (let i = 0; i < str.length; i++) {
//     let k = str[i];
//     if (k >= "a" && k <= "z") {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(check8_1("ABC"));

// const check8_2 = (str1) => {
//   for (let k of str1) {
//     if (k >= "A" && k <= "Z") {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(check8_2("abC"));

// const check8_4 = (str1) => {
//   for (k of str1) {
//     if (k >= "a" && k <= "z") {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(check8_4("12a45"));

// // need practice more this
// const check8_3 = (str2) => {
//   for (let k of str2) {
//     if (!(k >= "0" && k <= "9")) {
//       return false;
//     }
//   }
//   return true;
// };

//8.5 input = "123ta45@$"
// output false
//8.6 input = "123456"
// output true

const allDigit = (str) => {
  for (let k of str) {
    if (!(k >= "0" && k <= "9")) {
      return false;
    }
  }
  return true;
};
console.log(allDigit("123ta45@$"));
console.log(allDigit("123456"));
