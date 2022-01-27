console.log("hey it's me");

var count=0;
var counter = document.getElementById("counter");


function clickHeader(element){
    count++;
    element.innerText = "clicked" + count + "times";
}

function hoverHeader(){
    // console.log("Hovered over again!");
}

function increaseCount(){
    ++count;
    counter.innerText = count + "times";
    counter.style.fontSize = count + "px";
}