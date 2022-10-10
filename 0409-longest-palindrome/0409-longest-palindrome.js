/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map = new Set();
    let length = 0;
    for(let i in s){
        let char = s[i];
        if( map.has( char ) ){
            length += 2;
            map.delete( char );
        } else {
            map.add( char );
        }
    }
    
    if( map.size > 0 ){
        length += 1;
    }
    return length;
    
};