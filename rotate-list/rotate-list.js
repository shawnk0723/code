/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next) return head;
    
    let tail = head, length = 1;
    
    while (tail.next) {
        length++;
        tail = tail.next;    
    }
    
    //just to shorten the length
    k = k % length;
    if (k===0)return head;
    
    let cur = head;
    
    //move to pivot
    for (let i = 0; i < length-k-1; i++){
        cur = cur.next
        
    }
  
    nextHead = cur.next;
    cur.next = null;
    tail.next = head;
    return nextHead;
      
};

//time: O(n)
//space: O(1)