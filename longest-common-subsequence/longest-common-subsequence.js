/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(str1, str2) {
    var arr = Array(str1.length + 1).fill(0).map(()=>Array(str2.length + 1).fill(0));
   for(let i = 0;i<str1.length;i++){
     for(let j = 0; j<str2.length;j++){
       if(str1[i]==str2[j]){
         arr[i+1][j+1] = arr[i][j] + 1;
       } else {
         arr[i+1][j+1] = Math.max(arr[i][j+1], arr[i+1][j]);
       }
     }
   }
  return(arr[str1.length][str2.length]); 
};
//time O(n*m)
//space O(n*m)