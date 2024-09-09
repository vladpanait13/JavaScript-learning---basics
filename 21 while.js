// while loop = repeat some code
//              while some condition is true
//                potentially infinite


let userName = "";

/*

while(userName == "") {
    userName = window.prompt("Enter your Name");
}

console.log("Your name is ", userName);

*/

// we re stuck in a while loop until we enter the name but we can click cancel on the pop up

while(userName == "" || userName == null) {
    userName = window.prompt("Enter your name");
}

console.log("Your username is", userName);


// INFINITE LOOP THAT WE CANT ESCAPE

/*
while(1 == 1) {
    console.log("HELP! I'M STUCK IN AN INFINITE LOOP");
}
*/

// do while loop = do something,
//                 then check the condition, repeat if the condition is true

let firstName;

do {
    firstName = window.prompt("Enter your Name ");
} while (firstName == "")

console.log("Hello", firstName);



