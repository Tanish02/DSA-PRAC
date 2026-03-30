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

// // approach 1
// const maxchar = (str) => {
//   let freq = {};
//   let max = 0;
//   let result = "";
//   for (let k of str) {
//     freq[k] = (freq[k] || 0) + 1;

//     if (freq[k] > max) {
//       max = freq[k];
//       result = k;
//     }
//   }
//   return { result };
// };
// console.log(maxchar("aaabbccccd"));

// // approach 2

// const maxChar = (str) => {
//   let map = new Map();
//   let max = 0;
//   let result = "";

//   for (let k of str) {
//     map.set(k, (map.get(k) || 0) + 1);

//     if (map.get(k) > max) {
//       max = map.get(k);
//       result = k;
//     }
//   }
//   return result;
// };
// console.log(maxChar("aaabbccccd"));

//=======================================================================
// 🟡 4. Check Anagram
// Input: "listen", "silent"
// Output: true

// // approach 1
// const checkAnagram = () => {
//   const str = "listen";
//   const str1 = "silent";
//   let freq = {};
//   if (str.length !== str1.length) return false;

//   for (let k of str) {
//     freq[k] = (freq[k] || 0) + 1;
//   }
//   for (let k of str1) {
//     if (!freq[k]) {
//       return false;
//     }
//     freq[k]--;
//   }
//   return true;
// };
// console.log(checkAnagram());

// // approach 2
// const checkanagram = () => {
//   const str = "listen";
//   const str1 = "silent";
//   return str.split("").sort().join("") === str1.split("").sort().join("");
// };
// console.log(checkanagram());

// ========================== in Group ========================================

// input: ["eat", "tea", "tan", "ate", "nat", "bat"];

// const checkanagram = (arr) => {
//   let map = {};
//   for (let k of arr) {
//     let jack = k.split("").sort().join("");
//     if (!map[jack]) {
//       map[jack] = [];
//     }
//     map[jack].push(k);
//   }
//   return { map };
// };
// console.log(checkanagram(["eat", "tea", "tan", "ate", "nat", "bat"]));

//===================================================
// 🟡 5. String Compression
// Input: "aaabbc"
// Output: "a3b2c1"

// const str = "aaabbc";
// const strcomp = () => {
//   let result = "";
//   let count = 0;
//   for (let k = 0; k < str.length; k++) {
//     if (str[k] === str[k + 1]) {
//       count++;
//     } else {
//       result += str[k] + count;
//       count = 1;
//     }
//   }
//   return result;
// };
// console.log(strcomp());
//=========================================================================
// Input: "abc";
// Compressed: "a1b1c1";
// Output: "abc";
// compare output with original string if longer return original string else return compressed result

// const str = "abc";
// const checkstr = () => {
//   let count = 1;
//   let result = "";
//   for (let k = 0; k < str.length; k++) {
//     if (str[k] === str[k + 1]) {
//       count++;
//     } else {
//       result += str[k] + count;
//       count = 1;
//     }
//   }
//   if (result.length >= str.length) {
//     return str;
//   } else {
//     return result;
//   }
//   // return;
// };

// console.log(checkstr());

//==============================================================
// 🟡 6. Reverse Words in Sentence
// Input: "I love coding"
// Output: "coding love I"

// const str = "I love coding";

// Approach 1 :
// const reversestr = () => {
//   let str1 = str.split(" ").reverse().join(" ");
//   console.log(str1);
// };
// reversestr();

// Approach 2 :
// const reversestr = () => {
//   let str1 = str.split(" ");
//   let result = "";

//   for (let i = str1.length - 1; i >= 0; i--) {
//     result += str1[i] + " ";
//   }
//   return result;
// };
// console.log(reversestr());

//===========================================
// Longest Word in a Sentence
// Input:  "I love programming very much"
// Output: "programming"

// const str = "I love programming very much";

// const longestWord = () => {
//   let str1 = str.split(" ");
//   // console.log(str1);
//   let longest = "";
//   let result = "";
//   for (let i = 0; i < str1.length; i++) {
//     if (str1[i].length > longest.length) {
//       longest = str1[i];
//       result = longest;
//     }
//   }
//   return { result };
// };
// console.log(longestWord());

//==================================================

// 🟠 8. Check Palindrome (Ignore case & symbols)
// Input: "A man, a plan, a canal: Panama"
// Output: true

// const str = "A man, a plan, a canal: Panama";

// // approach 1
// const ispalindrome = () => {
//   let result = "";

//   for (let k of str.toLowerCase()) {
//     if ((k >= "a" && k <= "z") || (k >= "0" && k <= "9")) {
//       result += k;
//     }
//   }
//   let rev = result.split("").reverse().join("");
//   return result === rev;
// };
// console.log(ispalindrome());

//=====================================================
// 🔴 9. Group Anagrams
// Input: ["eat","tea","tan","ate","nat","bat"]
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
// 👉 Uses hashing + sorting

// const str = ["eat", "tea", "tan", "ate", "nat", "bat"];
// const anagrams = () => {
//   let map = {};
//   for (let k of str) {
//     let key = k.split("").sort().join("");
//     if (!map[key]) {
//       map[key] = [];
//     }
//     map[key].push(k);
//   }
//   return [map];
//   // return Object.values(map);
// };
// console.log(anagrams());

//===========================================================================
// 🔴 10. Minimum Window Substring (🔥 Hard)
// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// no idea ????????????????????????????????

const minWindow = (s, t) => {
  let need = {};
  let window = {};
  for (let c of t) {
    need[c] = (need[c] || 0) + 1;
  }
  let left = 0;
  let right = 0;
  let valid = 0;
  let start = 0;
  let minLen = Infinity;
  while (right < s.length) {
    let c = s[right];
    right++;
    if (need[c]) {
      window[c] = (window[c] || 0) + 1;
      if (window[c] === need[c]) valid++;
    }
    while (valid === Object.keys(need).length) {
      if (right - left < minLen) {
        start = left;
        minLen = right - left;
      }
      let d = s[left];
      left++;
      if (need[d]) {
        if (window[d] === need[d]) valid--;
        window[d]--;
      }
    }
  }
  return minLen === Infinity ? "" : s.substring(start, start + minLen);
};
console.log(minWindow("ADOBECODEBANC", "ABC"));
