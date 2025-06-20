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

}