/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    
    let result = [];
    let number = [];
    let sol = "";
    let index = 0;
    
    while(index < s.length){
        
        if( !isNaN(s[index]) ){
            //iterate and collect number
            let count = 0;
            while( !isNaN(s[index]) ){
                count = count * 10 + parseInt(s[index]);
                index++;
            }            
            //push number to number stack
            number.push(count);
            
        } else if( s[index] === "[" ){
            //push sol to top of stack
            result.push(sol);
            sol = "";
            index++;
            
        } else if( s[index] === "]" ) {
            //pop and compute the string with number stack count
            let mul = number.pop();
            let str = result.pop();
            for(let i = 0; i < mul; i++){
                str = str + sol;
            }
            sol = str;
            //update sol and push it on top
            index++;
        } else {
            //update the sol and continue
            sol = sol + s[index];
            index++;
        }
        
    }
    return sol;
    
    
};