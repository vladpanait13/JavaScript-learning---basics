// setInterval() = invokes a function repeatedly after a number of miliseconds
//                 asynchronous function (doesn't pause execution)

let count = 0;
let max = window.prompt("Count up to what #?");
max = Number(max); // convert user input to a number cuz it is normally string datatype when we accept user input

//setInterval() - we can pass a callback, a function expression or an arrow function expression

const myTimer = setInterval(countUp, 1000); // we want to repeat this function after 1000 miliseconds

function countUp() {
    count += 1;
    console.log(count);
    if (count >= max) { // lets stop if count is greater than or equal to max (the number that we enter)
        clearInterval(myTimer); // to stop the interval
    }
}




