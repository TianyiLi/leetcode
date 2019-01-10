/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if(head == null || head.next == null) return head
  let prev = head
  let curr = head.next
  while(prev !== null && curr !== null) {
    [prev.val, curr.val] = [curr.val, prev.val]
    if (curr.next == null || curr.next.next == null) break
    prev = curr.next
    curr = curr.next.next
  }
  return head
};