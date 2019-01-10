/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// var fourSum = function (nums, target) {
//   nums = nums.sort((a, b) => a - b)
//   if (nums.length < 4) return []

//   let result = []
//   let nResult = []
//   /**@param {number[]} arr */
//   let setSth = (arr) => {
//     let str = arr.join()
//     if (!nResult.includes(str)) {
//       result.push(arr)
//       nResult.push(str)
//     }
//   }
//   nums.some((n1, i1) => {
//     if (nums.length === i1 + 3) return true
//     for (let i2 = i1 + 1; i2 < nums.length; i2++) {
//       for (let i3 = i2 + 1; i3 < nums.length; i3++) {
//         for (let i4 = i3 + 1; i4 < nums.length; i4++) {
//           if (nums[i1] + nums[i2] + nums[i3] + nums[i4] === target) setSth([nums[i1], nums[i2], nums[i3], nums[i4]])
//         }
//       }
//     }
//   })
//   return result
// };
var fourSum = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let lo = j + 1;
      let hi = nums.length - 1;
      while (lo < hi) {
        let sum = nums[i] + nums[j] + nums[lo] + nums[hi];
        //  console.log(sum);
        if (target === sum) {
          result.push([nums[i], nums[j], nums[lo], nums[hi]]);
          while (lo < hi && nums[lo] === nums[lo + 1]) lo++;
          while (lo < hi && nums[hi] === nums[hi - 1]) hi--;
          lo++;
          hi--;
        }
        else if (target > sum) {
          lo++;
        }
        else {
          hi--;
        }
      }
      while (j < nums.length && nums[j] === nums[j + 1]) j++;
    }
    while (i < nums.length && nums[i] === nums[i + 1]) i++;
  }
  return result;
};

module.exports.fourSum = fourSum