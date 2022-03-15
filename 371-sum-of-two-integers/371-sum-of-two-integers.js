/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

var getSum = function(a,b){
    //get &, ^
    let carry;
    while(b!==0){
        carry = (a & b) << 1;//since when both 1 it has to carry. then shift to next digit.
        a = a ^ b // add using ^
        b = carry// do this until carry is 0
    }
    return a;
}



/*
Approach:
XOR - for adding, but need to deal with carry
8 = 1000, 9 = 1001
8 ^ 9 = 0001

For carry at the 4th bit, we can use AND
8 & 9 = 1000 (this shows bit positions from where carry needs to be forwarded to the next bit addition)

since carry is forwarded to the next bit addition, shift the carry to the left
=> 8 & 9 << 1 => 10000

then we add:
10000 ^ 0001 = 10001 (17)

Will have to keep on doing this until carry is 0.
*/



// var getSum = function(a, b) {
//     let carry;
//     while(b!==0){
//         carry = (a&b) << 1;
//         console.log(carry)
//         a = a ^ b;
//         b = carry;
//     }
//     return a;
// };

//time O(1)
//space O(1)
//0001 & 0010 = 0000
//0000 << 1 = 0000
//0001 ^ 0010 = 0011
//since carry is 0 b==0 so returns 0011(3)






/*
a = 8 = 1000
b = 9 = 1001

8 ^ 9 = 0001 = 1
8 & 9 = 1000 = 8
1000 << 1 = 10000 = 16

a = 00001
b = 10000

1 ^ 16 = 10001 = 17
1 & 16 = 00000 = 0
*/