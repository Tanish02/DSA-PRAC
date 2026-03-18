const a = "abcABC123@#";

const count = () => {
  let lower = 0;
  let upper = 0;
  let number = 0;
  let symbol = 0;
  let str = [...a];
  for (let i = 0; i < str.length; i++) {
    let k = str[i];

    if (k >= "A" && k <= "Z") {
      upper++;
    } else if (k >= "a" && k <= "z") {
      lower++;
    } else if (k >= "0" && k <= "9") {
      number++;
    } else {
      symbol++;
    }
  }
  return { lower, upper, number, symbol };
};
console.log(count());
