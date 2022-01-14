/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2){
        let dummy = new ListNode()
        let tail = dummy;
        
        while (l1 && l2) {
            if (l1.val < l2.val) {
                tail.next = l1
                l1 = l1.next;
            }else {
                tail.next = l2;
                l2 = l2.next;
            }
            tail = tail.next;
        }
        tail.next = l1 || l2
        return dummy.next;
  }

//time O(n+m)
//space O(n+m)
