// array = think of it as a variable that can store multiple values

let fruits = ["apple", "orange", "banana"];

console.log(fruits);

console.log(fruits[0]); // we access the first element of the array

fruits[2] = "coconut" // we change the 3rd element of the array to 'coconut'

console.log(fruits);

fruits.push("lemon"); // we add a new element to the array

console.log(fruits);

fruits.pop(); // removes the last element of the array

console.log(fruits);

fruits.unshift("mango"); // add element to the beginning

console.log(fruits);

fruits.shift(); // removes the first element

console.log(fruits);



let length = fruits.length; // length of array
let index = fruits.indexOf("coconut"); // where can we find the value 0 or 1 or 2 

console.log(length);
console.log(index);

//////// loop through an array

let prices = [5, 10, 15, 20];

for (let i = 0; i < prices.length; i += 1) {
    console.log(prices[i]);
}

// if we want to iterate backwards this for loop

for (let i = prices.length - 1; i >= 0; i -= 1){
    console.log(prices[i]);
}


for (let i of prices) { // another way to do the same thing
    console.log(i);
}


for (let price of prices) { // we can say 'price' instead of 'i' cuz it is more logic
    console.log(price);
}



//////////////// sort an array of strings

let fructe = ["banana", "apple", "orange", "mango"];

fructe = fructe.sort(); // fruits are sorted in alphabetical order

// fructe = fructe.sort().reverse(); // fruits are sorted in reverse alphabetical order

for (let fruit of fructe){ // puts the values of the array into strings
    console.log(fruit);
}



