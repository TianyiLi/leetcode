const { longestCommonPrefix } = require('../case/014-longestCommonPrefix')
const assert = require('assert')

describe('longestCommonPrefix test', () => {
  it('["flower","flow","flight"] to fl', () => {
    assert.equal(longestCommonPrefix(["flower", "flow", "flight"]), 'fl')
  })
  it('["dog","racecar","car"] to ""', () => {
    assert.equal(longestCommonPrefix(["dog", "racecar", "car"]), '')
  }),
    it('["aa", "aa"] to "aa', () => {
      assert.equal(longestCommonPrefix(["aa", "aa"]), 'aa')
    })
  it('["ca", "a"] to ""', () => {
    assert.equal(longestCommonPrefix(["ca", "a"]), '')
  })
})