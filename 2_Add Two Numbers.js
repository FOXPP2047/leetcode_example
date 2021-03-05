/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const dummy = new ListNode(0); //next node to start
    let result = dummy;
    let carry = 0;
    
    while(l1 || l2 || carry) {
        let val = carry;
        carry = 0;
        if(l1) {
            val += l1.val;
            l1 = l1.next;
        }
        if(l2) {
            val += l2.val;
            l2 = l2.next;
        }
        
        if(val > 9) {
            val -= 10;
            carry = 1;
        }
        let newNode = new ListNode(val);
        result.next = newNode;
        result = result.next;
    }
    return dummy.next;
};//dummy.next

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode();
    let curr = dummy;
    
    let carry = 0;
    
    while(l1 || l2 || carry) {
        let sum = carry;
        carry = 0;
        
        if(l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        
        if(l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        
        if(sum >= 10) {
            sum -= 10;
            carry = 1;
        }
        
        let temp = new ListNode(sum);
        curr.next = temp;
        curr = curr.next;
    }
    
    return dummy.next;
};