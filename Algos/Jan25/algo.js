class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// a stack operates on the principal of "First In, Last Out" like a pringles can
class SLStack{
    constructor() {
        this.top = null  // this.head equivalent
    }

    // add a given value to your stack
    push(value){
        var newNode= new Node(value);
        if(!this.top){
            this.top = newNode;
        } else{
        newNode.next = this.top;
        this.top = newNode;
        return this;
        }
    }
    
    // remove and return the top value
    pop(){
        if (!this.top){
            console.log("Stack is empty");
            return this;
        }
        var remove = this.top;
        this.top = this.top.next;
        return remove.value;
    }

    // return (don't remove) the top value of a stack
    returnTop() {
        return !this.top ? null : this.top.value;

    }

    // return the number of stacked values
    stackSize(){
        // your code here
    }

    printStack() {
        var runner = this.top;
        while(runner != null){
            console.log('Current value is: ${runner.value}');
            runner = runner.next;
        }
        return this;
    }
}

var sls = new SLStack()
sls.push(3)
sls.push(18)
sls.push(12)
sls.push(78)
sls.push(56)
console.log(sls.pop())
console.log(sls.returnTop())
sls.printStack()