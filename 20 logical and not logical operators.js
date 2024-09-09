// Gives us the ability to check more than 1 condition concurrently
// && AND (BOTH CONDITIONS MUST BE TRUE)
// || OR (EITHER CONDITION CAN BE TRUE)

let temp = 15;

if (temp > 0 && temp < 30) {
    console.log('The weather is good!');
}
else {
    console.log('The weather is bad!');
}

let temperature = 50;

if(temperature <= 0 || temperature >= 30){
    console.log('The weather is good!');
}
else {
    console.log('The weather is bad!');
}



let grade = 15;
let sunny = true;

if (grade > 0 && grade < 30 && sunny == true){ // when working with boolean we can get rid of == true
    console.log('The weather is good');
}
else {
    console.log('The weather is bad');
}


// ! NOT logical operator
// typically used to reverse a condition's boolean value
// true -> false   false -> true

let tmp = 15;
let cloudy = true

if (!(tmp > 0)) { // NOT GREATER THAN 0
    console.log("it's cold outside");
}
else {
    console.log("it's warm outside");
}

if(cloudy){
    console.log("It's cloudy outside");
}
else{
    console.log("It's sunny outside");
}

// NOT
if(!cloudy){
    console.log("It's sunny outside");
}
else{
    console.log("It's cloudy outside");
}
