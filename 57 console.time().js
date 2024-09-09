// console.time() = Starts a timer you can use to track how long an operation takes
//                  Give each timer a unique name

//start
console.time ("Response time");

alert("CLICK THE OK BUTTON!"); // if we want to track how much time it takes to click on a button

setTimeout(() => console.log("HELLO!"), 3000);

//end
console.timeEnd ("Response time"); // the timeEnd will print the elapsed time in console (this program took ... to complete)