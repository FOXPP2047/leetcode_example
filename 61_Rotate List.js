/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let [len, tail] = getLengthTail(head);
    let times = k % len;
    
    if(!times || !len) return head;
    tail.next = head;
    
    return breakCircleList(head, len - times);
};

const breakCircleList = (head, k) => {
    let p = head;
    while(k > 0) {
        --k;
        p = head;
        head = head.next;
    }
    p.next = null;
    return head;
}

const getLengthTail = (head) => {
    let length = 0;
    let tail = head;
    
    while(head) {
        ++length;
        tail = head;
        head = head.next;
    }
    
    return [length, tail];
}