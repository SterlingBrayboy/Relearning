const colorBox = document.querySelector(".color_box");
const button = document.getElementById("button");
const saying = document.getElementById("message");

const face = ["ʘ‿ʘ", "ಠ_ಥ", "(ʘᗩʘ')", "(°ロ°)☝", "¬_¬"];

const message = [
  "really?",
  "STOP",
  "ENOUGH",
  "LAST CHANCE",
  "DIALING 911",
  "📞📞📞",
];

const colorArray = [
  "color_box-red",
  "color_box-aqua",
  "color_box-green",
  "color_box-purple",
];

// This is a function to change the messages within the message box

let error = 0;

function messageBox() {
  error = (error + 1) % message.length;
  saying.textContent = message[error];
}

// This is a function to change colors of colorBox

let index = 0;

function changeBox() {
  colorBox.classList.remove(colorArray[index]);
  index = (index + 1) % colorArray.length;
  colorBox.classList.add(colorArray[index]);
  messageBox();
}

// This is a function used to change the face of the coloBox

// This is a function to execute changebox() when clicking the *CLICK ME* button

function clickBox() {
  button.addEventListener("click", changeBox);
}

clickBox();
