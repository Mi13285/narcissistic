function narcissistic(value) {
  const integerSet = value.toString().split("").map(Number);
  const pow = integerSet.length;
  const sum = integerSet.reduce(
    (total, item) => total + Math.pow(item, pow),
    0
  );
  return sum == value;
}
console.log(narcissistic(12432));
console.log(narcissistic(153));
console.log(narcissistic(371));
console.log(narcissistic(7));
