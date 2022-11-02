/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {

    let ref = [];
    for(let row  = 0; row < m; row++){
        //ref[row] = [];
        for( let col = 0; col < n; col++){
            if( row === 0 || col === 0 ){
                ref[col] = 1;
            } else {
                if( col === 0 ){
                    ref[col] = 1 + ref[col];
                } else {
                    ref[col] = ref[col-1] + ref[col];
                }
            }
        }    
    }
    //console.log(ref)
    return ref[ref.length - 1];
    
};