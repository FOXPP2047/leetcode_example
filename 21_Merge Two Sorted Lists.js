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
var mergeTwoLists = function(l1, l2) {
    if(!l1) return l2;
    else if(!l2) return l1;
    else if(l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};//Recursion

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
var mergeTwoLists = function(l1, l2) {
    let arr = [];
    
    while(l1 && l2) {
        arr.push(l1);
        arr.push(l2);
        l1 = l1.next;
        l2 = l2.next;
    }
    
    while(l1) {
        arr.push(l1);
        l1 = l1.next;
    }
    while(l2) {
        arr.push(l2);
        l2 = l2.next;
    }
    
    arr.sort((a, b) => a - b);
    
    let dummy = new ListNode();
    let newList = dummy.next;
    
    
    for(let i = 0; i < arr.length; ++i) {
        newList = new ListNode(arr[i]);
        newList = newList.next;
    }
    return dummy.next;
};