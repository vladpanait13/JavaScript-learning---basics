// how can we pass objects to a function as arguments


class Car {

    constructor (model, year, color) {
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

const car1 = new Car("Mustang", 2023, "red");
const car2 = new Car("Corvette", 2024, "blue");
const car3 = new Car("Lambo", 2022, "yellow");

// we need a function to display all the information for each car 

displayInfo(car3);

function displayInfo(car) {
    console.log(car.model);
    console.log(car.year);
    console.log(car.color);
}

changeColor(car2, "gold");
displayInfo(car2);

function changeColor(car, color) { 
    car.color = color;
}

// thats how to pass an object to a function
// when we invoke the function, just pass the name of an object as an argument
// with the parameter name, just find a name that is descriptive of what are we expecting 