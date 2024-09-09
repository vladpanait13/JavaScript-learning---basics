// if statement = a basic form of decision making
// if a condition is true, then do something (execute code)
// if not, then don't do it

let age = 21;

if(age >= 18) {
    console.log("You are an adult!");
}
else if (age < 0) {
    console.log("YOU HAVEN'T BEEN BORN YET!");
}
else if (age >= 65) {
    console.log("You are a senior citizen!");
}
else {
    console.log("You are a child!");
}

// if order matters, we will need to put the if age > 65 at the top 


let online = false;

if(online) {
    console.log("You are online!");
}
else {
    console.log("You are offline!");
}