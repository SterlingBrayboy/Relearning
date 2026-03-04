console.log('ROBOT SAYS: "Whagoin on?"');

const colorBox = document.querySelector(".color_box");
const colorRed = document.querySelector(".color_box-red");
const colorAqua = document.querySelector(".color_box-aqua");
const colorGreen = document.querySelector(".color_box-green");
const colorPurple = document.querySelector(".color_box-purple");
const button = document.getElementById("button");

//This is a function to change colors of the color_box

function changeBox() {
  colorBox.classList.toggle(colorRed);
  console.log("Nothin Much, Mayne");
}

// This is a function to execute changebox() when clicking the *CLICK ME* button

function clickBox() {
  button.addEventListener("click", changeBox);
}

clickBox();
