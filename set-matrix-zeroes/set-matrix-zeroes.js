/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let row = matrix.length;
    let col = matrix[0].length;
    let rowZero = false;
    
    //marking
    for (let r = 0; r < row; r++){
        for ( let c = 0; c < col;c++){
            if (matrix[r][c] === 0){
                //mark cols
                matrix[0][c] = 0;
                if (r > 0){
                    //mark rows
                    matrix[r][0] = 0;
                }else {
                    rowZero = true;
                }
            }
        }
    }
    
    //zero out most 
    for (let r = 1; r < row; r++ ){
        for ( let c = 1; c < col; c++){
            if (matrix[0][c] === 0 || matrix[r][0] === 0){
                matrix[r][c] = 0;
            }
        }
    }
    
    //zero out first column
    if (matrix[0][0]===0){
        for (let r =0; r < row; r++){
            matrix[r][0] = 0;
        }
    }
    
    //zero out first row
    if (rowZero){
        for (let c =0; c < col; c++){
            matrix[0][c] = 0;
        }
    }
    
}

//time O(m*n)
//space O(1)

