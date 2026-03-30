// Approach 1

const isPalindrome = (str) => {
  let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));

// Approach 2
const palindrome = (str) => {
  let cleaned = "";

  for (let ch of str.toLowerCase()) {
    if ((ch >= "a" && ch <= "z") || (ch >= "0" && ch <= "9")) {
      cleaned += ch;
    }
  }

  let reversed = "";

  for (let i = cleaned.length - 1; i >= 0; i--) {
    reversed += cleaned[i];
  }

  return cleaned === reversed;
};

console.log(palindrome("A man, a plan, a canal: Panama"));

// approach 3
const palindrom = (str) => str === str.split("").reverse().join("");

console.log(palindrom("racecar"));

// approach 4 (2 pointer)
const palindromee = (str) => {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }

  return true;
};

console.log(palindromee("racecar"));
