// JavaScript function to calculate the Fibonacci sequence up to a given number.

function fibonacciNumber(num) {
  if (num <= 1) return num;
  return fibonacciNumber(num - 1) + fibonacciNumber(num - 2);
}
