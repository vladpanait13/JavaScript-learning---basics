// function = define code once, and use it many times
//              to perform some code, call the function name 

console.log('Happy birthday to me');
console.log('Happy birthday to me');
console.log('Happy birthday dear ___');
console.log('Happy birthday to me');
console.log('You are __ years old');

console.log('Happy birthday to me');
console.log('Happy birthday to me');
console.log('Happy birthday dear ___');
console.log('Happy birthday to me');
console.log('You are __ years old');

// we can write this code only once and re-use it whenever we need

function happyBirthday() {
    console.log('Happy birthday to me');
    console.log('Happy birthday to me');
    console.log('Happy birthday dear ___');
    console.log('Happy birthday to me');
    console.log('You are __ years old');
}

// function name + paranthesis to call a function

happyBirthday();

// functions have access to global variables like userName and age (declared outside the function)

let userName = "Vlad";
let age = 21;

function happyBirthdayy() {
    console.log('Happy birthday to me');
    console.log('Happy birthday to me');
    console.log('Happy birthday dear', userName);
    console.log('Happy birthday to me');
    console.log('You are', age, 'years old');
}

happyBirthdayy();

////////////////////////////

startprogram();

function startprogram() {
    let userName = "Bro";
    let age = 21;

    happyBirthdayyy(userName, age); //arguments
}

function happyBirthdayyy(a, b) {
    console.log('Happy birthday to me');
    console.log('Happy birthday to me');
    console.log('Happy birthday dear', a);
    console.log('Happy birthday to me');
    console.log('You are', b, 'years old');
}
