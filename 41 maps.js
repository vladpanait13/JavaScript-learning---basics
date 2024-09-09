// Map = object that holds key-value pairs of any data type

// example we have an online store, we associate prices with items

const store = new Map([
    ["t-shirt", 20], // one pair in our map
    ["jeans", 30],
    ["socks", 10],
    ["underwear", 50]
]);

console.log(store);

// to iterate over the pairs in our Map we use for each method

store.forEach((value, key) => console.log (`${key} $${value}`)); // iterate and display each pair in our Map, lists all items

// if we want to make a purchase, we use get method. first we create a variable to store the prices that we will add up

let shoppingCart = 0;

// if we want to purchase, there is an associated price. we need to access the value we want

// we take shoppingCart and increment it to acces a value

shoppingCart += store.get("t-shirt");
shoppingCart += store.get("underwear");
console.log(shoppingCart); // this sums up the prices of the items that we type and displays total price 

// there are more methods beside get such as:

// set - which adds new pair in out map

store.set("hat", 40);
store.forEach((value, key) => console.log (`${key} $${value}`)); 

// delete - which deletes a pair from our map

store.delete("hat"); // deletes the pair 

// has - checks if a key is in our map

console.log(store.has("hat")); // displays a boolean value so we need a console.log statement

// size - displays the size of the Map

console.log(store.size);




