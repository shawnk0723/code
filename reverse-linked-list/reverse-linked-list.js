/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//iterative

var reverseList = function(head) {
    let prev = null;
    
    while (head) {
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}
//time O(n)
//space O(1)

//recursive
// var reverseList = function(head, prev=null) {
//     if (!head) return prev;
//     let next = head.next;
//     head.next = prev;
//     return reverseList(next, head)
// }

//time: O(n)
//space: O(n)
