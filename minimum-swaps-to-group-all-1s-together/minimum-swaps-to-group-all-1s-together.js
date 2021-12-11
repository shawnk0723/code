/**
 * @param {number[]} data
 * @return {number}
 */
var minSwaps = function(data) {
    let windowSize = data.reduce((acc, cur) => acc + cur, 0);
    let minSwap = 0;
    
    for (let i = 0; i < windowSize; i++){
        if (data[i]===0)minSwap++;
    }
    
  
    let min = minSwap;
    for (let i = windowSize; i < data.length; i++){
        // console.log(i,windowSize)
        if (data[i-windowSize] == 0)min--;
        if (data[i] ==0)min++;
        minSwap = Math.min(minSwap, min);
    }
    return minSwap;
};