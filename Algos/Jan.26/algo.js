class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// a queue operates on the principal of "First In, First Out" like waiting in line for something
class SLQueue{
    constructor() {
        this.head = null
        this.tail = null
    }

    // add a node with the given value to the queue
    enqueue(value) {
        var newNode = new Node(value);

        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        }

        this.tail.next = newNode;
        this.tail = this.tail.next;
        return this;
    }

    // remove and return the front value from the queue
    dequeue() {
        if(!this.head) {
            console.log("Nothing in this queue!");
            return null;
        }
        var temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        return temp.value;
    }

    //return true/false based on whether you find the given value in a queue
    contains(value) {
        if(!this.head) {
            return false;
        }
        var runner = this.head;
        while(runner) {
            if(runner.value === value) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    displayQueue(){
        if (!this.head){
            console.log("This queue is empty.");
        }
        else {
            var runner = this.head;
            var str = "";
            while(runner){
                str += runner.value + " -> ";
                runner = runner.next;
            }
            str += "null";
            console.log(str);
        }
    }
    
    // return the value of the front node without removing from list
    front() {
        // if(!this.head) {
        //     return null;
        // } else {
        //     return this.head.value;
        // }

        return this.head == null ? null : this.head.value;
    }

    // return whether or not a list is empty
    isEmpty() {
        // if(!this.head) {
        //     return "It's empty!"
        // } else {
        //     return "It's not empty!"
        // }

        // evaluates to the opposite of what you are expecting
        // if this.head exists, we are returning the 'not' of that, so it would output false
        // if this.head is null, we are returning the 'not' of that as well, so it would return true
        return this.head === null;
        // return !this.head;
    }

        // Reorder SLQueue values to alternate first half values with second half values, in order. For example: (1,2,3,4,5) becomes (1,4,2,5,3). You may create one additional SLQueue, if needed.

        // 1 --> 2 --> 3 --> 4 --> 5 --> 6 -->
        // 1 --> 2 --> 3 -->    |      4 --> 5 --> 6 -->
        // 1 --> 4 --> 2 --> 5 --> 3 --> 6 -->

    interleaveQueue(){
        if(!this.head) {
            console.log("Nothing in this queue");
            return null;
        }
        //seperate values into temp arrays
        else{
            var temp = this.head
        //put arr of 0 from second temp var into arr of 1 from first temp var and continue until no values are left.
        }
    }
    // temp array = interleaveQueue . return interleaveQueue
    

}


var q = new SLQueue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.enqueue(6);
q.displayQueue();

q.interleaveQueue();