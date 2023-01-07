//The task is to create a function that tests if a string is a palindrome

let palindrome = "Was it a car or a cat I saw";
let nonPalindrome = "Hey how are you";

function isPalindrome(x) {
  const original = x.split(" ").join("").toLowerCase();
  const reversed = original.split("").reverse().join("");

  if (original === reversed) {
    console.log("It is a palindrome");
  } else {
    console.log("It is not a palindrome");
  }
  console.log(original, reversed);
}

isPalindrome(palindrome);

//reversing a string --> one of different methods
function reverseString(str) {
  const revArray = [];
  const length = str.length - 1;

  for (let i = length; i >= 0; i--) {
    revArray.push(str[i]);
  }
  return revArray.join("");
}

console.log(reverseString(palindrome));
