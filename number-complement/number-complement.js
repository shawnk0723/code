/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num){
    let n = num, ans = 1;
    while (n){
        ans *= 2;
        n = n >> 1
    }
    ans--;
    return num ^ ans;
}
//time: O(n)
//space: O(1)

//num^ans-1 === ans - num -1

// var findComplement = function(num) {    
//     let d = 2;
//     while (d <= num) {
//         d *= 2;
//         console.log(d)
//     }    
//     return d - num - 1;
// };