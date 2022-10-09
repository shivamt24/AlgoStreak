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

let phase2 = (ptr2, ptr1)=>{
    
    while( ptr1 !== ptr2 ){
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }
    
    return ptr1;
}

var detectCycle = function(head) {
    
    let hare = head;
    let tor = head;
    
    while( hare !== null && hare.next!== null ){
        tor = tor.next;
        hare = hare.next.next;
        if( hare === tor ){
             return phase2(tor, head);
        }
    }
    return null;
};

