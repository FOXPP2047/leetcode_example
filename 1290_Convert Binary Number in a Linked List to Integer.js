/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let binaryString = "";
    while(head) {
        binaryString += head.val;
        head = head.next;
    }
    const arr = Array.from(binaryString);
    let binaryValue = 1;
    let result = 0;
    for(let i = arr.length - 1; i >= 0; --i) {
        if(arr[i] === "1") {
            result += binaryValue;
        } 
        binaryValue *= 2;
    }
    return result;
};