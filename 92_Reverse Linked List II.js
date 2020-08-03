/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    let dummy = new ListNode(undefined);
    let sentinel = dummy;
    sentinel.next = head;
  
    for(let i = 1; i < m; ++i) {
        sentinel = sentinel.next;
    }
  
    let curr = sentinel.next;
    let next = curr.next;
    let count = n - m;
    
    for(let i = 0; i < count; ++i) {
        curr.next = next.next;
        next.next = sentinel.next;
        sentinel.next = next;
        
        next = curr.next;
    }
    return dummy.next;
};