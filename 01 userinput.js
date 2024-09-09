// How to accept user input 

// Easy way with a window prompt

let username = window.prompt ("What's going on?");
console.log(username); 

// Difficult way with HTML  textbox

let usernamee;

document.getElementById("myButton").onclick = function () {

    usernamee = document.getElementById("myText").value;
    console.log(usernamee);
    document.getElementById("myLabel").innerHTML = "Hello " + usernamee;
}
