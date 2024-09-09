// nested loop = a loop inside of another loop


// we can put a for loop inside a for loop
// we count the number 1 to 3 three times

for(let i = 1; i <= 3; i+=1) {
    for(let j = 1; j <= 3; j+=1) {
        console.log(j);
}
}



let symbol = window.prompt('Enter a symbol to use');
let rows = window.prompt('Enter # of rows');
let columns = window.prompt('Enter # of columns');

for(let i = 1; i <= rows; i+=1) {
    for(let j = 1; j <= columns; j+=1) {
        document.getElementById("myRectangle").innerHTML += symbol;
    }
    document.getElementById("myRectangle").innerHTML += "<br>";
}