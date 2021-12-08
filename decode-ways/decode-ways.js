/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s == null || s.length == 0) return 0;
    if (s[0] === '0') return 0;
    
    //+1 considering there's empty string
    const dp = new Array(s.length +1).fill(0);
    
    dp[0]=1;
    dp[1]=1;
    
    for (let i =2; i<= s.length;i++){
        const oneD = Number(s.slice(i-1,i));
        const twoD = Number(s.slice(i-2, i));
        if( oneD >= 1){
            dp[i] += dp[i-1];
        }
        if(twoD >= 10 && twoD <= 26){
            dp[i] += dp[i-2];
        }
    }
    return dp[s.length]; 
    
};

//time:O(n);
//space:O(n)