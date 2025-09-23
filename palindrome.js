function isPalindrome(str) {
  // Remove spaces, punctuation, and convert to lowercase
  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Reverse the string
  let reversed = str.split('').reverse().join('');

  return str === reversed;
}

// Example usage
console.log(isPalindrome("madam"));       // true
console.log(isPalindrome("racecar"));     // true
console.log(isPalindrome("hello"));       // false
console.log(isPalindrome("A man a plan a canal Panama")); // true
