// class = a blueprint for creating objects
//          within a class we can define what properties and methods that type of object should have
//          typically contain a -constructor- to assign some unique properties

// we will define properties and methods each player have. each player have their own score that will start at 0. each has a pause and exit methods

class Player {
    score = 0;

    pause(){
        console.log("You pause the game");
    }

    exit(){
        console.log("You exited the game");
    }
}

// to utilise this class to create an object, we utilize an object name

const player1 = new Player();

player1.score += 1; //we can adjust the player's score

console.log(player1.score);

player1.pause();
player1.exit();

// we can use the class to create multiple players

const player2 = new Player();
const player3 = new Player();
const player4 = new Player();

console.log(player2.score);

player2.exit();


///////////////////////////////////////////////////////////

// constructor = a special method of a class,
//               it accepts arguments and assign properties

// create a student class
// when we create a student obejct, each students has a name, age, gpa. within the constructor, we can assign these arguments to properties of class

class Student {

    constructor(name, age, gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    study() { // we can also add methods. study method
        console.log(`${this.name} is studying`);
    }
}

// creating student objects

const student1 = new Student("Spongebob", 30, 3.2);

// with our constructor, we have 3 params name, age, gpa. that means we have to pass 3 arguments

console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.study();

// we can re-use the class as a template to create other students and pass some unique arguments to assign to its properties

const student2 = new Student("Patrick", 35, 1.5);
const student3 = new Student("Sandy", 27, 4.0);

console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);
student2.study();

console.log(student3.name);
console.log(student3.age);
console.log(student3.gpa);
student3.study();





