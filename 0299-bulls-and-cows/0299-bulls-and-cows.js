/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
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