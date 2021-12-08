/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const ROWS = board.length, COLS = board[0].length;
    
    function dfs(r, c, i){
        if (i === word.length)return true;
        if (r<0 || r>=ROWS || c<0 || c>=COLS || word[i] !== board[r][c])return false;
        
        board[r][c] = 0;
        if(dfs(r+1,c,i+1)||dfs(r-1,c,i+1)||dfs(r,c+1,i+1)||dfs(r,c-1,i+1))return true;
        board[r][c]=word[i];
        
    }
    for(let r = 0; r < ROWS; r++){
        for(let c=0; c < COLS; c++){
            if (dfs(r,c,0)) return true
        }
    }
    return false;
};

//time:O(mn*4^w)
//space: O(1)