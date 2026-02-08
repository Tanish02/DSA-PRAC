// twoSum problem

/////////////////////////logic//////////////////
// function twoSum () {
// const arr = [array elements]
// const target = [target sum]
// traverse through array and set b index to 0, i=0 with for loop
// nested for loop set to + 1 = j= i+1
// check if arr[i] + arr[j] === target
// if true return true
// else return false
// console log the result
//}

//////////////////////code/////////////////////
// function twoSum() {
//   const arr = [2, 4, 6, 8, 1, 3, 5, 7];
//   const target = 9;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// console.log("Result:", twoSum());

//===========================================================

// function twoSum() {
//   const arr = [2, 4, 6, 8, 1, 3, 5, 7];
//   const target = 9;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// console.log("Result:", twoSum());

////////////////////// RETURN INDICES //////////////////
// return index number with result
// function Sum() {
//   const arr = [10, 12, 18, 6, 4];
//   const target = 30;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         console.log("Indices: ", i, j);
//         return true;
//       }
//     }
//   }
//   return false;
//   console.log("No pair Found in this array");
// }
// console.log("Result: ", Sum());
//=========================================================================
// export function foo() {
//   const s = [10, 12, 11, 18, 5, 6];
//   const target = 300;
//   for (let a = 0; a < s.length; a++) {
//     for (let b = a + 1; b < s.length; b++) {
//       if (s[a] + s[b] === target) {
//         console.log("target :", target);
//         console.log("indices :", a, b);
//         return true;
//       }
//     }
//   }
//   console.log("target :", target);

//   console.log("No match found");
//   return false;
// }
// console.log("Result: ", foo());

/// ====================== Problems =======================================

// nums = [1, 2, 3, 4, 6];
// target = 6;

// brute force appraoch

// first approach -> if i>5 print true and value
// function goal() {
//   const nums = [1, 2, 3, 4, 6];
//   const target = 6;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > 5) {
//       console.log("goal achived");
//       return true;
//     }
//   }
//   console.log("No match found in array");
//   return false;
// }
// console.log("Result :", goal());

// // // second apprach
// function goal() {
//   const nums = [1, 2, 3, 4, 6];
//   const target = 6;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         console.log("Indices :", i, j);
//         return true;
//       }
//     }
//   }
//   console.log("no pair found in this array");
//   return false;
// }
// console.log("Results ->", goal());

// nums = [2, 7, 11, 15];
// target = 9;
// expect result  = [0,1]

function sum() {
  const nums = [2, 7, 11, 15];
  const target = 9;
  console.log("Target :", target);
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // i = 2 [0] , j =7 [1]
      if (nums[i] + nums[j] === target) {
        console.log("Indices :", i, j);
        // return [nums[i] + nums[j]];
      }
    }
  }
  console.log("No match found");
  return null;
}
console.log("Result :", sum());
