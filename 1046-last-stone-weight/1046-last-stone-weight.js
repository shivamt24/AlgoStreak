/**
 * @param {number[]} stones
 * @return {number}
 */
/*TODO: Solve using bucket, heap approach*/
var lastStoneWeight = function(stones) {
            stones = stones.sort((a,b)=>a-b);
    while(stones.length !== 1){
        let a = stones.pop();
        let b = stones.pop();
        let newStone = a-b;
        if(newStone > 0){
            stones.push(newStone);
            stones = stones.sort((a,b)=>a-b);
                    console.log(stones);
        } else if(stones.length === 0){
            return 0;
        }
    }
    console.log(stones);
    return stones[0];
};