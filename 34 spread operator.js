// spread operator ... = allows an iterable such as an array or string to be
//                   expanded in places where zero or more arguments are expected
//                   (unpacks the elements in individual arguments)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(numbers); // displays details of the array

console.log(...numbers);

let userName = "Bro Code";

console.log(...userName); 

// lets suppose we want to find the max value of the array

let maximum = Math.max(numbers);

console.log(maximum); // displays NaN not a number

let maxim = Math.max(...numbers);

console.log(maxim); // displays numnber 9


let class1 = ["Spongebob", "Patrick", "Sandy"];
let class2 = ["Squidward", "Mr. Krabs", "Plankton"];

/*
class1.push(class2);

console.log(class1); // we have 3 students and an array, so we have an entire array as an element 
*/

// we spread class2 in individual arguments 

class1.push(...class2);

console.log(class1);

console.log(...class1); // class 1 divided in individual elements

