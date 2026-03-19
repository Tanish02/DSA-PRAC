// extract digits from string and sum

const str = "a12b3c45";

const fun = () => {
  let alphabet = { upper: [], lower: [] };
  let digit = [];
  let symbol = [];
  let temp = "";
  let sum = 0;

  for (let k of str) {
    //digit
    if (k >= "0" && k <= "9") {
      temp += k;
    } else {
      if (temp !== "") {
        let value = Number(temp);
        digit.push(value);
        sum += value;
        temp = "";
      }
      if (k >= "A" && k <= "Z") {
        alphabet.upper.push(k);
      } else if (k >= "a" && k <= "z") {
        alphabet.lower.push(k);
      } else {
        symbol.push(k);
      }
    }
  }
  // if (temp !== "") {
  //   let value = Number(temp);
  //   digit.push(value);
  //   sum += value;
  // }
  return { alphabet, digit, symbol, sum };
};
console.log(fun());
