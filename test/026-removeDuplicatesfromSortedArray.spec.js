const { removeDuplicates } = require('../case/026-removeDuplicatesfromSortedArray.js')
const assert = require('assert')

describe('removeDuplicatesfromSortedArray test', () => {
  before(() => { console.time("removeDuplicates") })
  after(() => { console.timeEnd("removeDuplicates") })
  it('[1,1,2] to 2', () => {
    let n = [1, 1, 2]
    assert.deepEqual(removeDuplicates(n), 2)
    assert.deepEqual(n, [1, 2])
  })
  it('[0,0,1,1,1,2,2,3,3,4] to 5', () => {
    let n = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
    assert.deepEqual(removeDuplicates(n), 5)
    assert.deepEqual(n, [0, 1, 2, 3, 4])
  })
})