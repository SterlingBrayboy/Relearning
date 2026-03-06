const colorBox = document.querySelector(".color_box");
// const colorRed = document.querySelector(".color_box-red");
// const colorAqua = document.querySelector(".color_box-aqua");
// const colorGreen = document.querySelector(".color_box-green");
// const colorPurple = document.querySelector(".color_box-purple");
const button = document.getElementById("button");

//This is a function to change colors of the color_box

// message = ["STOP", "THE PAIN", "THIS IS HARRASSMENT", "911 HAS BEEN CALLED"];

const colorArray = [
  "color_box-red",
  "color_box-aqua",
  "color_box-green",
  "color_box-purple",
];

// colorArray.forEach((color) => {
//   colorBox.classList.toggle(color);
// });

let index = 0;

function changeBox() {
  colorBox.classList.remove(colorArray[index]);
  index = (index + 1) % colorArray.length;
  colorBox.classList.add(colorArray[index]);
}

// This is a function to execute changebox() when clicking the *CLICK ME* button

function clickBox() {
  button.addEventListener("click", changeBox);
}

clickBox();
