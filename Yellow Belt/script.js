console.log("page loading...")

var cookie = document.getElementById("cookie-policy")

function cart(){
    alert("Your Cart is empty!")
}

function accept() {
    cookie.remove();
}


function swap(element){
    element.src = "assests/succulents-2.jpg";
}

function swapBack(element){
    element.src = "assests/succulents-1.jpg";
}