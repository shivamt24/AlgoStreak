/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    let sol = [];
    preOrderHelper(root, sol);
    return sol;
};


var preOrderHelper = function (node, sol) {
    //console.log(node.val);
    if( node === null || node.children === null ){
        return;
    }
    sol.push(node.val);
    for( let i = 0; i < node.children.length; i++){
        preOrderHelper( node.children[i], sol );
    }
}