/**
 * @param {character[][]} picture
 * @return {number}
 */
var findLonelyPixel = function(picture) {
    
    
    let m = picture.length;
    let n = picture[0].length;
    
    let row_count = new Array(m).fill(0);
    let col_count = new Array(n).fill(0);
    
    for(let row = 0; row < m; row++){
        
        for(let col = 0; col < n; col++){
            
            if(picture[row][col] == 'B' ){
                row_count[row] += 1;
                col_count[col] += 1;
            }
        }
    }
    
    let sol = 0;
        for(let row = 0; row < m; row++){
        
        for(let col = 0; col < n; col++){
            
            if(picture[row][col] == 'B' ){
                
                if( ( row_count[row] == 1 ) && ( col_count[col] ==1 ) ) {
                    sol += 1;
                }
            }
        }
    }
    
    return sol;
    
};






