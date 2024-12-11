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

// two sum

// var twoSum = function (nums, target) {
//   let arr = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         arr.push(i, j);
//         return arr;
//       }
//     }
//   }
// };

// let nums = [2, 7, 11, 15],
//   target = 9;
// console.log(twoSum(nums, target));

// maximum sunArray

var maximumSubArray = function (nums) {
  let maximum = nums[0];
  let small = 0;
  nums.forEach((n) => {
    small += n;
    maximum = Math.max(maximum, small);
    if (small < 0) small = 0;
  });
  return maximum;
};

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6