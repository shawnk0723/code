/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];
    
    function backtrack(open, close, s){
        if(open > close)return;
        if(open==0 && close==0){
            res.push(s)
            return;
        }
        if(open>0)backtrack(open-1, close,s+'(');
        if(close>0)backtrack(open, close-1, s+')')
    }
    backtrack(n,n,'');
    return res;
};

//time O(n)
//space O(n)