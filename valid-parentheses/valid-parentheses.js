/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s){
    let closing = {')':'(', '}':'{', ']':'['};
    let stack = [];
    
    for (let ch of s) {
        if (ch in closing){
            if (stack && closing[ch] === stack[stack.length-1]){
                stack.pop();
            }else{
                return false;
            }
            
        }else {
            stack.push(ch);
        }
    }
    return stack.length === 0;
}

//time O(n)
//space O(n)

