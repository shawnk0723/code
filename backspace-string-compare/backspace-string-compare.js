/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  return edit(s) === edit(t);
    
    function edit(str){
        let res = '';
        let backspace = 0;
        
        for (let i= str.length -1; i >= 0; i--){
            if (str[i] === '#'){
                backspace +=1;
            }else if (backspace > 0){
                backspace--;
            }else {
                res = str[i] + res;
            }
        }
        return res;
    }
    
};

//time O(n)
//space O(1)