window.addEventListener("DOMContentLoaded", function () {
//get slider elements and body
const red= document.getElementById('red');
const green= document.getElementById('green');
const blue= document.getElementById('blue');
const body = document.body;

//add event listeners to sliders
red.addEventListener("input",updateBackgroundColor);
green.addEventListener("input",updateBackgroundColor);
blue.addEventListener("input",updateBackgroundColor);

//function to update background color
function updateBackgroundColor(){
let r = red.value;
let g = green.value;
let b = blue.value;

//contruct rgb color string
let rgbColor = `rgb(${r}, ${g}, ${b})`;

//set body background color
body.style.backgroundColor = rgbColor;
}
});