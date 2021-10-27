/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let p1 = headA;
    let p2 = headB;
    
    while (p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;
        
        if (p1 === p2) {
            return p1;
        }
        if (p1 === null){
            p1 = headB;
        }
        if (p2 === null) {
            p2 = headA;
        }
    }
    return p1;
};
//time: O(n)
//space: O(1)