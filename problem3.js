// 1. Add Digits (258)
// Input: num = 38
// Output: 2
// Explanation
// 3 + 8 = 11
// 1 + 1 = 2
// 2. First Unique Character in String (387)
// Input: s = "leetcode"
// Output: 0
// Explanation
// 'l' is first non-repeating character.
// 3. Minimum Number Game (2974)
// Input: nums = [5,4,2,3]
// Output: [3,2,5,4]
// 4. Check if Two String Arrays are Equivalent (1662 / similar)
// Input: word1 = ["ab","c"]
// Input: word2 = ["a","bc"]
// Output: true
// 5. Maximum Number of Words Found in Sentences (2114)
// Input: sentences = ["alice and bob love leetcode","i think so too","this is great thanks"]
// Output: 5
// 6. Count the Digits That Divide a Number (2520)
// Input: num = 1248
// Output: 4
// Explanation
// 1,2,4,8 all divide 1248.
// 7. Find First Palindromic String in the Array (2108)
// Input: words = ["abc","car","ada","racecar","cool"]
// Output: "ada"
// 8. Number of Employees Who Met Target (2798)
// Input: hours = [0,1,2,3,4], target = 2
// Output: 3
// 9. Difference Between Element Sum and Digit Sum (2535)
// Input: nums = [1,15,6,3]
// Output: 9
// 10. Sum Multiples (2652)
// Input: n = 7
// Output: 21
// Multiples of 3,5,7 → 3 + 5 + 6 + 7
// 11. XOR Operation in an Array (1486)
// Input: n = 5, start = 0
// Output: 8
// 12. Divisible and Non-Divisible Sums Difference (2894)
// Input: n = 10, m = 3
// Output: 19
// 13. To Lower Case (709)
// Input: s = "Hello"
// Output: "hello"
// 14. Number of Changing Keys (3019)
// Input: s = "aAbBcC"
// Output: 2
// 15. Type of Triangle (3024)
// Input: nums = [3,3,3]
// Output: "equilateral"
// 16. Find Words Containing Character (2942)
// Input: words = ["leet","code"]
// Input: x = "e"
// Output: [0,1]
// 17. Squares of a Sorted Array (977)
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// 18. Find the Maximum Achievable Number (2769)
// Input: num = 4, t = 1
// Output: 6
// 19. Subtract the Product and Sum of Digits (1281)
// Input: n = 234
// Output: 15
// 20. Richest Customer Wealth (1672)
// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// 21. Three Consecutive Odds (1550)
// Input: arr = [2,6,4,1]
// Output: false
// 22. Sign of the Product of an Array (1822)
// Input: nums = [-1,-2,-3,-4,3,2,1]
// Output: 1
// 23. Baseball Game (682)
// Input: ["5","2","C","D","+"]
// Output: 30
// 24. Robot Return to Origin (657)
// Input: moves = "UD"
// Output: true
// 25. Find if Digit Game Can Be Won (3232)
// Input: nums = [1,2,3]
// Output: true
// 26. Height Checker (1051)
// Input: heights = [1,1,4,2,1,3]
// Output: 3

//==============================================================================
// 1. Add Digits (258)
// Input: num = 38
// Output: 2
// Explanation
// 3 + 8 = 11
// 1 + 1 = 2

////// approach 1 :

// const num = 38;
// const digit = () => {
//   if (num === 0) return 0;
//   {
//     return 1 + ((num - 1) % 9);
//   }
// };
// console.log(digit());

////// approach 2 :

// const addDigit = (num) => {
//   while (num > 9) {
//     let digit = num.toString().split("");
//     let sum = 0;

//     for (let k of digit) {
//       sum += Number(k);
//     }
//     num = sum;
//   }
//   return num;
// };
// console.log(addDigit(38));

//================================================================================
// 2. First Unique Character in String (387)
// Input: s = "leetcode"
// Output: 0
// Explanation
// 'l' is first non-repeating character.

// const s = "leetcode";
// const fuc = () => {
//   let check = {};
//   for (let k of s) {
//     check[k] = (check[k] || 0) + 1;
//   }
//   for (let i = 0; i < s.length; i++) {
//     if (check[s[i]] === 1) {
//       return i;
//     }
//   }
//   return null;
// };
// console.log(fuc());

//============================================================================
// 3. Minimum Number Game (2974)
// Input: nums = [5,4,2,3]
// Output: [3,2,5,4]
// logic = nums.sort() -> [2,3,4,5] -> [2,3]-[4,5]
// [2,3]-[4,5] -> switch [3,2]-[5,4]=[3,2,5,4]

const nums = [5, 4, 2, 3];
const numGame = () => {
  nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length; i += 2) {
    result.push(nums[i + 1]);
    result.push(nums[i]);
  }
  return result;
};
console.log(numGame());

//============================================================================
