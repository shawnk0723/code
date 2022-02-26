/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    if(!wordDict || wordDict.length===0)return false;
    
    const dp = Array(s.length+1).fill(false);
    dp[s.length]=true;
    
    for (let i = s.length; i >= 0; i--){
        for (let w of wordDict){
            if (i+w.length <= s.length && s.slice(i, i+w.length) === w){
                dp[i] = dp[i+w.length]
            }
            if (dp[i])break;
        }
    }
    return dp[0]
};


//time O(m*n^2)

// var wordBreak = function(s, wordDict) {
//     //set all dp as false
//     let dp = Array(s.length+1).fill(false);
//     //set first dp true since it's empty string
//     dp[0] = true;
//     //start from idx 1 since dp[0] is filled and it means it reads string upto this idx
//     for (let end = 1; end < s.length+1; end++) {
//         //iterate till end
//         for(let start = 0; start < end; start++) {
//             //check dp is true and if subtring is in wordDict
//             if(dp[start] && wordDict.includes(s.substring(start,end))) {
//                 //set true if found in worddict
//              dp[end] = true; 
//              break;
//             }
//         }
//     }
//     //return last char
//     return dp[dp.length-1]
// };
