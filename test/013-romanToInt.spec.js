const { romanToInt } = require('../case/013-romanToInt')
const assert = require('assert')

describe('roman to int test', () => {
  it('III should equal 3', () => {
    assert.equal(romanToInt('III'), 3)
  })
  it('IV should equal 4', () => {
    assert.equal(romanToInt('IV'), 4)
  })
  it('III should equal 9', () => {
    assert.equal(romanToInt('IX'), 9)
  })
  it('LVIII should equal 58', () => {
    assert.equal(romanToInt('LVIII'), 58)
  })
  it('MCMXCIV should equal 1994', () => {
    assert.equal(romanToInt('MCMXCIV'), 1994)
  })
  it('MCDLXXVI should equal 1476', () => {
    assert.equal(romanToInt("MCDLXXVI"), 1476)
  })
})