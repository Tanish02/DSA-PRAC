// const str = "abcABC123@#";

// const count = () => {
//   let lower = 0;
//   let upper = 0;
//   let number = 0;
//   let symbol = 0;
//   let str = [...a];
//   for (let i = 0; i < str.length; i++) {
//     let k = str[i];

//     if (k >= "A" && k <= "Z") {
//       upper++;
//     } else if (k >= "a" && k <= "z") {
//       lower++;
//     } else if (k >= "0" && k <= "9") {
//       number++;
//     } else {
//       symbol++;
//     }
//   }
//   return { lower, upper, number, symbol };
// };
// console.log(count());

const countstr = (str) => {
  let upper = 0;
  let lower = 0;
  let num = 0;
  let symbol = 0;

  for (let i = 0; i < str.length; i++) {
    let k = str[i];
    if (k >= "a" && k <= "z") {
      lower++;
    } else if (k >= "A" && k <= "Z") {
      upper++;
    } else if (k >= "0" && k <= "9") {
      num++;
    } else {
      symbol++;
    }
  }
  return { lower, upper, num, symbol };
};
console.log(countstr("abcABC123@#"));
console.log(countstr("TanIshShaRma2026$$$"));
// Your solution is O(n) time complexity and O(1) space
