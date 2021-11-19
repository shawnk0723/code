/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const numSet = new Set(nums);
    let maxLen = 0;
    
    for (let n of numSet){
        if(!numSet.has(n-1)){
            let len = 0;
            while(numSet.has(n+len))len++;
            maxLen = Math.max(maxLen, len);
        }
    }
    return maxLen;
};

//time O(n)
//space O(n)