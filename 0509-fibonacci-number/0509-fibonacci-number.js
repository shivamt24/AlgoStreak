/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    
    let computefib = (n) =>{
        if(n<=2) 
        {
            return 1;
        } else {
            return computefib(n-1) + computefib(n-2);    
        }
        
    }
    if( n!== 0)
    {
        return computefib(n);
    }
    return 0;
};