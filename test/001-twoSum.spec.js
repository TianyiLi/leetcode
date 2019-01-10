const { twoSum } = require('../case/001-twoSum.js')
const assert = require('assert')

describe('twoSum test', () => {
  it('[2, 7, 11, 15] should be 9', () => {
    assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1])
  })
})