// for loop = repeat some code a certain amount of times
// we can put 3 statements in a for loop followed by ' ; '
// in for loop we can declare or assign a variable 
//                put a condition
//                increment 

for (let counter = 1; counter <= 10; counter += 1) {
    console.log(counter);
}

for (let counter = 50; counter <= 100; counter += 3) {
    console.log(counter);
}

// the variable 'counter' is a local variable, it doesnt exist outside for loop

// a common convention is to use 'i' as a variable

for (let i = 100; i <= 110; i += 1) {
    console.log(i);
}

for (let i = 10; i > 0; i -= 3) {
    console.log(i);
}

console.log("HAPPY NEW YEAR!");



// BREAK = BREAKS OUT OF A LOOP ENTIRELY
// CONTNUE = SKIP AN ITERATION OF A LOOP

// we want to break the loop if we reach the number 13

for (let i = 1; i <= 20; i += 1) {
    if (i == 13) {
        break;
    }
    console.log(i);
}

// we want to continue the count but without the number 13

for (let i = 1; i <= 20; i += 1) {
    if (i == 13) {
        continue;
    }
    console.log(i);
}