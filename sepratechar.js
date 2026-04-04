// const str = "aB1@cD";

// Output:
// lower: [a, c]
// upper: [B, D]
// digit: [1]
// symbol: [@]

// const separate = () => {
//   let upper = [];
//   let lower = [];
//   let digit = [];
//   let symbol = [];
//   for (let k of str) {
//     if (k >= "A" && k <= "Z") {
//       upper.push(k);
//     } else if (k >= "a" && k <= "z") {
//       lower.push(k);
//     } else if (k >= "0" && k <= "9") {
//       digit.push(k);
//     } else {
//       symbol.push(k);
//     }
//   }
//   return { lower, upper, digit, symbol };
// };
// console.log(separate());

const str = "tanishSHARMA080##$$**&&";

const sepratechr = () => {
  let alphabet = {
    upper: [],
    lower: [],
  };
  let digit = [];
  let symbol = [];
  for (let k of str) {
    if (k >= "a" && k <= "z") {
      alphabet.lower.push(k);
    } else if (k >= "A" && k <= "Z") {
      alphabet.upper.push(k);
    } else if (k >= "0" && k <= "9") {
      digit.push(k);
    } else {
      symbol.push(k);
    }
  }
  return { alphabet, digit, symbol };
};
console.log(sepratechr());
