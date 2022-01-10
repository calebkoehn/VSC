// #1) Implement reverseString(str) that takes in a String, and then returns a string of the same length, but with the characters reversed.

// Example: "creature" ---> "erutaerc"

// ** Don't use the built-in reverse() method!

function reverseString(str) {
    var newArr = [];
    for(let i =0; i < str.length; i ++){
        newArr.unshift(str[i]);
    }
    console.log(newArr);
    return newArr.join("");
}

console.log(reverseString("creature")); // "erutaerc"

// #2) Create a function that, given a string, returns the string's acronym (first letter's only, capitalized).

// Example: "there's no free lunch - gotta pay yer way" --> "TNFL-GPYW""

    function acronym(str) {
        var arr = str.split(" ");
        var string = ""
        for(var i = 0; i < arr.length; i++){
            string += arr[i][0];
        }
        return string.toUpperCase();
    }

console.log(acronym("there's no free lunch - gotta pay yer way"));
