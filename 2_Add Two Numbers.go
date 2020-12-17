/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
    dummy := ListNode{0, nil}
    curr := &dummy
    carry := 0
    
    for l1 != nil || l2 != nil {
        var x, y int
		if (l1 == nil) {
			x = 0
		} else {
			x = l1.Val;
		}

		if (l2 == nil) {
			y = 0
		} else {
			y = l2.Val
		}
        
        sum := x + y + carry
        
        curr.Next = &ListNode{sum % 10, nil}
        carry = sum / 10
        
        curr = curr.Next
		if l1 != nil {
			l1 = l1.Next
		}

		if l2 != nil {
			l2 = l2.Next
		}
    }
    
    if carry != 0 {
		curr.Next = &ListNode{1, nil}
	}
    return dummy.Next
}