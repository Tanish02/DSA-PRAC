// twoSum problem

/////////////////////////logic//////////////////
// function twoSum () {
// const arr = [array elements]
// const target = [target sum]
// traverse through array and setb index to 0 = i=0 with for loop
// nested for loop set to + 1 = j= i+1
// check if arr[i] + arr[j] === target
// if true return true
// else return false
// console log the result
//}

//////////////////////code/////////////////////
function twoSum() {
  const arr = [1, 3, 5, 7, 2, 4, 6];
  const target = 9;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  return false;
}
console.log("Result :", twoSum());
twoSum();
