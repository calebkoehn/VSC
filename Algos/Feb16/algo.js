// Singly Linked List Has Loop
// Some dastardly coding has left you with a loop in your singly linked list! (Meaning your while loop will run forever!)
// -- It's up to you to figure out if it's just a really long list or your coworker has created a loop in your list!
// Return true if a loop is found, false if one is not


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }


makeLoop(){
    // This will make a loop that points the last node to the head, but remember this loop could happen ANYWHERE
    let runner = this.head;
    while (runner.next) {
        runner = runner.next;
    }
    runner.next = this.head;
    console.log("The dastardly deed is complete")
    return "The dastardly deed is complete";
}
detectAndBreakLoop(){
    let compare = [];
    let runner = this.head;
    while(runner){
        compare.push(runner){
            for(let i =0; i<compare.length; i++){
                if(compare[i]===runner.next){
                    runner.next=null;
                    console.log(runner)
                    return runner;
                }
            }
            runner = runner.next;
        }
    }
}

var myList = new SLL();
myList.insertAtFront(5);
myList.insertAtFront(4);
myList.insertAtFront(3);
myList.insertAtFront(2);
myList.insertAtFront(1);
myList.makeLoop();
myList.detectAndBreakLoop();
myList.print();