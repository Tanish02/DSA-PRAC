// nums = [10, 20, 25, 40, 50, 1, 2, 3, 7, 4, 6];
// target = 17;

function foo() {
  const s = [10, 20, 25, 40, 50, 1, 2, 3, 7, 4, 6];
  const target = 17;
  console.log("target :", target);
  s.sort((a, b) => a - b);
  console.log(s);
  let a = 0;
  let b = s.length - 1;
  while (a < b) {
    const goal = s[a] + s[b];
    {
      if (goal === target) {
        console.log("Indices :", a, b);
        return [s[a], s[b]];
      }
      if (goal < target) {
        a++;
      } else {
        b--;
      }
    }
  }
  console.log("No pair found");
  return null;
}
console.log("Result :", foo());
