/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let i = 0, j = 0;
    
    while (i < chars.length) {
        let cnt = 1;
        while (i < chars.length && chars[i] === chars[i + 1]) {
            cnt++;
            i++;
        }
        chars[j++] = chars[i++];
        
        if (cnt > 1) {
            cnt.toString().split("").forEach((char) => chars[j++] = char)
        }
        
    }
    return j;
};

//time: O(n)
//space: O(1)