// Fixed Window problem

//==============logic=====================
// max sum of subarray of size k
// function maxSumSubarray(arr, k) {
// calculate sum of first k element
// store it as maxSum
// slide the window from K to end of array
// add new element to window sum
// remove elements that goes out of window
// update maxsum value
// return maxsum value
// }

//===================================

function maxSumSubarray() {
  let windowSum = 0;
  const arr = [2, 1, 5, 1, 3, 2];
  const k = 3;

  // 1st window
  for (let i = 0; i < k; i++) {
    windowSum = windowSum + arr[i];
  }
  let maxSum = windowSum;

  // slide window
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum + arr[i];
    windowSum = windowSum - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}
console.log("Result:", maxSumSubarray());
maxSumSubarray();
