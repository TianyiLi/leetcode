/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var roman = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  var exclude = {
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900
  }
  s = s.split('')
  let result = s.reduce((prev, curr, index) => {
    if (prev.pass) {
      prev.pass = false
    } else if ((curr + s[index + 1]) in exclude) {
      prev.val = prev.val + exclude[curr + s[index + 1]]
      prev.pass = true
    } else {
      prev.val += roman[curr]
    }
    prev.pre = curr
    return prev
  }, { val: 0, pre: '', pass: false })
  return result.val
};

module.exports.romanToInt = romanToInt