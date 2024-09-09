// return = returns a value back to the place where you invoked a function

let area;
let width;
let height;

width = window.prompt('Enter width');
height = window.prompt('Enter height');

area = getArea (width, height);

console.log("The area is:", area);

// we pass the width and height  variables as arguments

function getArea (width, height) {
    let result = width * height; // we declare temporary variable
    return result; // we send a value back in the spot in which we called the function
}