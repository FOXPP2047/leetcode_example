/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const size = lists.length;
    let arr = [];
    for(let i = 0; i < size; ++i) {
        while(lists[i]) {
            arr.push(lists[i].val);
            lists[i] = lists[i].next;
        }
    }
    
    arr.sort((a, b) => a - b);
    
    const dummy = new ListNode(0);
    let list = dummy;
    
    for(let i = 0; i < arr.length; ++i) {
        let newList = new ListNode(arr[i]);
        list.next = newList;
        list = list.next;
    }
    return dummy.next;
};