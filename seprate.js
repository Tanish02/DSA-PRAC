// const arr = ["a", "1", "b", "2", "c", "3"];
// // seprate [a,b,c],[1,2,3]
// const sep = () => {
//   let letter = [];
//   let number = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!isNaN(arr[i])) {
//       number.push(arr[i]);
//     } else {
//       letter.push(arr[i]);
//     }
//   }
//   return [letter, number];
// };
// console.log(sep());

// const sep = (arr) => {
//   let letters = [];
//   let numbers = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!isNaN(arr[i])) {
//       numbers.push(arr[i]);
//     } else {
//       letters.push(arr[i]);
//     }
//   }
//   return [letters, numbers];
// };
// console.log(sep(["a", "1", "b", "2", "c", "3", ""]));

const a = "aB3@cD1#100";
// lower case = "a to z "
// upper case = "A to Z"
// number = "1 to 1000"
// symbol = everything else

const sep = () => {
  let alphabet = {
    lower: [],
    upper: [],
  };
  let number = [];
  let symbol = [];
  let str = [...a];

  for (let i = 0; i < str.length; i++) {
    let k = str[i];

    if (k >= "a" && k <= "z") {
      alphabet.lower.push(k);
    } else if (k >= "A" && k <= "Z") {
      alphabet.upper.push(k);
    } else if (k >= "1" && k <= "9") {
      number.push(k);
    } else {
      symbol.push(k);
    }
  }
  return [alphabet, number, symbol];
};
console.log(sep());
