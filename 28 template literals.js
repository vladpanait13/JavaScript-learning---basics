// Template literals = delimited with (`)
// instead of double or single quote s
// allows embedded variables and expresions

let userName = "Vlad";
let items = 3;
let total = 75;

//console.log("Hello", userName);
//console.log("You Have", items, "items in your cart");
//console.log("Your total is $", total);

console.log(`Hello ${userName}`);
console.log(`You have ${items} items in your cart`);
console.log(`Your total is $${total}`);


// we assign the entire string template to a variable named text 

let text = 
`Hello ${userName} <br>
You have ${items} items in your cart <br>
Your total is $${total} <br> `;

console.log(text);

document.getElementById("myLabel").innerHTML = text;

// we need to add line breaks to it <br>
