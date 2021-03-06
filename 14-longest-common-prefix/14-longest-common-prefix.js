/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length) return ''; 
    
    
    for(let i = 0; i < strs[0].length; i++) {
        for(let j =1; j < strs.length; j++) {
            // console.log(strs[j][i], strs[0][i])
            
            if(strs[j][i] !== strs[0][i]) {
               return strs[0].slice(0, i); 
            }
        }
    }
    return strs[0];
};

//time O(n)
//space O(1)