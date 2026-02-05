// twoSum problem

/////////////////////////logic//////////////////
// function twoSum () {
// const arr = [array elements]
// const target = [target sum]
// traverse through array and set b index to 0 = i=0 with for loop
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

// two sum problem with hashMap approach
/////////////////////////logic//////////////////

// function twoSum () {
// const array and
//create an empty hashMap and traverse
// calculate required value = target - current element
// if required value exist in msp
// return true
// else
// store current element in map
// after loop return false
// }

//////////////////////code/////////////////////

// function twoSum() {
//   const arr = [2, 4, 6, 8, 1, 3, 5];
//   const target = 90;
//   let map = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     let needed = target - arr[i];

//     if (map.has(needed)) {
//       return true;
//     }
//     map.set(arr[i], true);
//   }
//   return false;
// }
// console.log("Result:", twoSum());

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

function foo() {
  const s = [10, 12, 18, 24, 6, 8];
  const target = 30;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[j] + s[i] === target) {
        console.log("Indices:", i, j);
        return true;
      }
    }
  }
  return false;
  console.log("No pair Found");
}
console.log("Result-> ", foo());
