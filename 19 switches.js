// switch = statement that examines a value for a match against many case clauses
// more efficient than many "else if" statements

let grade = "A";

if (grade == "A"){
    console.log("You did great!");
}
else if (grade == "B"){
    console.log("You did good!");
}
else if (grade == "C"){
    console.log("You did okay!");
}
else if (grade == "D"){
    console.log("You passed...barely!");
}
else if (grade == "F"){
    console.log("YOU FAILED!");
}
else {
    console.log(grade, "is not a letter grade!");
}


// if we have many "else if" it is better to create a switch

let grades = "A";

switch(grades) {
    case "A":
        console.log("You did great!");
        break;
    case "B":
        console.log("You did good!");
        break;
    case "C":
        console.log("You did okay!");
        break;
    case "D":
        console.log("You passed...barely!");
        break;
    case "F":
        console.log("YOU FAILED!");
        break;
    default:
        console.log(grade, "is not a letter grade");
}


let punctaj = 50;

switch(true) {
    case punctaj >= 90:
        console.log("You did great!");
        break;
    case punctaj >= 80:
        console.log("You did good!");
        break;
    case punctaj >= 70:
        console.log("You did okay!");
        break;
    case punctaj >= 60:
        console.log("You passed...barely");
        break;
    case punctaj < 60:
        console.log("YOU FAILED!");
        break;
    default:
        console.log(punctaj, "is not a grade!");
}