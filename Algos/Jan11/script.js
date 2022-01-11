// Create a function that, given an input string, returns a boolean true/false whether parentheses in that string are valid.

// Example 1:"y(3(p)p(3)r)s" --> true
// Example 2: "n(0(p)3" --> false
// Example 3: "n)0(t(o)k" --> false

// hint: consider using an array or object to solve

// check entire string, return true/false
// every single opening parens has a closing
// never hit an closing parens before a opening parens
// ONLY care about the parens in the string

function parensValid(str) {
    var opencounter = 0
    var closingcounter = 0

    for(i = 0; i<str.length; i++){
        if (str[i] == "("){
            opencounter ++
        }
        if (str[i] == ")"){
            closingcounter ++
        }
        if (closingcounter == opencounter){
            return true;
        }
        else if (closingcounter != opencounter){
            return false;
        }
        
    }
}

console.log(parensValid("y(3(p)p(3)r)s")); // true
console.log(parensValid("n(0(p)3")); // false
console.log(parensValid("n)0(t(o)k")); // false
console.log(parensValid("((()))")); // true
console.log(parensValid("()()()()()()(")); // false

// Given a string, returns whether the sequence of various parentheses, braces and brackets within it are valid. 

// Example 1: "({[({})]})" --> true
// Example 2: "d(i{a}l[t]o)n{e!" --> false
// Example 2: "{{[a]}}(){bcd}{()}" --> true

// hint: consider using an array or object to solve

function bracesValid(string) {
    var newArray = Array.from(string);
    var value = 0;
    for(var i = 0;i<newArray.length;i++){
        if (value < 0){
            return false;
        }
        
        else if (newArray[i] == '('){
            value = value + 1;
        }
        else if (newArray[i] == ')'){
            value = value -1;
        }
    }
    if (value == 0){
        return true;
    }

    else{
        return false;
    }
}

console.log(bracesValid("({[({})]})")); // true 
console.log(bracesValid("d(i{a}l[t]o)n{e!")); // false
console.log(bracesValid("{{[a]}}(){bcd}{()}")); // true