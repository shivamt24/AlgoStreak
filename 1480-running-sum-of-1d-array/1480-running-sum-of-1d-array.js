/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    
    let sol = [];
    sol[0] = nums[0];
    for( let i = 1; i < nums.length; i++){
        sol.push(nums[i] + sol[i-1]);
        //console.log(i);
    }
    return sol;
};