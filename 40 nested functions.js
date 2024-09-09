// nested functions = Functions inside other functions
//                      Outer functions have acces to inner functions
//                      Inner functions are hidden from outside the outer function
//                      adds data security
//                      used in closure

let userName = "Vlad";
let userInbox = 0;

//create a function to login

login(); // problem with this is that we can have acces to the 2 display functions from outside the 'login' functions, meaning we dont have to 
// insert this login function to display our username and userinbox, we can also invoke the 2 functions directly and the result is the same
// displayUserName();
// displayUserInbox();

function login() {
    displayUserName();
    displayUserInbox();
}

function displayUserName() {
    console.log(`Welcome, ${userName}`);
}

function displayUserInbox() {
    console.log(`You have ${userInbox} new messages`);
}

// to add data security we can place a function into another function

// in order to acces the display username function and display userinbox, we first need to login

login(); // now if we attempt to invoke the functions dislayUserName() and displayUserInbox() we can not do that, we first need to login 

function login() {
    displayUserName();
    displayUserInbox();

    function displayUserName() {
        console.log(`Welcome, ${userName}`);
    }

    function displayUserInbox() {
        console.log(`You have ${userInbox} new messages`);
    }
    
}
