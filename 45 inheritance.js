// inheritance = a child class can inherit all the methods and properties from another class 

class Rabbit {

    alive = true;
    name = "rabbit";
    
    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
    run(){
        console.log(`This ${this.name} is running`);
    }
}

class Fish {

    alive = true;
    name = "fish";
    
    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}

class Hawk {

    alive = true;
    name = "hawk";
    
    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

// each class has identical eat and sleep methods and a boolean variable alive
// we can create just one class and all these individual animals can inherit properties and methods

class Animal {

    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}


class Rabbits extends Animal {

    name = "rabbit";
    
    run(){
        console.log(`This ${this.name} is running`);
    }
}

class Fishes extends Animal {

    name = "fish";
    
    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}

class Hawks extends Animal {

    name = "hawk";
    
    fly(){
        console.log(`This ${this.name} is flying`);
    }
}


const rabbit = new Rabbits();
const fish = new Fishes();
const hawk = new Hawks();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();

fish.eat();
fish.sleep();
fish.swim();

hawk.eat();
hawk.sleep();
hawk.fly();
