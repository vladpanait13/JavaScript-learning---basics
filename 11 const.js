// const = a variable that cant be changed

const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);


// const is useful if someone changes our code 

// pi = 420.69;

// we can prevent a variable from being changed if we assign it as a 'const' instead of 'let'

circumference = 2 * PI * radius;

console.log("The circumference is: " , circumference);



