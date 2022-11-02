/**
 * @param {character[][]} grid
 * @return {number}
 */


var numIslands = function(grid) {
let count = 0;    
    for(let i = 0; i <= grid.length - 1; i++){
        for(let j=0; j <= grid[i].length-1;j++ ){
            if( grid[i][j] === "1" ){
                count ++;
                dfs(grid,i,j);    
            }
        }  
    }
    console.log(grid[0],grid[1],grid[2],grid[3]);
    return count;
};


var dfs = function(grid,row,col) {

    if( row<0 || col<0 || row>grid.length - 1 || col>grid[row].length - 1 || grid[row][col] === "0" ) return;
    
    if( grid[row][col] === "1" ){
        grid[row][col] = "0";
        dfs(grid, row+1, col);
        dfs(grid, row-1, col);
        dfs(grid, row, col+1);
        dfs(grid, row, col-1);
    }
}