/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits || digits.length === 0) return []
  let letters = {
    '1': [],
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  }
  if (digits.length === 1) return letters[digits[0]]
  let _d = digits.split('').reverse()
  return _d.reduce((prev, curr) => {
      return letters[curr].reduce((prev2, curr2) => {
        return prev2.concat(prev.map(l => curr2 + l))
      }, [])
    }, letters[_d.shift()])
};
module.exports.letterCombinations = letterCombinations
