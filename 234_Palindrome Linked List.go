/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func isPalindrome(head *ListNode) bool {
    arr := []int {}
    
    for head != nil {
        arr = append(arr, head.Val)
        head = head.Next
    }
    
    size := len(arr)
    
    for i := 0; i < size / 2; i++ {
        if arr[i] == arr[size - i - 1] {
            continue
        } else {
            return false
        }
    }
    return true
}