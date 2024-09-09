// error = object with a description of something went wrong

// errors happen for the reasons:
//         Cant open a file
//         Lose connection
//         User types incorrect input
//         TypeError (ex. console.lag())


// try and catch block - if something is wrong, we will do something else 
try {
    console.lag();
}
catch(error) {
    console.log(error);
}

// displays 'TypeError: console.lag is not a function'

// something in our code might go wrong but wont display an erorr, thats where 'throw' intervenes

// throw = executes a user-defined error

try {
    let x = window.prompt("Enter a #");
    x = Number(x);

    console.log(`${x} is a number`);
}
catch(error) {
    console.log(error);
}

// this ^ displays NaN is a number if we enter a string

// we use throw

try {
    let x = window.prompt("Enter a #");
    x = Number(x);

    if(isNaN(x)) throw "That wasn't a number";
    if (x == "") throw "That was empty";

    console.log(`${x} is a number`);
}
catch(error) {
    console.log(error);
}
finally { // finally executes even if out code is right or wrong
    console.log("This always executes");
}
