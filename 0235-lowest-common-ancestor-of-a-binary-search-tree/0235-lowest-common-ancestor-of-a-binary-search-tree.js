/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
    return lcaHelper(root,p,q);
    
};
//iterative
let lcaHelper = (root,p,q) => {
    
    let node = root;
    
    while(node !== null){
        
        if( node.val > p.val && node.val >q.val ){
            node = node.left;
        } else if( node.val < p.val && node.val < q.val ){
            node = node.right;
        }else{
            return node;
        }
    
    }
    
    
}





//Recursive
/*
let lcaHelper = (node,p,q) => {
    //if(node === null) return;
    
    if(node.val > p.val && node.val > q.val){
        return lcaHelper(node.left,p,q);
    }
    
    else if(node.val < p.val && node.val < q.val){
        return lcaHelper(node.right,p,q);
    }
    
    else {
        return node;
    }   
}
*/

