/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let visited = new Set();
    
    while(head != null){
        if(visited.has(head)){
            return head;
        } else {
            visited.add(head);
        }
        head = head.next;
    }
    return null;
    
};