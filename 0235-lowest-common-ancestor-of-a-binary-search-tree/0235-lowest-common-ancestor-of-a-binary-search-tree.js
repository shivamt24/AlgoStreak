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

let lca = (node, p , q) => {
    if(node === null) return false;
    
    if(node.val > p.val && node.val > q.val){
        return lca(node.left, p , q);
    } else if( node.val < p.val && node.val < q.val){
        return lca(node.right, p , q);
    }
    return node;
}