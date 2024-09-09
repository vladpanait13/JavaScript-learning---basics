// callback = a function passed as an argument to another function

// it ensures that a function is not going to run before a task is completed

/*
let total = sum(2,3);
displayConsole(total); // displays the function output to console
displayDOM(total); // displays the function output to DOM

function sum (x, y) {
    let result = x + y;
    return result
}


// we create a function to display the result to the console and a function to display it to DOM (html page)

function displayConsole(output) {
    console.log(output);
}

function displayDOM(output) {
    document.getElementById("myLabel").innerHTML = output;
}
*/

/////////// another way of writing all of this is with a callback

sum (2, 3, displayConsole);

// we set up the sum function which will have 3 parameters: the numbers we want to add together (2,3) and the callback (displayConsole)

function sum(x, y, myCallBack) { // we dont add the extra set of paranthesis cuz we dont want to invoke the function, so NO callBackfunct()
    let result = x + y;
    myCallBack(result); // now we invoke the function so we use paranthesis ()
}

function displayConsole(output) {
    console.log(output);
}

function displayDOM(output) {
    document.getElementById("myLabel").innerHTML = output;
}


// Ensures that a function is not going to run before a task is completed
// Helps us develop asynchronous code (When one function has to wait for another function)
// That helps us avoid errors and potential problems
// Ex. wait for a file to load 

