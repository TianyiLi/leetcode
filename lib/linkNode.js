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

module.exports = {
  deCode,
  gen,
  ListNode
}