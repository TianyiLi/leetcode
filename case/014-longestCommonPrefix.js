/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs || !strs.length) return ''
  if (strs.length === 1) return strs[0]
  let ln = Math.min(...strs.map(e => e.length))
  let s = '',  tmp = ''
  let _s = strs.pop()
  for (let i = ln; i >= 0; i--) {
    tmp = _s.substr(0, i)
    if (strs.every(str => str.startsWith(tmp))) {
      s = tmp
      break
    }
  }
  return s
  // return strs[0].split('').reduce((prev, curr) => {
  //   if (strs.every(str => !!~str.indexOf(prev.candidates + curr))) {
  //     prev.candidates = prev.candidates + curr
  //   } else if (strs.every(str => !!~str.indexOf(prev.sec + curr))) {
  //     prev.sec = prev.sec + curr
  //     if (prev.sec.length > prev.candidates) {
  //       prev.candidates = prev.sec
  //       prev.sec = ''
  //     }
  //   } else if (strs.every(str => !!~str.indexOf(curr))) {
  //     prev.sec = curr
  //   }
  //   return prev
  // }, {candidates: '', sec: ''}).candidates
};

module.exports.longestCommonPrefix = longestCommonPrefix