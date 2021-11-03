/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let greatest = {};
    let stack = [];
    for (n of nums2) {
        while (stack && n > stack[stack.length-1]){
            greatest[stack.pop()] = n
        }
        stack.push(n)
    }
    
    let output = [];
    for (n of nums1) {
        if (greatest[n]) {
            output.push(greatest[n])
        }else{
            output.push(-1)
        }
    }
    return output
};
//time: O(n)
//space: O(n)