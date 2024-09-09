// method chaining - calling one method after another in one continous line of code

let userName = "bro";

let letter = userName.charAt(0); //we take the first letter from our variable which is 'b'
letter = letter.toUpperCase(); //we make the letter upper and it will be "B"

console.log(letter); 

// we can also write  this

let firstLetter = username.charAt(0).toUpperCase();

console.log(firstLetter);

//we can add more methods to another 

// let letter = userName.charAt(0).toUpperCase().trim();

