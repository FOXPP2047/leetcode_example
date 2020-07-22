/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let temp = head;
    let i = 0;
    while(temp) {
        ++i;
        temp = temp.next;
    }
    
    const halfSize = Math.floor(i / 2);
    
    for(let i = 0; i < halfSize; ++i) {
        head = head.next;
    }
    return head;
};