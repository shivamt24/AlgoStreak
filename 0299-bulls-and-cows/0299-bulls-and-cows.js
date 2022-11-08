/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
//single pass
var getHint = function(secret, guess) {
    
    let map = new Map();
    let a = 0;
    let b= 0;
    for(let i in secret){
        let s = secret[i];
        let g = guess[i];
        
        if(s === g){
            a++;
        } else {
            if( map.get(g) > 0 ){
                b++;
            }
            if( map.get(s) < 0 ){
                b++;
            }
            map.has(g)? map.set(g, map.get(g) - 1 ) : map.set(g,-1);
            map.has(s)? map.set(s, map.get(s) + 1): map.set(s,1);
        }
        
    }
    console.log(map);
        return `${a}`+ "A" + `${b}`+ "B";
    
    
}







/*
//Double Pass
var getHint = function(secret, guess) {
  
    let a = 0;
    let b = 0;
    
    let map = new Map();
    for(i in secret){
        let s = secret[i];
        if(map.has(s)){
           map.set(s, map.get(s) + 1); 
        } else {
            map.set(s,1);
        }
    }
    
    for( i in guess ){
        let s = secret[i];
        let g = guess[i];
        if(s === g){
            a++;
            map.set(g, map.get(g) - 1);
            if( map.get(g) < 0 ){
                b--;
            }
        } else if( map.get(g)>0 ){
            b++;
            map.set(g, map.get(g) - 1);
        }
    }
    
    console.log(a,b,map);
    return `${a}`+ "A" + `${b}`+ "B";
    
};
*/