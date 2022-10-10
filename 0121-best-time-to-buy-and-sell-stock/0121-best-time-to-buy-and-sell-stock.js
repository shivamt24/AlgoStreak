/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    
    let minPrice = Infinity;
    let maxProfit = 0;
    
    for( i in prices ){
        //console.log(prices[i]);
        if( prices[i] < minPrice ){
            minPrice = prices[i];
        }
        let val = prices[i] - minPrice;
        if( maxProfit < val ){
            maxProfit = val;
        }
    }
    return maxProfit;
};