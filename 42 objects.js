// object = a group of properties and methods 
//          properties = what an object has (ex. a name, color, year)
//          methods = what an object can do (ex. if we create a car object, two methods can be drive or break)
//          use . to access properties/methods

// we create a car object with model, color, year property (property is like a variable, we can assign a value) and drive/break functions (methds)

// when we invoke the drive function, we can do something (display a message in our case)

const car1 = {
    model: "Mustang",
    color: "red",
    year: 2023,

    drive : function () {
        console.log("You drive the car");
    },
    brake : function () {
        console.log("You step on the brakes");
    }
}

const car2 = {
    model: "Corvette",
    color: "blue",
    year: 2024,

    drive : function () {
        console.log("You drive the car");
    },
    brake : function () {
        console.log("You step on the brakes");
    }
}

// to access the properties or methods type the object name and use a .

console.log(car1.model);
console.log(car1.color);
console.log(car1.year);

car1.drive(); // object name dot method and set of paranthesis to invoke it 
car1.brake();

console.log(car2.model);
console.log(car2.color);
console.log(car2.year);

car2.drive();
car2.brake();

// THIS KEYWORD
// this = reference to a particular object
//          the object depends on the immediate context

const car3 = {
    model: "Lamborghini",
    color: "yellow",
    year: 2025,

    drive : function () {
        console.log(`You drive the ${this.model}`); // if we put only the ${model} it will throw an error, we need to use THIS
    }
}

// also, this is a reference to the object that we are working with. we can also type the object.property ${car3.model}
car3.drive();


// if we use this outside an object that we declare, it will refer to the window object cuz that is the immediate context

this.name = "myCoolWindow";

console.log(this);
console.log(this.name);