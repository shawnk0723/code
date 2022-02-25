/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (string, pattern) => {
    // early return when pattern is empty
    if (!pattern) {
		// returns true when string and pattern are empty
		// returns false when string contains chars with empty pattern
        return !string;
    }
    
	// check if the current char of the string and pattern match when the string has chars
    const hasFirstCharMatch = Boolean(string) && (pattern[0] === '.' || pattern[0] === string[0]);

    // track when the next character * is next in line in the pattern
    if (pattern[1] === '*') {
        // if next pattern match (after *) is fine with current string, then proceed with it (s, p+2).  That's because the current pattern may be skipped.
        // otherwise check hasFirstCharMatch. That's because if we want to proceed with the current pattern, we must be sure that the current pattern char matches the char
		// If hasFirstCharMatch is true, then do the recursion with next char and current pattern (s+1, p).  That's because current char matches the pattern char. 
        return (
            isMatch(string, pattern.slice(2)) || 
            (hasFirstCharMatch && isMatch(string.slice(1), pattern))
        );
    }
    
    // now we know for sure that we need to do 2 simple actions
	// check the current pattern and string chars
	// if so, then can proceed with next string and pattern chars (s+1, p+1)
    return hasFirstCharMatch ? isMatch(string.slice(1), pattern.slice(1)) : false;
};

// var isMatch = function(s, p) {
//     //base case
//     if (!p||!p.length) return !Boolean(s.length);
    
//     //first char match condition
//     const first_match = s.length && (p[0] === s[0] || p[0] === '.');
    
//     if (p.length > 1 && p[1] === '*') {
//         //if the second char is wildcard, then result to two cases:
        
//         //1. the first char doesn't match, so the second wildcard can repeat the first char of p 0 times
//         //then continue to match the rest part of s
//         const condition1 = isMatch(s, p.substring(2));
//         //Example
//         //s: aab
//         //p: c*a*b*
        
//         //explanation: c* can repeat c 0 times, then continue to match s with the rest part of p
        
//         //2. the first char does match, so the second wildcard can repeat the first char any times then continue to match the rest part of s
//         const condition2 = first_match && isMatch(s.substring(1), p);
//         //Example 1
//         //s: aa
//         //p: a*
        
//         //explanation: a* can repeat a two times then becomes aa which matches aa
        
//         //example 2
//         //s: ab
//         //p: .*
        
//         //explanation: .* can repeat . two times then becomes .. which matches ab
//         return condition1 || condition2;
//     }else {
//         //the normal case is to match the first char then recursively match the rest chars
//         return first_match && isMatch(s.substring(1), p.substring(1));
//     }
    
// };