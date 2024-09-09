// rest parameters = represents an indefinite number of parameters
//                  (packs arguments into an array)

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a, b, c, d));

function sum (a, b) {
    return a + b;
}

function sum (a, b, c) {
    return a + b + c;
}

function sum (a, b, c, d) {
    return a + b + c + d;
}

// we want only one function that can accept an indefinite number of parameters,
// otherwise we will keep changing the functions and console.log 

// we declare function that can accept any number of arguments 

console.log(suma(a, b, c, d, e, 6)); // we can put as many arguments as we want

function suma (...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number
    }
    return total
}