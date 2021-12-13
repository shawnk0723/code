/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head || !head.next) return;
    
    //find middle
    let slow = head, fast = head.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    //reverse second half so they point to same direction as first half
    let second = slow.next;
    slow.next = null;
    
    let prev = null;
    while (second) {
        let tmp = second.next;
        second.next = prev;
        prev = second;
        second = tmp;
    }
    
    //merge two sorted lists
    let first = head;
    second = prev;
    while (second) {
        let tmp1 = first.next, tmp2 = second.next;
        first.next = second
        second.next = tmp1;
        [first, second] = [tmp1, tmp2];
    }
    
};

//time O(n)
//space O(1)