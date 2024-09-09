// get = binds an object property to a function when that property is accessed


// a common naming convention when we have getters and setters set up is taking the property name and preceed it with '_' 

class Car1 {

    constructor(power) {
        this._gas = 25;
        this._power = power; // as the property name and the getter can not have the same name, we add '_' to protect it
    }
    get power() {
        return `${this._power}hp`;
    }
    get gas() {
        return `${this._gas}L (${this._gas / 50 * 100}%)`;
    }
}

let car1 = new Car1(400);

console.log(car1.power);
console.log(car1.gas);


// set = binds an object property to a function when that property is assigned a value 

class Car2 {

    constructor(power) {
        this._gas = 25;
        this._power = power; // as the property name and the getter can not have the same name, we add '_' to protect it
    }
    get power() {
        return `${this._power}hp`;
    }
    get gas() {
        return `${this._gas}L (${this._gas / 50 * 100}%)`;
    }
    set gas(value) { // if the value that we enter is > 50, the value % will be 50, else if the value is < 0, it will show 0
        if (value > 50) {
            value = 50;
        }
        else if (value < 0) {
            value = 0;
        }
        this._gas = value;
    }
}

let car2 = new Car2(500);

car2.gas = -100000;

console.log(car2.power);
console.log(car2.gas);

