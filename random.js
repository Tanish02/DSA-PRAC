const arr = [8, 3, 2, 1, 5, 6, 3, 9, 4];
// print number which is higher than 5

// 1st approach
// const foo = () => {
//   let target = 5;
//   let result = [];
//   for (let k of arr) {
//     if (k >= target) {
//       result.push(k);
//     }
//   }
//   return { result };
// };
// console.log(foo());

// 2nd approach
const res = arr.filter(num >= num > 5);
console.log(res);
