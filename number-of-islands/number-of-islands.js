/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function(grid) {
    if (!grid || grid.length==0)return 0;
    
    let inum = 0;
    for (let i = 0; i < grid.length;i++){
        for (let j = 0; j < grid[i].length; j++){
            if (grid[i][j] === '1'){
                inum +=gridCount(grid, i, j)
            }
        }
    }
    return inum;
}

function gridCount(grid, i, j){
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] ==="0")return 0;
    
    grid[i][j] = '0';
    gridCount(grid, i+1,j )
    gridCount(grid, i-1,j )
    gridCount(grid, i,j+1 )
    gridCount(grid, i,j-1 )
    
    return 1;
}

//time O(n*m)
//space O(1)