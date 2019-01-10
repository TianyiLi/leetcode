/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let _l = nums.length
  nums.reduce((prev, curr) => {
    !prev[curr] && (nums.push(curr) ,(prev[curr] = 1))
    return prev
  }, {})
  nums.splice(0, _l)
  // reduce right combine splice
  // nums.reduceRight((prev, curr, i) => {
  //   prev[curr] ? nums.splice(i, 1) : (prev[curr] = true)
  //   return prev
  // }, {})

  // reduce and reprocess
  // let match = {}
  // for (let i = nums.length - 1; i >= 0; i--) {
  //   if (match[nums[i]]) {
  //     nums.splice(i, 1)
  //   } else {
  //     match[nums[i]] = true
  //   }
  // }
  return nums.length
};

module.exports.removeDuplicates = removeDuplicates
