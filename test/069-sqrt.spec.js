const { mySqrt } = require('../case/069-sqrt')
const assert = require('assert')

describe('sqrt test', () => {
  it('should be 2', () => {
    assert.equal(2, mySqrt(4))
  })
  it ('should be 2', () => {
    assert.equal(2, mySqrt(8))
  })
})
