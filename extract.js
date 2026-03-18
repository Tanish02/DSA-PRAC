// extract digits from string and sum
const str = "ab12cd034ef5";

const sum = () => {
  let num = 0;
  let current = "";
  for (let i = 0; i < str.length; i++) {
    let k = str[i];
    if (k >= "0" && k <= "9") {
      current += k; // build number
    } else {
      if (current !== "") {
        num += Number(current);
        current = "";
      }
    }
  }
  // last number
  if (current !== "") {
    num += Number(current);
  }
  return num;
};
console.log(sum());

// const str = "ab12cd034ef5";

// function sum() {
//   return (str.match(/-?\d+/g) || [])
//     .reduce((acc, num) => acc + Number(num), 0);
// }

// console.log(sum()); // 51
