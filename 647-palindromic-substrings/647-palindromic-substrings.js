/**
 * @param {string} s
 * @return {number}
 */

var countSubstrings = function(s){
    let cnt = 0;
    for (let i = 0; i < s.length; i++){
        helper(s, i, i)//odd pal
        helper(s, i, i+1)//even pal
    }
    
    function helper(s,l,r){
        while (l >= 0 && r <= s.length && s[l] === s[r]){
            cnt++;
            l--;
            r++;
        }
    }
    return cnt;
}




// var countSubstrings = function(s) {
//     let cnt = 0;
//     for (let i=0; i<s.length;i++){
//         helper(s, i, i);//odd pal
//         helper(s, i, i+1);//even pal
//     }
//     return cnt;
    
//     function helper(s, low, high){
//         while(low>=0 && high <=s.length && s[low]===s[high]){
//             cnt++;
//             low--;
//             high++;
//         }
//     }
// };

//time O(n^2)
//space O(1)