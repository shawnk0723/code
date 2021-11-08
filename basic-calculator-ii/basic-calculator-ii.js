/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    if (s==null || s.length === 0)return null;
    
    // remove ""/space
    s = s.replace(/\s/g, '')
    
    let stack=[], n=0, sign='+';
    
    for (let i=0; i < s.length; i++){
        const c = s[i];
        
        //number
        if (/\d/.test(c)) n = n * 10 + Number(c);//'14' -> 1 * 10 + 4
        
        //sign or last number
        if (/\D/.test(c) || i === s.length-1) {
            if (sign === '-')stack.push(-n)
            else if (sign ==='+') stack.push(n);
            else if (sign ==='*') stack.push(stack.pop()*n);
            else if (sign === '/') stack.push(~~(stack.pop()/n));//same as Math.floor()

            sign = c;
            n = 0;
        }
    }
    return stack.reduce((a,b) => a+b);
    
};

//time: O(n)
//space: O(n)