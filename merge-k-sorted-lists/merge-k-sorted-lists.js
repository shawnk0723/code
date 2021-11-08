/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeKLists = function(lists) {
    if (lists.length === 0){
        return null;
    }
    while (lists.length > 1){
        
        let a = lists.shift();
        let b = lists.shift();
        let merged = merge(a,b);
        lists.push(merged)
    }
    return lists[0];
}

var merge = function(a, b) {
    let dummy = new ListNode(0);
    let tail = dummy;
    
    while (a&&b) {
        if (a.val < b.val) {
            tail.next = a;
            a = a.next;
        }else {
            tail.next = b;
            b = b.next;
        }
        tail = tail.next;
    }
    tail.next = a || b;
    return dummy.next;
}
//time: O(nlogk)
//space: O(n)
//(n=num of nodes in a list)
//(k=num of lists)