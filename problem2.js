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
// const removedup = (str) => [...new Set(str)].join("");
// console.log(removedup("aabbccdde"));

// approach 2
const removedup = (str) => {
  let seen = {};
  let result = "";

  for (let k of str) {
    if (!seen[k]) {
      seen[k] = true;
      result += k;
    }
  }
  return result;
};
console.log(removedup("aabbccdde"));
