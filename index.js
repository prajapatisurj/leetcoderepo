// duplicate contains

// var containsDuplicate = function (nums) {
//   nums.sort((a, b) => a - b);
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] === nums[i - 1]) {
//       return true;
//     }
//   }
//   return false;
// };

// let arr=[1,2,3,1]   true
// let arr=[1,2,3,4]   false

// console.log(containsDuplicate(arr)) //true
// console.log(containsDuplicate(arr)) // false

// valid anagram

// var validAnagram = function (a, b) {
//   return a.split("").sort().join("") === b.split("").sort().join("");
// };

// let a="anagram"
// let b= "nagaram" true

// let c='rar'
// let d='car'  false

// console.log(validAnagram(c,d))