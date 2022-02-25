/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    //base case
    if (!p||!p.length) return !Boolean(s.length);
    
    //first char match condition
    const first_match = s.length && (p[0] === s[0] || p[0] === '.');
    
    if (p.length > 1 && p[1] === '*') {
        //if the second char is wildcard, then result to two cases:
        
        //1. the first char doesn't match, so the second wildcard can repeat the first char of p 0 times
        //then continue to match the rest part of s
        const condition1 = isMatch(s, p.substring(2));
        //Example
        //s: aab
        //p: c*a*b*
        
        //explanation: c* can repeat c 0 times, then continue to match s with the rest part of p
        
        //2. the first char does match, so the second wildcard can repeat the first char any times then continue to match the rest part of s
        const condition2 = first_match && isMatch(s.substring(1), p);
        //Example 1
        //s: aa
        //p: a*
        
        //explanation: a* can repeat a two times then becomes aa which matches aa
        
        //example 2
        //s: ab
        //p: .*
        
        //explanation: .* can repeat . two times then becomes .. which matches ab
        return condition1 || condition2;
    }else {
        //the normal case is to match the first char then recursively match the rest chars
        return first_match && isMatch(s.substring(1), p.substring(1));
    }
    
};