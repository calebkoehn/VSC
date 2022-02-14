// Singly Linked List Reverse
// Write a method in your singly linked list class that reverses the order of a singly linked list
// Ex: if your current list has 2 -> 4 -> 8 -> 1 -> 5 then after it should be 5 -> 1 -> 8 -> 4 -> 2


class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

const reverseList = (head) => {
    //initiate previous as null
    let previous = null
    //initiate next without assigning
    let next 
   //keep iteration while head is not null
while(head){
    //store the current node's next node    
    next = head.next
    //reassign head's next with previous node
    head.next = previous
    //reassign previous with reversed current node
    previous = head
    //reassign head with next node
    head = next
}
//after reversing return previous list
return previous
};







// const reverse = (head) => {
//     if (!head || !head.next) {
//         return head;
//     }
//     let temp = reverse(head.next);
//     head.next.next = head;
//     head.next = undefined;
//     return temp;
// } 

