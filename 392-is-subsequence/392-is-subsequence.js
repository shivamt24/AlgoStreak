/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
    let index = 0;
    let i = 0
        if(s === ""){
            return true;
        }
    if(t === ""){
        return false;
    }
        while( index < s.length ){
            if( s[index] === t[i] ){
                index ++;
                if( index === s.length){
                    return true;
                }
            }
            i++;
            if( i === t.length){
                return false;
            }
        }
    
    
    
};