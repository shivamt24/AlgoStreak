/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/*Solved using bucket sort*/
//TODO: All approaches mentioned in solution section
var topKFrequent = function(nums, k) {
    
    if(nums.length === k){
        return nums;
    }
    let bucket = [];
    let map = new Map();
    for(i in nums){
        bucket.push([]);
        if(map.has(nums[i])){
            map.set(nums[i], map.get(nums[i]) + 1 );
        } else {
            map.set(nums[i], 1);
        }
    }
    bucket.push([]);
    console.log('map', map);
    for(let [key,value] of map){
        //console.log(key, value);
        bucket[value].push(key);
    }
    console.log(bucket);
    let sol= [];

    for(let i = bucket.length-1; i >=0 ; i--){
        if(bucket[i].length !== 0){
            console.log(bucket[i]);
            sol = [...sol, ...bucket[i]];
            if(sol.length === k ){
                return sol;
            }
            }
        }
  
    return sol;

    
};