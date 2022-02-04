// There are 3 edits that can be done on a string: add a acharacter, remove a character, or replace a character. 
// Given 2 strings, write a function that checks if they are one edit or fewer away from eachother (see samples below)
function oneAway(str1, str2) {
    var len1 = str1.length;
    var len2 = str2.length;

    // if(len1.equals(len2))
    //     return false;


    if ((len1-len2) > 1 || (len2 - len1) > 1){
        return false;
    }
    var i = 0, j =0;
    var difference = 0;
    while (i< len1 && j<len2){
        var f = str1.charAt(i);
        var s = str2.charAt(j);
        if (f != s){
            difference++;
            if (len1 > len2)
                i++;
            if (len2 > len1)
                j++;
            if (len1 == len2)
                i++; j++;
        }
        else{
            i++; j++;
        }
        if (difference > 1){
            return false;
        }
    }
    if (difference ==1 && len1 != len2 && (i != len1 || j != len2)){
        return false;
    }
    return true;
}

console.log(oneAway("hello", "eello")) // true
console.log(oneAway("hello", "eelloo")) // false 
console.log(oneAway("ello", "hello")) // true
console.log(oneAway("helllo", "hello")) // true
console.log(oneAway("hello", "helo")) // true
console.log(oneAway("hello", "hell")) // true
console.log(oneAway("hjllo", "helo")) // false


// ==========================================
// Vampires and the sleeping man
// ==========================================

// Consider a village with vampires and a sleeping man (who never wakes up, no matter what).
// A vampire can eat the sleeping man, but after eating him, the vampire falls asleep.
// Similarly, any vampire can eat any other sleeping vampire, and this process repeats.
// Assume that the vampires are very smart and would ALWAYS choose to stay alive than to eat the man and risk their lives.
// Initially, there are 65 vampires and 1 sleeping man. What would happen in the village?

