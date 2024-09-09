
document.getElementById("myButton").onclick = function() {

    if(document.getElementById("myCheckBox").checked == true) {
        console.log("You are subscribed!");
    }
    else {
        console.log("You are NOT subscribed");
    }
}


// store elements in variable for readability


document.getElementById("myButton").onclick = function() {

    const myCheckBox = document.getElementById("myCheckBox");
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");

    if(myCheckBox.checked) {
        console.log("You are subscribed!");
    }
    else {
        console.log("You are NOT subscribed");
    }

    if(visaBtn.checked) {
        console.log("You are paying with a Visa card");
    }
    else if (mastercardBtn.checked) {
        console.log("You are paying with a MasterCard card");
    }
    else if (paypalBtn.checked){
        console.log("You are paying with a PayPal card");
    }
    else {
        console.log("You haven't selected a paypment method!")
    }
}

