/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let minPrev = 0;
    let minPrevPrev = 0;
    
    for(let i = 2; i <= cost.length; i++){
        
        let temp = Math.min( cost[i-1] + minPrev, cost[i-2] + minPrevPrev );
        minPrevPrev = minPrev;
        minPrev = temp;
        console.log(temp)
    }
    return minPrev;
};