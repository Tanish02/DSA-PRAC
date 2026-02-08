// logic

// function sum () {
// create a pointer and set its value to i=0;
// create a let num and store first element
// pointer ++ and add value to num
// update num value and traverse through eash element
// print num value
//}

// ============================with while loop================
// function sum() {
//   const arr = [3, 7, 2, 9, 4];
//   let num = 0;
//   let i = 0;
//   while (i < arr.length) {
//     num = num + arr[i];
//     i++;
//   }
//   console.log("Total Sum Value :", num);
// }
// sum();

//==============================with for loop========
function sum() {
  const arr = [3, 7, 2, 9, 4];
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    //num += arr[i];
    num = num + arr[i];
  }
  console.log("Total :", num);
}
sum();

// BEST SOLUTION ==================================

// const arr = [3, 7, 2, 9, 4];
// const sum = arr.reduce((acc, val) => acc + val, 0);
// console.log(sum);
