/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if(head == null || head.next == null) return head
  /** @type {ListNode[][]} */
  let stack = []
  /** @type {number[][]} */
  let nStack = []
  
  let tmp = head
  for(let i = 1, chain1=[], chain2=[]; tmp !== null ; i++) {
    chain1.push(tmp)
    chain2.push(tmp.val)
    tmp = tmp.next
    if (i % k === 0) {
      stack.push(chain1)
      nStack.push(chain2)
      chain1 = []
      chain2 = []
    }
  }
  nStack.forEach((nS, i) => {
    nS.reverse().forEach((n) => stack[i].shift().val = n)
  })
  return head
};

module.exports.reverseKGroup = reverseKGroup