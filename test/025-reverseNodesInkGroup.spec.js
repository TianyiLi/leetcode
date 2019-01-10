const { reverseKGroup } = require('../case/025-reverseNodesInkGroup')
const assert = require('assert')

function ListNode (val) {
  this.val = val
  this.next = null
}
/**
 * 
 * @param {number[]} arr 
 */
function gen(arr) {
  let result = new ListNode(arr.shift())
  arr.reduce((prev, next) => {
    prev.next = new ListNode(next)
    return prev.next
  }, result)
  return result
}

function deCode(ln) {
  let result = []
  while(ln !== null) {
    result.push(ln.val)
    ln = ln.next
  }
  return result
}

describe('reverseKGroup test', () => {
  before(() => {
    console.time('reversKGroup')
  })
  after(() => {
    console.timeEnd('reversKGroup')
  })
  it('Should be Correct', () => {
    let assign = gen([1,2,3,4,5])
    assert.deepEqual(deCode(reverseKGroup(assign, 2)).join(), [2,1,4,3,5].join())
  })
})

