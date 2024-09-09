// 2d arrays aka multi dimensional arrays = an array of arrays

let fruits = ["apples", "oranges", "bananas"];
let vegetables = ["carrots", "onion", "potatoes"];
let meats = ["eggs", "chicken", "fish"];

let groceryList = [fruits, vegetables, meats];

for (let list of groceryList) {
    console.log(list);
}


///// to access the individual elements within each list/array we create a nested loop

for (let list of groceryList) { // this will display all the elements of the array as strings
    for(let food of list) {
        console.log(food);
    }
}


// to access an element from the array we imagine it is a grid/matrix

// the first index is the row and the second index is the column

// if we want to change apples to mangoes we first identify the row number and column number. first row is 0 first column is 0

groceryList[0][0] = "mangoes";

groceryList [0][2] = "lemons";

groceryList[2][0] = "steak";

console.log (groceryList);

