/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!(l1 || l2)) return new ListNode(0).next
  let result = new ListNode(0)
  let c = result
  while(l1 && l2) {
    if (l1.val > l2.val) {
      c.next = l2
      l2 = l2.next
    } else {
      c.next = l1
      l1 = l1.next
    }
    c = c.next
  }
  c.next = l1 || l2
  return result.next
};
module.exports.mergeTwoLists = mergeTwoLists
