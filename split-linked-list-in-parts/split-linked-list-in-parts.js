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
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    const res = new Array(k).fill(null);
    let n = 0;
    let cur = head;
    
    while (cur != null) {
        n++;
        cur = cur.next;
    }
    
    const width = Math.floor(n/k);
    let rem = n%k;
    
    let root = head;
    let tail = head;
    
    
    for (let i = 0; root != null; i++){
        let w = width;
        
        if (rem > 0) {
            w +=1;
            rem--;
        }
        let tail = root;
        
        for (let j=1; j < w; j++){
            tail = tail.next;
        }
        
        
        const next = tail.next;
        tail.next = null;
        res[i] = root;
        root = next;
    }
    return res;
};

//time: O(n);
//space: O(k)