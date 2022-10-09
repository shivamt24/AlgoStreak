/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let count = 0;
    let sol = head;
    while(head !== null){
        count += 1;
        head = head.next;
    }
    console.log(count);
    count = (count%2) ? count/2 : (count/2) + 1;
    for( let i = 1; i < count; i++ ){
        sol = sol.next;
    }
    console.log(sol);
    return sol;
};