/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = []
  let pair = {
    '}': '{',
    ')': '(',
    ']': '['
  }
  let _r = s.split('')
    .some((char, i) => {
      if (!pair[char]) {
        stack.push(char)
      } else {
        if (stack.pop() !== pair[char]) return true
      }
    })
  return stack.length === 0 && !_r
};

module.exports.isValid = isValid
