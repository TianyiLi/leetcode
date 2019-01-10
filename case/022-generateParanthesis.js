/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let result = []
  generate(0, 0, '', n, result)
  return result
};
let generate = (left, right, s, n, result) => {
  if (right == n) {
    result.push(s)
  } else {
    if (left < n) {
      generate(left + 1, right, s + '(', n, result)
    }
    if (right < left) {
      generate(left, right + 1, s + ')', n, result)
    }
  }
}
module.exports.generateParenthesis = generateParenthesis
