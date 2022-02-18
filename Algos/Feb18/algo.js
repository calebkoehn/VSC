class DNode{
    constructor(val){
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DLL{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    addToFront(val){
        let newNode = new DNode(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }
    addToBack(val){
        let newNode = new DNode(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }
    reverseNode(){
        let temp = this.head;
        let nodeCount = 1;
        while(temp.next!==null){
            nodeCount++
            temp=temp.next
        } //This code gets the number of nodes present in the list before we mess with it
        let runner = this.head
        while(runner!==null){
            this.addToFront(runner.value)
            runner = runner.next;
        } //This code loops through our list and adds every value to the front. i.e: [1]->[2]->[3] becomes [3]->[2]->[1]->[1]->[2]->[3]
        let runner2 = this.head
        let count = 1
        while(count<nodeCount){
            runner2=runner2.next;
            count++
        } //This code moves our runner2 to the first value we added to the front by checking it against the original node length we got
        // in the beginning;
        runner2.next=null;
    }
    display(){
        if(this.head == null){
            console.log("Nothing to print");
        } else {
            var runner = this.head;
            var result = "<->";
            while(runner){
                result += `${runner.value} <->`;
                runner = runner.next;
            }
            console.log(result);
        }
    }

    
}

let newList = new DLL();
newList.addToFront(7);
newList.addToFront(4);
newList.addToFront(9);
newList.addToFront(2);
newList.addToBack(9);
newList.addToBack(5);
newList.addToBack(8);
newList.addToBack(3);
newList.display();
newList.reverseNode();
newList.display();
// console.log(newList.head.value);
// console.log(newList.tail.value);




