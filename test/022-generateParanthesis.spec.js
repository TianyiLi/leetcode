const { generateParenthesis } = require('../case/022-generateParanthesis.js')
const assert = require('assert')

describe('generateParanthesis test', () => {
  before(() => { console.time("generateParanthesis") })
  after(() => { console.timeEnd("generateParanthesis") })
  it ('should be equal', () => {
    let a = [
      "((()))",
      "(()())",
      "(())()",
      "()(())",
      "()()()"
    ]
    assert.deepEqual(generateParenthesis(3), a)
  })
})