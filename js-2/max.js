function max(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}
console.log(max([1, 2, 3])); // 3
console.log(max([10, 8, 12, 5])); // 12
console.log(max([-10, -20, -5])); // -5
console.log(max([])); // undefined
