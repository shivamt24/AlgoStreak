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
    
    return lca(root, p , q);
    
};

let lca = (node, p ,q)=>{
    //let pVal = p;
    //let qVal = q;
        if( p.val > node.val && q.val > node.val){
            return lca(node.right, p , q);
        }
        else if( p.val < node.val && q.val < node.val){
            return lca(node.left, p, q);
        }
        else {
            return node;
        }

}