/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    
    //let sol = [];
    //sol[0] = nums[0];
    for( let i = 1; i < nums.length; i++){
        let sum = nums[i] + nums[i-1];
        nums[i] = sum;
        //console.log(i);
    }
    return nums;
};