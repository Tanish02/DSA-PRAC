const str = "taNISHSHarma";

const switchchar = () => {
  let result = "";
  for (let k of str) {
    if (k >= "a" && k <= "z") {
      result += k.toLowerCase();
    } else {
      result += k;
    }
  }
  return result;
};
console.log(switchchar());
