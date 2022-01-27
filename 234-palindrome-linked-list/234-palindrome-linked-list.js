/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow = head, fast = head;
    
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    slow = reverse(slow)
    fast = head;
    
    while (slow) {
        if (slow.val !== fast.val) {
            return false;
        }
        slow = slow.next;
        fast = fast.next;
    }
    return true;
};

var reverse = function(head) {
    let prev = null;
    
    while (head !== null) {
        next = head.next;
        head.next = prev;
        prev = head
        head = next
        
    }
    return prev
}



//time: O(n)
//space: O(1)