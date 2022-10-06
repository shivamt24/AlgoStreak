/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapA = new Map();
    let mapB = new Map();
    
    for(let i in s){
        if(  ( ! mapA.has(s[i]) &&  ! mapB.has(t[i]) ) ) {
            mapA.set(s[i], t[i]);
            mapB.set( t[i], s[i] );
        } else if ( ( mapA.get(s[i]) !== t[i] ) || ( mapB.get(t[i]) !== s[i] ) ){
            return false;
        }
    }
    return true;
    
};