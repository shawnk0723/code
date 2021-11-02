/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let closing = {')':'(', '}':'{', ']':'['};
    let stack = [];
    
    for (char of s) {
        if (char in closing) {
            if (stack && closing[char] === stack[stack.length -1]){
                stack.pop();
            }else {
                return false;
            }
        }else {
            stack.push(char)
        }
    }
    return stack.length === 0;
};