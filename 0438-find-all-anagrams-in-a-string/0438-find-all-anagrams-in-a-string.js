/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    
    let isArrayEqual = (arr1, arr2)=>{
        for(let i in arr1){
            if( arr1[i] !== arr2[i] ){
                return false;
            }
        }
        return true;
    }
    
    let sArr = new Array(26).fill(0);
    let pArr = new Array(26).fill(0);
    let sol = [];
    
    for(let i in p){
        pArr[  p.charCodeAt(i) - 97 ]++;
    }
    
    for(let i in s){
        sArr[ s.charCodeAt(i) - 97 ]++;
        
        if(i > p.length-1 ){
            let removeHead = s.charCodeAt( i - p.length );
            sArr[removeHead - 97]--;
        }
        //important check
        if( i >= p.length - 1){
            if( isArrayEqual(pArr, sArr) ) sol.push( i - p.length +1 );
        }

           
    }
    return sol;
    
};