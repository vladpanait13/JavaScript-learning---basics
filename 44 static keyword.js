// static = belongs to the class, not the objects 
//          properties: useful for caches, fixed-configuration
//          methods: useful for utility functions

class Car {

    numberOfCars = 0;

    constructor(model) {
        this.model = model;
        this.numberOfCars += 1;
    }
}

const car1 = new Car ("Mustang");
const car2 = new Car ("Porsche");
const car3 = new Car ("BMW");

console.log(car1.numberOfCars);
console.log(car2.numberOfCars);
console.log(car3.numberOfCars);

// this does not count, instead displays 1,1,1 when it should display 3
// happens because each car object has their own numberOfCars variable
// we use static to fix this

class Cars {

    static numberOfCars = 0;
    
    constructor(model) {
        this.model = model;
        Cars.numberOfCars += 1;
    }

    static startRace() {
        console.log("3... 2... 1... GO!")
    }
}

const car4 = new Cars ("Ford");
const car5 = new Cars ("Lamborghini");

console.log(Cars.numberOfCars);

// anything that is static belongs to the class, not the object! thats why we type the name of the class.argument

Cars.startRace();

