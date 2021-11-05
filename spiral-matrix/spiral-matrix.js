/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res = [];
    let startRow = 0;
    let endRow = matrix.length -1;
    let startCol = 0;
    let endCol = matrix[0].length -1;
    
    while (startRow <= endRow && startCol <= endCol) {
        //top row
        for (let col = startCol; col <= endCol; col++ ) {
            res.push(matrix[startRow][col]);
        }
        //right col
        for (let row = startRow+1; row <= endRow; row++) {
            res.push(matrix[row][endCol]);
        }
        //bottom row
        for (let col = endCol-1; col >= startCol; col--) {
            if (startRow === endRow )break;
            res.push(matrix[endRow][col])
        }
        //left col
        for (let row = endRow-1; row > startRow; row--){
            if (startCol === endCol)break;
            res.push(matrix[row][startCol])
        }
        startRow++;
        endRow--;
        startCol++;
        endCol--;
    }
    return res;
};

//time O(m*n)
//space O(m*n)