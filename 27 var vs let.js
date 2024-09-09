// variable scope = where a variable is accessible

// let = variables are limited to block scope {} - it doesnt exists outside any set of curly brackets
// var = variables are limited to a function (){} - var is limited to a function

for (let i = 1; i <= 3; i +=1) {
    //console.log(i)
}

//console.log(i);

// console.log wont work because we the variable 'i' does not exists outside the set of curly brackets

for (var j = 1; j <= 3; j += 1) {
    //console.log(j)
}

console.log(j);


// global variable = is declared outside any function
// (if global, var will CHANGE browser's window properties)

let name = "Bro"; // since this variable is outside of any function, it is considered global

                  // the entire program recognizes this variable and has access to it

// var name = "Bro" - if we use var it can be problematic cuz if a variable declared var is global, it can and will change browser properties

// we can unintentionally change the window's property 
// window is an object that contains the "name" variable and assigning a var name variable it will change it, causing problems