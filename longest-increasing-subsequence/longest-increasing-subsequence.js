/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    function binarySearch(array, num){
        let left = 0, right = array.length;
        while (left < right){
            const mid = ~~((right-left)/2 + left);
            if(array[mid] < num) left = mid+1;
            else right = mid;
        }
        return right;
    }
    
    const array = [];
    
    for(const num of nums){
        const pos = binarySearch(array, num);
        // console.log(pos, array)
        if(pos === array.length)array.push(num);
        else array[pos]=num;
    }
    return array.length;
}

//time O(nlogn)
//space O(n)