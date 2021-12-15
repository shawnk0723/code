/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
//     let set = new Set();
    
//     for (let n of nums) {
//         if (set.has(n))return true;
//         set.add(n)
//     }
//     return false;
// };

//time O(n)
//space O(1)

//1-line

var containsDuplicate = function(nums){
    return new Set(nums).size < nums.length;
}

//time&space O(1)
