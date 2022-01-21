/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     let map = new Map();
    
//     for (let i = 0; i < nums.length; i++) {
//         let num1 = nums[i];
//         let num2 = target - num1;
//         if (map.has(num2) ){
//             return [i, map.get(num2)]
//         }
//         map.set(num1, i)
//     }
    
    
// };

// var twoSum = function(nums, target){
//     let map = new Map();
    
//     for (let i = 0; i < nums.length; i++){
//         let num1 = nums[i];
//         let num2 = target - num1;
//         if (map.has(num2)) return [i, map.get(num2)]
//         map.set(num1, i)
//     }
    
// }
//time O(n)
//space O(n)

var twoSum = function(nums, target){
    let map = new Map();
    
    for(let i = 0; i < nums.length; i++){
        let need = target - nums[i];
        
        if (map.has(need))return [i, map.get(need)]
        map.set(nums[i], i);
    }
}
//time O(n)
//space O(n)