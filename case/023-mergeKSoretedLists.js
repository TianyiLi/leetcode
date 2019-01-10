const ln = require('../lib/linkNode')
let ListNode = ln.ListNode
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let result = new ListNode(0)
  let findMin = (a, b, c, obj) => ({obj:obj[Math.min(a,b,c)], i:Math.min(a,b,c)})
  let c = result
  
};

module.exports.mergeKLists = mergeKLists
