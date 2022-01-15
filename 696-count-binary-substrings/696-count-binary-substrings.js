/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let prev=0, cur=1, cnt=0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i+1]) {
            cur++;
        } else {
            cnt += Math.min(cur, prev)
            prev = cur;
            cur = 1;
        }
    }
 
    return cnt;
};

//time:O(n)
//space: O(1)