// Matrix Search
// Given a 2-dimensional array and a smaller 2-dimensional array, return the location of the first match found, or [-1,-1] if no match is found
// Ex: given: 
// [ [12,1,4,19],
//   [3,4,11,17],
//   [18,72,2,10],
//   [9,15,32,16]]
// and 
// [ [11,17]
//   [2,10]]
// Return [1,2] (this is the location where the inner matrix begins)


let search_in_matrix = function (matrix, value) {
    let M = matrix.length; // rows
    let N = matrix[0].length; // columns

    // Searching from top right.

    let i = 0;
    let j = N - 1;

    while (i < M && j >= 0) {
        if (matrix[i][j] === value) {
            return [i, j];
        } else if (value < matrix[i][j]) {
            // search left
            j = j - 1;
        } else {
            // search down
            i = i + 1;
        }
    }
    return [-1, -1];
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Entering The Matrix");
console.log("---------------------------------------");
let matrix = [
[12,1,4,19],
[3,4,11,17],
[18,72,2,10],
[9,15,32,16]
    ];


console.log("11 is at..");
output = search_in_matrix(matrix,11);
console.log(output);
console.log("2 is at..");
output = search_in_matrix(matrix,2);
console.log(output);
console.log("++++++ Successfully Exited The Matrix ++++++");