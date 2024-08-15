// Prompt user to enter dollar amount and convert to Naira
// Default conversion rate is set to 1600
var d = prompt("Hello\n Convert dollar to Naira");
var n = d * 1600;
alert(n + " naira.");

// Select the header element and change its color dynamically
var header = document.querySelector("h1");

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Change the header color every 50 milliseconds
function changeHeaderColor() {
    colorInput = getRandomColor();
    header.style.color = colorInput;
}

setInterval("changeHeaderColor()", 90);

// Style h2 elements using jQuery
var devs = $("h2");
devs.css('color', 'white');
devs.css('text-align', 'right');
devs.css('text-decoration', 'underline');

// Change background color function
function changeBackground(color) {
    document.body.style.background = color;
}

window.addEventListener("load", function () {
    changeBackground('#003366'); // Deep sea blue background color
});

// Button click event to trigger the converter prompt
$("#converterBtn").click(function () {
    var d = prompt("Enter amount in dollars:");
    var n = d * 1600;
    alert(n + " naira.");
});
