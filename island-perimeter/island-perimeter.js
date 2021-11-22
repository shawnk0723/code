/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let cnt = 0;
    
    for (let i=0; i < grid.length; i++){
        for (let j=0; j < grid[0].length;j++){
            if(grid[i][j] ===1){
                cnt+=4;
                if(i>0 && grid[i-1][j]===1)cnt--
                if(i<grid.length-1 && grid[i+1][j]===1)cnt--
                if(j>0 && grid[i][j-1]===1)cnt--
                if(j<grid[0].length-1&&grid[i][j+1]===1)cnt--;
            }
        }
    }
    return cnt;
    
};
//time O(n*m)
//space O(1)