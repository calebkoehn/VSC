// console.log(example);
// let example = "I'm the example!";

// //Cannot access "let example"

// console.log(hello);                                   
// var hello = 'world';                                 

// It will return "undefined"

// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

// It should print out "magnet" I think.

// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// We never called the function so brendan would print out "super cool"

// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

// It should print out "chicken" and "half-chicken" because we console logged it twice once after changing it in the function eat

// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// I don't think you can declare var equal to a function so this should throw an error.

// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

// This should print "undefined","rock", "r&b".
//UPDATE: after running the code I see my mistake it will also print out "disco" at the end after exiting the function.

// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

//This should print out "san jose", "seattle", "burbank", "san jose". I learned from the last one :)


// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students) {
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if (dojo.students > 50) {
//         dojo.hiring = true;
//     }
//     else if (dojo.students <= 0) {
//         dojo = "closed for now";
//     }
//     return dojo;
// }

// I think you're missing a let on line 90?