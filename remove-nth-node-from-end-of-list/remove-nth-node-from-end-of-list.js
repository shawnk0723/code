/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n){
    let dummy = new ListNode(0, head);
    let l = dummy, r = head;
    
    for (let i = 0; i < n; i++){
        r = r.next
    }
    while (r){
        r = r.next;
        l = l.next;
    }
    l.next = l.next.next;
    return dummy.next;
}

//time O(n)
//space O(1);
