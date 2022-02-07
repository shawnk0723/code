/**
 * @param {number[][]} heights
 * @return {number[][]}
//  */
// var pacificAtlantic = function(heights) {
//     if (heights.length===0)return [];
//     let numRows = heights.length
//     let numCols = heights[0].length;
    
//     let atlantic = [], pacific = [];
//     for (let i = 0; i<numRows;i++){
//         atlantic.push(new Array(numCols).fill(false))
//         pacific.push(new Array(numCols).fill(false))
//     }
    
//     for (let col=0; col<heights[0].length;col++){
//         dfs(heights, 0, col, Number.MIN_SAFE_INTEGER, pacific)
//         dfs(heights, numRows-1, col, Number.MIN_SAFE_INTEGER, atlantic)
//     }
    
//     for (let row = 0; row<heights.length;row++){
//         dfs(heights, row, 0, Number.MIN_SAFE_INTEGER, pacific)
//         dfs(heights, row, numCols-1, Number.MIN_SAFE_INTEGER, atlantic)
//     }
    
//     let res = []
//     for (let i=0;i<numRows;i++){
//         for (let j=0; j<numCols;j++){
//             if(atlantic[i][j]&&pacific[i][j]){
//                 res.push([i, j])
//             }
//         }
//     }
//     return res;
// };

// const dfs = (matrix, i, j, prev, ocean) => {
//     if(i<0 || i>matrix.length-1 || j<0 || j>matrix[i].length-1)return
//     if (matrix[i][j] < prev)return
//     if (ocean[i][j])return
//     ocean[i][j] = true;
    
//     dfs(matrix, i+1, j, matrix[i][j], ocean)
//     dfs(matrix, i-1, j, matrix[i][j], ocean)
//     dfs(matrix, i, j+1, matrix[i][j], ocean)
//     dfs(matrix, i, j-1, matrix[i][j], ocean)
// }


var pacificAtlantic = function(heights) {
    //set amount of rows and columns to variables
    const numRows = heights.length;
    const numCols = heights[0].length;
    
    //create matrixes to hold which cells can visit each ocean
    const pacific = Array(numRows).fill().map(() => Array(numCols).fill(false));
    const atlantic = Array(numRows).fill().map(()=> Array(numCols).fill(false));
    // console.log(pacific, atlantic)
    
    //run dfs on first and last columns that touch an ocean
    for (let col=0; col<heights[0].length;col++){
        dfs(0, col, -Infinity, pacific)
        dfs(numRows -1, col, -Infinity, atlantic)
    }
    
    //run dfs on each cell on the top and bottom rows that touch an ocean
    for (let row = 0; row<heights.length;row++){
        dfs(row, 0, -Infinity, pacific)
        dfs(row, numCols -1, -Infinity, atlantic)
    }
    
    //starting from an edge of heights that touches an ocean, move inward and add all cells to the ocean matrix that can spill into the previously visited cell
    function dfs(i, j, prev, ocean){
        //stop dfs if we given coordinates that are not on the board, if the value of the cell we are visiting cannot spill water into the previous cell, or if we have already visited this cell
        if (i<0 || i >= numRows || j < 0 || j >= numCols || heights[i][j] < prev || ocean[i][j]){
            return;
        }
        //set this cell as visited by the current ocean
        ocean[i][j] = true
        
        //look in all directions to find more nodes that can visit the current ocean
        dfs(i+1, j, heights[i][j], ocean)
        dfs(i-1, j, heights[i][j], ocean)
        dfs(i, j+1, heights[i][j], ocean)
        dfs(i, j-1, heights[i][j], ocean)
    }
    const res = [];
    
    //check which cells [i,j] are able to touch both oceans by checking if a cell is in both ocean matrixes
    for (let i=0; i<numRows;i++){
        for (let j=0; j<numCols;j++){
            if(atlantic[i][j]&&pacific[i][j]){
                res.push([i,j])
            }
        }
    }
    return res;
}
//time O(n*m)
//space O(n*m)
