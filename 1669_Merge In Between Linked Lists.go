/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func mergeInBetween(list1 *ListNode, a int, b int, list2 *ListNode) *ListNode {
    dummy := &ListNode{0, nil}
    dummy.Next = list1
    temp := list1
    
    for a > 0 || b > 0 {
        a--
        b--
        if a > 0 {
            list1 = list1.Next
        }
        
        if b >= 0 {
            temp = temp.Next
        }
    }
    list1.Next = list2
    
    for list2.Next != nil {
        list2 = list2.Next
    }
    list2.Next = temp.Next
    
    return dummy.Next
}