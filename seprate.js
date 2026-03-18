const str = "a10b20c3@#S";

const sep = () => {
  let alphabet = { upper: [], lower: [] };
  let digit = [];
  let symbol = [];
  let totalDigit = "";
  let sum = 0;

  for (let k of str) {
    // if digit apper keep adding
    if (k >= "0" && k <= "9") {
      totalDigit += k;
    } else {
      // if digit apper push to totalDigit
      if (totalDigit !== "") {
        let value = Number(totalDigit);
        digit.push(value);
        sum += value;
        totalDigit = "";
      }
      // alphabet
      if (k >= "A" && k <= "Z") {
        alphabet.upper.push(k);
      } else if (k >= "a" && k <= "z") {
        alphabet.lower.push(k);
      } else {
        symbol.push(k);
      }
    }
  }
  return { alphabet, symbol, digit, totalDigit, sum };
};
console.log(sep());
