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
    let nodeStack = [root];
    let sol = [];
    
    if(root == null){
        return [];
    }
    
    while( nodeStack.length > 0 ){
        //console.log(nodeStack);
        let node = nodeStack.pop();
        sol.push(node.val);
        for(let i = node.children.length - 1; i > -1 ; i--){
            console.log(node.children[i].val);
            nodeStack.push(node.children[i]);
        }
    }
    return sol;
};