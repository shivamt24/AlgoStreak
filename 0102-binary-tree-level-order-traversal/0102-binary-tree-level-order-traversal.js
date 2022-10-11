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
    let map = new Map(); 
    let level = 0;
    let sol = [];
    levelHelper(root,level, map);
    for(let i of map){
        sol.push(i[1]);
    }
    console.log(sol);
    return sol;
    //console.log(map);
};

var levelHelper = function(node, level, map){
    if( node === null || node.children === null ){
        return;
    }
    if(map.has(level)){
        (map.get(level)).push(node.val);
        //map.set( level , nodeVal);
    } else {
        map.set(level, [node.val]);
    }
    level ++;
    
    levelHelper(node.left, level, map);
    levelHelper(node.right, level, map);
    
}