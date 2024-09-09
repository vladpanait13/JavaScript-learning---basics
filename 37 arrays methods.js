// array.forEach() - executes a provided callback function once for each array element

let students = ["spongebob", "patrick", "squidward"];

students.forEach(capitalize); //we apply the callback which is the name of the function ('capitalize')
students.forEach(print); // dont add additional set of paranthesis cuz that we will call the function and we only want to pass the name

function capitalize (element, index, array) { // the 3 arguments are provided automatically and we have access to them 
    array [index] = element[0].toUpperCase() + element.substring(1); // capitalizes the first letter of each string
}

console.log(students[0]);

function print (element) { // we only want to use the 'element' argument
    console.log(element);
}


// array.map() - executes a provided callback function once for each array element 
//               AND creates a new array

let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(square); // we pass the function as a callback to the map method, which will create a new array
let cubes = numbers.map(cube); // 3rd pow

squares.forEach(print);
cubes.forEach(print);

function square(element) {
    return Math.pow(element, 2);
}

function cube (element) {
    return Math.pow(element, 3);
}

function print (element) { // we display the elements of 'squares' with a function
    console.log(element);
}


// array.filter() - creates a new array with all elements that pass the test provided by a function
//                  (we can filer out elements of the array and create new ones based on criteria)

let ages = [18, 16, 21, 17, 19, 90];

let adults = ages.filter(checkAge); // checkAge callback function

adults.forEach(print);

function checkAge(element) { // test to filter out ages that do no meet criteria
    return element >= 18;
}

function print(element) {
    console.log(element);
}


// array.reduce() - reduces an array to a single value

// we can sum up the prices and create a total

let prices = [5, 10, 15, 20, 25, 30, 35];
let total = prices.reduce(checkOut);

console.log(`The total is $${total}`);

function checkOut(total, element) { // function to check out and make a purchase, we need 2 params total (holds sumed value) and current element
    return total + element; // when we return a value we will re-use it as an argument for the iteration
}



///// sort array of numbers

let grades = [100, 50, 90, 60, 80, 70];

grades = grades.sort(descOrder);

grades.forEach(print);

function descOrder (x, y) { //create callback function to sort numbers in descending order
    return y - x;
}

function print(element) {
    console.log(element);
}

/*
function ascOrder (x, y) { //create callback function to sort numbers in ascending order
return x - y;
}
*/