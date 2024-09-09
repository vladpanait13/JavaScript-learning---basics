// function expression = function with a name (anonymous function)
//                       avoid polluting the global scope with names
//                       Write it, then forget about it

sayHello();

function sayHello() {
    console.log("Hi!");
}

// it can get hard to think of specific function names so we can use functions expressions

const greeting = function () {
    console.log("Hello!");
}


// we just type the names of the variable with a set of paranthesis to invoke it, without needing to think of a function name 
greeting();



//////////buttons

let count = 0;

/*
function increaseCount() {
    count += 1;
    document.getElementById("myLabel").innerHTML = count; 
}

function decreaseCount() {
    count -= 1;
    document.getElementById("myLabel").innerHTML = count; 
}
*/



//// we dont need to declare 2 functions, we can use function expressions

document.getElementById("increaseButton").onclick = function () {
    count += 1;
    document.getElementById("myLabel").innerHTML = count;
}

document.getElementById("decreaseButton").onclick = function () {
    count -= 1;
    document.getElementById("myLabel").innerHTML = count;
}

//no need to create 2 unique functions names. we were able to assign function expressions to the event attribute of a html element

// REMEBER TO DELETE THE ONCLICK TAG OF THE BUTTONS FROM THE HTML FILE IF USE THE 2nd OPTION



///////// arrow function = compact alternative to a traditional function ////////////////
//             => 


const greetings = function (userName) {
    console.log(`Hello, ${userName}`);
}

greetings("Vlad Panait");


// we can convert this into an arrow function expression
// we eliminate the 'function' word and the curly brackets
// NOTE!! WE need curly brackets {} if our function holds more than 1 statement

const greetingss = (userName) => console.log(`Greetings, ${userName}`);

greetingss("Mr Vlad");

// new percent function with 2 arguments

const percent = function (x, y) {
    return x / y * 100;
}

console.log(`${percent(75, 100)}%`);

// arrow function

const percents = (x, y) => x / y * 100; // we dont necessarily need the return statement

console.log(`The percent is: ${percents(37, 50)}%`);

// another example

let grades = [100, 50, 90, 60, 80, 70];

grades = grades.sort(descending); // passing callback
grades.forEach(print); // passing callback

function descending (x, y) { 
    return y - x;
}

function print (element) {
    console.log(element);
}


// we can also write this as

let gradess = [10, 9, 6, 8, 7];

gradess.sort(function(x, y) {
    return y - x;
});
gradess.forEach(function(element){
    console.log(element);
});
                
// and using arrow function

let gradesss = [3, 2, 1, 4];

gradesss.sort((x, y) => y - x);

gradesss.forEach((element) => console.log(element));


