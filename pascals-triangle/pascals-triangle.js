/**
 * @param {number} numRows
 * @return {number[][]}
 */

// var generate = function(numRows) {
//     let res = [[1]]
//       for(let i=1; i < numRows; i++){
//           tmp = res[i-1].push(0)
//           tmp = res[i-1].unshift(0)
//           let row = [];
//           for(let j=0; j < (res[i-1].length)+1;j++){
//               row.push(tmp[j] + tmp[j+1])
//           }
//           res.push(row)
//       }
//     return res;

// }

var generate = function(numRows){
    let res = [];
    
    if(numRows == 0)return res;
    
    res.push([1])
    
    for(let i = 1; i < numRows; i++){
        let prevRow = res[i-1];
        let newRow = [];
        
        newRow.push(1)
        
        for (let j=1; j < prevRow.length;j++){
            newRow.push(prevRow[j-1]+prevRow[j])
        }
        
        newRow.push(1)
        res.push(newRow)
    }
    return res;
}

//time O(n^2)
//space O(n^2)