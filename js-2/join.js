function join(arr) {
  if (arr.length === 0) {
    return "";
  }
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += arr[i] + " ";
  }
  result = result.trim();
  return result;
}
console.log(join(["Hola", "mundo", "desde", "JavaScript"])); // "Hola mundo desde JavaScript"
console.log(join([])); // ""
console.log(join(["uno"])); // "uno"
