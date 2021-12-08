/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

var minWindow = function(s, t)
{
    var need = {};
    var window = {};
    
    var left = 0, right = 0;
    var have = 0;
    var minLen = Infinity;
    var start = 0;
    
    if(s.length < t.length)return "";
        
    for(let c of t)need[c] = (need[c] || 0)+1;

    
    while(right < s.length){
           window[s[right]] = (window[s[right]] || 0)+1;
            //taking ch
            if(need[s[right]] && need[s[right]] == window[s[right]]){
                have++;
            }
            //check if it has all ch needed
            while(have == Object.keys(need).length){
                //update window
                    if (right - left+1  < minLen){
                             start = left;
                             minLen = right - left +1;
                        }
                    window[s[left]] -=1;
                    
                    if(need[s[left]]&& window[s[left]]<need[s[left]]){
                        have--;
                    }            
                    left++;
            }
        right++;
        }
    // console.log(left, right)
    return minLen == Infinity ? "" : s.substring(start, minLen + start);
};
//time: O(s+t)
//space: O(s+t)



// var minWindow = function(s, t) {
//     //get mapT, countT
//     //l, r of sub window
//     //when formed != countT, r++
//     //when formed == countT, track min, l++
//     var l=0, r=0, n=s.length, mapT={}, map={}, countT=0;
    
//     if(n<t.length){
//         return "";
//     }
    
//     //mapT
//     for(var i = 0; i < t.length; i++){
//         var c = t.charAt(i);
//         if(mapT[c] === undefined) {
//             mapT[c] = 1;
//             countT++;
//         } else {
//             mapT[c]++;
//         }
//     }
//     //map
//     var formed = 0;
//     var min = [0, n-1, Number.MAX_SAFE_INTEGER]; // l, r, length
//     while(r < n) {
//         var c = s.charAt(r);
//         if(map[c] === undefined) {
//             map[c] = 1;
//         } else {
//             map[c]++;
//         }
 
//     //check map === mapT to update formed status 
//     if(mapT[c] && map[c] === mapT[c]) {
//         formed++;
//     }
    
//     //when formed--, it will break out of this while
//     while(formed == countT && l<=r) {
//         var cL = s.charAt(l);
//         //update min here
//         if((r-l+1) < min[2]) {
//             min = [l, r, (r-l+1)]
//         }
//         map[cL]--;
//         if(mapT[cL] && map[cL] < mapT[cL]){
//             formed--;
//         }
//         l++;
//     }
    
//     r++;
// }
// if(min[2] === Number.MAX_SAFE_INTEGER) {
//     return "";
// }    
// return s.substring(min[0], min[1]+1);
// };
//time: O(n)
//space: O(n)