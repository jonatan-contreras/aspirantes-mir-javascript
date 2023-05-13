function sum(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0
