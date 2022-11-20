/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
     
    function isValid (start, end, count){
        
        return (end - start + 1) - count <= k; 
    }
    
    let sol = 0;
    let allLetters = new Set();
    for(i in s){
        allLetters.add(s[i]);
    }
    
    allLetters.forEach( i=>{
        let currentLetter = i;
        let start = 0;
        let count = 0;
        for(let end = 0; end < s.length; end++){
            if(currentLetter === s[end]){
                count++;
            }
            while(!isValid(start, end, count)){
                                
                if(currentLetter === s[start]){
                    count --;    
                }
                start ++;

            }
            
            sol = Math.max(sol, end-start + 1);
        }
    })
    return sol;
    
    

    
};