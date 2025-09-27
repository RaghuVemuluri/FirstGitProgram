function isArmstrong(num) {
  let sum = 0;
  let digits = num.toString().split(""); // split into digits
  let power = digits.length; // number of digits

  for (let digit of digits) {
    sum += Math.pow(Number(digit), power);
  }

  return sum === num;
}

// Test
console.log(isArmstrong(153));  // true
console.log(isArmstrong(9474)); // true
console.log(isArmstrong(123));  // false
