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
        if( maxProfit < ( prices[i] - minPrice ) ){
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
};