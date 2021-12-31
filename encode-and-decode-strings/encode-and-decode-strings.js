/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
//  */

var encode = function(strs){
    let res = "";
    
    for (let str of strs){
        res += str.length.toString() + '#' + str;
    }
    // console.log(res)
    return res;
}

var decode = function(s) {
    let res = [];
    let i = 0;
    
    while (s.length > i){
        let j = i;
        while (s[j] !== '#'){
            j++;
        }
        let length = parseInt(s.slice(i, j))
        res.push(s.slice(j+1, j+1+length))
        i = j+1+length;
    }
    return res;
        
}
//time O(n)
//space 0(n)

// var encode = function(strs) {
//     let res = "";
//     for (let s of strs){
//         res += s.length.toString() + "#" + s
//         // console.log(res)
//     }
//     return res;
// };

// /**
//  * Decodes a single string to a list of strings.
//  *
//  * @param {string} s
//  * @return {string[]}
//  */
// var decode = function(s) {
//     let res =[], i=0;
//     while (i < s.length){
//         let j = i
//         while (s[j] !=='#'){
//             j+=1
//         }
//         let length = parseInt(s.slice(i,j))
//         // console.log(i,j)
//         res.push(s.slice(j+1, j+1+length))
//         // console.log(j+1, j+1+length)
//         i = j+1+length;
        
//     }
//     return res;
// };
//time O(n)
//space O(n)

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */