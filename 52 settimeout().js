// setTimeout() = invokes a function after a number of miliseconds
//                asynchronous function (doesn't pause execution of program)

// used if we want to perform a task after a given amount of time

// spam some alert messages after a given amount of miliseconds

setTimeout(firstMessage, 3000); // we pass the callback (1st argument) and then a given amount of miliseconds (2nd argument)
let timer2 = setTimeout(secondMessage, 6000);
let timer3 = setTimeout(thirdMessage, 9000); // putting the 3rd timer into a variable so the clear timeout will work

function firstMessage() {
    alert(`Buy this course for $500!`);
}

function secondMessage() {
    alert(`This is not a scam!`);
}

function thirdMessage() {
    alert(`DO IT!`);
}


// if we want to delete the setTimeout method we can use the clearTimeout method
// let's link it to a button

document.getElementById("myButton").onclick = function() {
    clearTimeout(timer2);
    clearTimeout(timer3); // we invoke the clear timeout method but we need to pass the id of the timer so we put set timeout in a variable 
    alert(`Thanks for buying <3`);
}

// if we want to pass arguments to a function we can list those after the miliseconds arguments

let item = "cryptocurrency";
let price = 420.69;
// pass these 2 variables as arguments
let timer4 = setTimeout(message, 12000, item, price);

function message(item, price) {
    alert(`Buy this ${item} for ${price} $`);
}