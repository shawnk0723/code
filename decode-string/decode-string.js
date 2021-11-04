/**
 * @param {string} s
 * @return {string}
 */


var decodeString = function(s) {
    const stack = [];
    let curStr = '', k = 0;
    
    for (let i = 0; i < s.length; ++i) {
        const char = s[i];
        if(char === '['){
            stack.push([curStr, k]);
            curStr = '';
            k = 0;
        }else if (char === ']') {
            const [prevStr, times] = stack.pop();
            curStr = prevStr + curStr.repeat(times);
        }else if(char.charCodeAt(0) >=48 && char.charCodeAt(0) <=57) {
            k = k * 10 + parseInt(char);
        }else {
            curStr += char;
        }
    }
    return curStr;
};