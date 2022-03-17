//You are given a string that may contain sequences of consecutive characters.
//Create a function to shorten a string by including the character, then the 
//number of times it appears. For "aaaabbcddd" return "a4b2c1d3"
// //no built in functions!!!! parseInt() is ok
const encode = str => {
    let output = ""
    let count = 0
    let char = str[0]
    for (let i = 0; i <= str.length; i++) {
        if(char === str[i]) count ++
        else if(char != str[i] || i === str.length) {
            output += char + count
            count = 1
            char = str[i]
        }
    }
    return output
}

// console.log(encode("aaabbcccc"));
// console.log(encode("ddddeeeeeffgggg"));
// console.log(encode("aaaaabbbbbbbc"));
// console.log(encode("bb"));

//given an encoded string, decode and return it
//given "a3b2c1d3" return "aaabbcddd"
//parseInt() is ok
//special note: can your function handle "g14f12"?
const decode = (str) => {
    let numStr = "";
    let newStr = "";
    let letter = "";
    for(let i = 0; i <= str.length; i++){
        if(isNaN(str[i])){
            if(numStr != ""){
                for(let i = 0; i < numStr; i++){
                    newStr += letter;
                }
            }
            numStr = "";
            letter = str[i];
        } else{
            numStr += str[i];
        }
    }
    return newStr;
}

// console.log(decode("a3b2c4"));
// console.log(decode("t2h10j4"));
// console.log(decode("g14f12"));

// console.log(parseInt("432"));
// console.log(parseInt2("432"));


