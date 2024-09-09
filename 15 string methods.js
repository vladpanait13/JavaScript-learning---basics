// useful string properties and methods

let userName = "Vlad Panait";

let nameLength = userName.length; //

console.log(userName.length);

let firstLetter = userName.charAt(0); //

console.log(userName.charAt(0)); //displays first letter of the user name - count starts with 0, 1, 2..

console.log(userName.indexOf("a")); //first occurance of letter 'a'

console.log(userName.lastIndexOf("a")); //last occurence of letter 'a'

/////////////////

let nickName = "    Vlad Panait    ";

nickName = nickName.trim();

console.log(nickName);

nickName = nickName.toUpperCase();
nickName = nickName.toLowerCase();

////////////////////

let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-", "/"); //value that we want to replace, value that it will be replaced with
console.log(phoneNumber);


// slice() extracts a section of a string and returns it as a new string, without modifying the original string

let fullName = "Snoop Dogg";
let firstName;
let lastName;

// lastName = fullName.slice(5); // if we dont assign a 2nd value near '5', it will take all the string until the end of it
// firstName = fullName.slice(0,4);

///////////// 2 nd method will end when it finds a space (" ")

lastName = fullName.slice(fullName.indexOf(" ") + 1); //by adding + 1 at the end we get rid of the space because without it will print " Panait"
firstName = fullName.slice(0, fullName.indexOf(" "));


console.log(lastName);
console.log(firstName);


