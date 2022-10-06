/**
 * @param {number[]} nums
 * @return {number}
 
 
        28
        22 6
        17 11
        11 6 11
        
        28
        0 27
 
 */
var pivotIndex = function(nums) {
    
    let leftVal = 0;
    let rightVal = 0;
    for(let val of nums){
        rightVal += val;
    }
    console.log(rightVal);
    
    //edge case 1 : pivot is the left most element on the array
    if( rightVal === nums[0] ){
        return 0;
    }
    
    rightVal -= nums[0];
    for( let i = 1; i < nums.length; i++ ){
        rightVal -= nums[i];
        leftVal += nums[i-1];
        
        if( rightVal === leftVal ) {
            return i;
        }
    }
    
    return -1;
};