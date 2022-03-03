/**
 * @param {string} s
 * @return {number}
 */

// var lengthOfLongestSubstring = function(s){
//     let slow = 0, fast = 0;
//     let max = 0;
//     let map = {};
    
//     while (fast < s.length){
//         let sub = s.slice(slow, ++fast);
//         max = Math.max(max, fast - slow)
//         while (sub.includes(s[fast])){
//             sub = s.slice(++slow, fast)
//         }
//     }
//     return max;
// }


//time O(n);
//space O(n)

//using set
var lengthOfLongestSubstring = function(s){
    let set = new Set();
    let slow = 0, fast = 0;
    let max = 0;
    
    while (fast < s.length){
        if (!set.has(s[fast])){
            set.add(s[fast]);
            max = Math.max(max, fast-slow+1);
            fast++;
        }else{
            set.delete(s[slow])
            slow++;
        }
    }
    return max;
}