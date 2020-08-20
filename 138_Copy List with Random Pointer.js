/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if(!head) return null;
    let count = 0;
    
    const map = new Map();
    let temp = head;
    while(temp) {
        map.set(temp, new Node(temp.val));
        temp = temp.next;
    }
    
    temp = head;
    while(temp) {
        if(map.get(temp.next)) {
            map.get(temp).next = map.get(temp.next);
        } else map.get(temp).next = null;
        
        if(map.get(temp.random))  {
            map.get(temp).random = map.get(temp.random);
        } else map.get(temp).random = null;
        
        temp = temp.next;
    }

    return map.get(head);
};