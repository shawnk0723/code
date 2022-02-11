/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freqMap = new Map();
    const bucket = [];
    const result = [];
    
    for(let num of nums){
        freqMap.set(num, (freqMap.get(num) || 0)+1)
    }
    
    for(let [key,value] of freqMap){
        if(typeof bucket[value]==='object'){
        bucket[value].push(key);
        }else{
            bucket[value] = [key];
        }
        // console.log(bucket)
    }
    
    for(let i = bucket.length-1; i>=0;i--){
        if(bucket[i]) result.push(...bucket[i]);
        if(result.length===k)return result;
    }
};
//time O(n)
//space O(n)