const fibonacci = (n) => {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  //   return fib;
  return fib[n - 1];
};
console.log(fibonacci(5));

// it takes previous value output and add to next number
// 0, 1
// 0+1 = 1
// 1+1 = 2
// 1+2 = 3
// 2+3 = 5
// 3+5 = 8
