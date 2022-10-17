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
 * @return {boolean}
 */
var isValidBST = function(root) {

    let isValid = isValidBstHelper(root, null, null);
    return isValid;
};


let isValidBstHelper=( node, low, high)=>{
    if( node === null ){
        return true;
    }
    
    
    if(  ( (low != null) && (node.val <= low)  ) || ( (high != null) && (node.val >= high)))
    {
        return false;
    }
    
    return isValidBstHelper(node.left,low, node.val)  && isValidBstHelper(node.right, node.val,high);
}