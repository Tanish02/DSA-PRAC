// Problem Set (Level++)
// 🟢 1. Remove Duplicates (Easy Warm-up)
// Input: "aabbccdde"
// Output: "abcde"
// 🟢 2. First Non-Repeating Character
// Input: "aabbcdd"
// Output: "c"
// 🟡 3. Maximum Occurring Character
// Input: "aaabbccccd"
// Output: "c"
// 🟡 4. Check Anagram
// Input: "listen", "silent"
// Output: true
// 🟡 5. String Compression
// Input: "aaabbc"
// Output: "a3b2c1"
// 🟡 6. Reverse Words in Sentence
// Input: "I love coding"
// Output: "coding love I"
// 🟠 7. Longest Substring Without Repeating Characters
// Input: "abcabcbb"
// Output: 3
// Explanation: "abc"
// 👉 First real interview-level problem
// 🟠 8. Check Palindrome (Ignore case & symbols)
// Input: "A man, a plan, a canal: Panama"
// Output: true
// 🔴 9. Group Anagrams
// Input: ["eat","tea","tan","ate","nat","bat"]
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
// 👉 Uses hashing + sorting
// 🔴 10. Minimum Window Substring (🔥 Hard)
// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// 👉 Sliding window (very important for interviews)

//=======================================================================
// 🟢 1. Remove Duplicates (Easy Warm-up)
// Input: "aabbccdde"
// Output: "abcde"

// approach 1
// const removedup1 = (str) => [...new Set(str)].join("");
// console.log(removedup1("aabbccdde"));

// // approach 2
// const removedup = (str) => {
//   let seen = {};
//   let result = "";

//   for (let k of str) {
//     if (!seen[k]) {
//       seen[k] = true;
//       result += k;
//     }
//   }
//   return result;
// };
// console.log(removedup("aabbccdde"));

// // approach 3
// let str2 = "testing"; // tesing
// let arr1 = str2.split("");
// let value = new Set(arr1);
// let arr2 = [...value];
// let str3 = arr2.join("");
// console.log(str3);

//==================================================
// 🟢 2. First Non-Repeating Character
// Input: "aabbcdd"
// Output: "c"

// // approach 1 = only show 1st non repeat char
// const nonrepeatchar = (str) => {
//   let check = {};
//   for (let k of str) {
//     check[k] = (check[k] || 0) + 1;
//   }
//   for (let k of str) {
//     if (check[k] === 1) {
//       return k;
//     }
//   }
//   return null;
// };
// console.log(nonrepeatchar("aabbcddeff"));

// // approach 2 = show All non-repeating char
// const nonrepeatchar2 = (strr) => {
//   let check = {};
//   let result = [];
//   for (let k of strr) {
//     check[k] = (check[k] || 0) + 1;
//   }
//   for (let k of strr) {
//     if (check[k] === 1) {
//       result.push(k);
//     }
//   }
//   if (result.length > 0) {
//     return result;
//   } else {
//     return null;
//   }
// };
// console.log(nonrepeatchar2, "aabbcddeff");

// ============================================
// 🟡 3. Maximum Occurring Character
// Input: "aaabbccccd"
// Output: "c"

// approach 1
const maxchar = (str) => {
  let freq = {};
  let max = 0;
  let result = "";
  for (let k of str) {
    freq[k] = (freq[k] || 0) + 1;

    if (freq[k] > max) {
      max = freq[k];
      result = k;
    }
  }
  return { result };
};
console.log(maxchar("aaabbccccd"));

// approach 2

const maxChar = (str) => {
  let map = new Map();
  let max = 0;
  let result = "";

  for (let k of str) {
    map.set(k, (map.get(k) || 0) + 1);

    if (map.get(k) > max) {
      max = map.get(k);
      result = k;
    }
  }
  return result;
};
console.log(maxChar("aaabbccccd"));
