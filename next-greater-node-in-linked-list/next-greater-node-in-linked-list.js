/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
    let node = head;
    let result = [];
    
    while (node) {
        let nextNode = node.next
        let max = 0;    
        while (nextNode) {
            if (nextNode.val > node.val) {
                max = nextNode.val;
                break;
            }
            nextNode = nextNode.next;

        }
        result.push(max)
        node = node.next;
    }
        return result;
};

//time:O(n)
//space:O(n)