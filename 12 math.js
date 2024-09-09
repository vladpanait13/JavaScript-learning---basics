let x = 3.14;

y = Math.round(x); // round number up
z = Math.floor(x); // round number down
t = Math.ceil(x);
w = Math.pow(x, 2); // power 
r = Math.sqrt(x); // square root 
s = Math.abs(x); // distance away from 0

console.log(x, y, z, t, w, r, s);



x = -3.14;
let a = 5;
let b = 9;
let maximum;
let minimum;

maximum = Math.max(x,a,b);
minimum = Math.min(x,a,b);

console.log(maximum, minimum);


x = Math.PI;
console.log(x);



// calculate hypotenuse !!!!!!!!!!!!!!

let d;
let e;
let f;

d = window.prompt("Enter side D");
d = Number(d);

e = window.prompt("Enter side E");
e = Number(e);

f = Math.pow(d, 2) + Math.pow(e, 2);
f = Math.sqrt(f);

// f = Math.sqrt(Math.pow(d, 2) + Math.pow(e, 2));

console.log("Side f = ", f);

//////////////////////////
document.getElementById("submitButton").onclick = function() {

    d = document.getElementById("dTextBox").value;
    d = Number(d);

    e = document.getElementById("eTextBox").value;
    e = Number(e);

    f = Math.sqrt(Math.pow(d, 2) + Math.pow(e, 2));

    document.getElementById("fLabel").innerHTML = "Side F: " + f;
}


