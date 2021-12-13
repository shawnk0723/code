/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let prevMax = 1;
    let prevMin = 1;
    let res = Math.max(...nums);
    
    for (let n of nums) {
        curMax = Math.max(n * prevMax, n * prevMin, n)
        curMin = Math.min(n * prevMax, n * prevMin, n)
        prevMax = curMax;
        prevMin = curMin;
        
        res = Math.max(curMax, res);
    }
    return res;
};

//time O(n)
//space O(1);

