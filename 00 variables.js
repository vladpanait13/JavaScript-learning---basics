console.log("I like pizza!");
console.log("It's really good!");

window.alert("I REALLY LOVE PIZZA!");

// Comment

/*

Notes
Multi
Line

*/

// A variable is a container to store data
// A variable behaves as if it was the value that it contains

// Two Steps: 
// 1. Declaration (var, let, const)
// 2. Assignment (= assignment operator)

let age;
age = 21;

age = age + 1;

let firstName = "Bro"; // string data type

let student = true; // boolean data type

console.log("You are", age, "years old");
console.log("Hello", firstName);
console.log(student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old ";
document.getElementById("p3").innerHTML = "Enrolled: " + student;


// !!!!!!!!!!!!!!!! ARITHMETICS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/* arithmetic expression is a combination of 
    operands (values, variables, etc)
    operators ( + - * / %)
    that can be evaluated to a value
    ex. y = x + 5;
*/

let students = 20;

// students = students + 1;
// students = students - 1;
// students = students * 1;
// students = students / 1;
let extraStudents = students % 3;

students += 1; //augmented assigned operator
students -= 1;
students *= 1;
students /= 1;

console.log(extraStudents); 

/* operator precedence 
    1. paranthesis
    2. exponents
    3. multiplication and division
    4. addition and substraction
*/

let result = 1 + 2 * (3 + 4);
console.log(result);
