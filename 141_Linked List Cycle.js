/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head) return false;
    
    let fast = head.next;
    let slow = head;
    
    while(slow !== fast) {
        if(!fast || !fast.next) return false;
        
        slow = slow.next;
        fast = fast.next.next;
    }

    return true;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head || !head.next) return false;
    let set = new Set();
    let curr = head;
    while(curr) {
        if(set.has(curr)) return true;
        
        set.add(curr);
        curr = curr.next;
    }
    return false;
};