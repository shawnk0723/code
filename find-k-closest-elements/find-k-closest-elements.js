/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    
    while (arr.length > k) {
        let diff_end = Math.abs(arr[arr.length-1] - x);
        let diff_start = Math.abs(arr[0] -x);
        
        if (diff_end >= diff_start) {
            arr.length--;
        } else if (diff_end < diff_start) {
            arr.shift();
        }
    }
    return arr
}

//time: O(n)
//space: O(1)

