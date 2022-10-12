/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let sol = [];
    if(root == null){
        return [];
    }
    let nodeQueue = [root];
    let level = 0;
    while(nodeQueue.length > 0){
        let level_length = nodeQueue.length;
        
        for(let i = 0; i < level_length; i++){
            let node  = nodeQueue.shift();
            if(node !== null && node.val !== null){
                if(sol[level] === null || sol[level]===undefined){
                    sol[level] = [node.val];
                } else {
                    sol[level].push(node.val);
                }       
            }
            
            if(node.left !== null){
                nodeQueue.push(node.left);    
            }
            if(node.right !== null){
                nodeQueue.push(node.right);   
            }   
        }

        level += 1;
        
    }
    return sol;

}