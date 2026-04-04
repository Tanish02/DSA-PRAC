// two sum problem with hashMap approach
/////////////////////////logic//////////////////

// function twoSum () {
// const array and
//create an empty hashMap and traverse
// calculate required value = target - current element
// if required value exist in map
// return true
// else
// store current element in map
// after loop return false
// }

//////////////////////code/////////////////////

function twoSum() {
  const arr = [2, 4, 6, 8, 1, 3, 5];
  const target = 90;
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let needed = target - arr[i];

    if (map.has(needed)) {
      return true;
    }
    map.set(arr[i], true);
  }
  return false;
}
console.log("Result:", twoSum());
