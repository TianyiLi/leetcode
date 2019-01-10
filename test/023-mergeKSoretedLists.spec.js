const { mergeKLists } = require('../case/023-mergeKSoretedLists.js')
const ln = require('../lib/linkNode.js')
const assert = require('assert')

describe('mergeKSoretedLists test', () => {
  before(() => { console.time("mergeKLists") })
  after(() => { console.timeEnd("mergeKLists") })
  it('should correct', () => {
    let a = [
      [1, 4, 5],
      [1, 3, 4],
      [2, 6]
    ]
    assert.deepEqual(a.map(e => ln.gen(e)), [1, 1, 2, 3, 4, 4, 5, 6])
  })
})