/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let pair = {}
  let set = (a, b) => {
    pair = [a, b]
  }
  nums.some((n, i) => {
    if (pair[n] !== undefined) {
      set(pair[n], i)
      return true
    }
    pair[target - n] = i
  })
  return pair
};
module.exports.twoSum = twoSum
