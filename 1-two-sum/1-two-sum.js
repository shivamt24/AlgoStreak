/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let values = new Map();
    
    for (i in nums){
        if( values.has( (target - nums[i]) ) ){
            return [i, values.get( (target - nums[i]) ) ]
        } else {
            values.set( nums[i], i )
        }
    }
};