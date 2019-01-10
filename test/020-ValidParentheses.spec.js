const { isValid } = require('../case/020-ValidParentheses.js')
const assert = require('assert')

describe('ValidParentheses test', () => {
  before(() => {
    console.time('test')
  })
  after(() => {
    console.timeEnd('test')
  })
  it('() should be true', () => {
    assert.equal(isValid('()'), true)
  })
  it('"()[]{}" should be true', () => {
    assert.equal(isValid("()[]{}"), true)
  })
  it('"(]" should be false', () => {
    assert.equal(isValid("(]"), false)
  })
  it('"([)]" should be true', () => {
    assert.equal(isValid("([)]"), false)
  })
  it('"{[]}" should be true', () => {
    assert.equal(isValid("{[]}"), true)
  })
})