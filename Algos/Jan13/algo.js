// Write a function that given a sorted array of page positive numbers, return a string representing a book index. Combine consecutive pages to create ranges.

// Example: [1,3,4,5,7,8,10,12] --> "1, 3-5, 7-8, 10, 12"

function bookIndex(arr){
    var num = "";
    for (var i = 0; i < arr.length; i ++){
        var firstPage = arr[i];
        var lastPage = arr[i];
        for (var j = i + 1; j < arr.length; j++){
            if ((arr[j] - 1) === lastPage){
                lastPage = arr[j];
            }
            else {
                i = j - 1;
                break;
            }
        }
        num += firstPage === lastPage ? firstPage : firstPage + "-" + lastPage;
        num += ", ";
    }
    num = num.slice(0, num.length -2)
    return num;
}

console.log(bookIndex([1,3,4,5,7,8,10,12])) // "1, 3-5, 7-8, 10, 12"



// function longestPallindrome(str) {
//     var palli = "";
    
//     for (var start = 0 ; start < str.length-1 ; start ++) {
//         for (var end = start + 1; end <= str.length ; end ++) {
//             // check to see if this section of the string is a pallindrome
//             // construct a substring using the start and end points from the original string
//             var substring = "";
//             for(var k = start ; k < end ; k ++) {
//                 substring += str[k];
//             }
//             console.log(substring);

//             if (isPallindrome(substring) === true) {
//                 // is this new pallindrome's length greater than the existing 'longest pallindrome'?
//                 if (substring.length > palli.length) {
//                     palli = substring;
//                 }
//             }
//         }
//     }
//     return palli;
// }