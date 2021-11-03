/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  let res = new Array(temperatures.length).fill(0);
    let stack = [];
    
    for(let i=0; i < temperatures.length; i++){
        while(stack && temperatures[i] > temperatures[stack[stack.length-1]]){
            let index = stack.pop();
            res[index] = i - index;
        }
        stack.push(i)
    }
    return res;
};

//time: O(n)
//space: O(n)