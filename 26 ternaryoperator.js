// ternary operator = Shortcut for an 'if/else statement'
//                    Takes 3 operands

//                      1. a condition with ?
//                      2. expression if True :
//                      3. exoression if False

// condition ? exprIfTrue: exprIfFalse

let adult = checkAge(21);
console.log(adult);

function checkAge(age) {

    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}

///////////////////////////////////////////

let kid = checkAge(12);
console.log(kid);

function checkAge(age) {

    return age < 18 ? true : false;
}

// if condition is true it returns YOU WIN, if condition is false it returns YOU LOSE

checkWinner(true);

function checkWinner(win){
    win ? console.log('YOU WIN!') : console.log('YOU LOSE');
}
