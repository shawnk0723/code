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