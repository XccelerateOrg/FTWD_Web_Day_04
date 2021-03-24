console.log("hey");
/**********************************************
 * Changing Styles
 * ==================================
 ***********************************************/
const message = document.querySelector("#message");
console.log(message);
message.style.textAlign = "center";
message.style.color = "red";
message.style.backgroundColor = "black";
message.style.fontSize = "2em";
message.style.borderBottom = "5px dotted purple";
let titleHeader = document.getElementById("title");
console.log(titleHeader);
titleHeader.style.border = "2px solid #000000";
titleHeader.style.color = "blue";

/**********************************************
 * Grabbing Elements and Manipulating Them
 * ================================== */

// Grab all elements with class highlight
const allHighlightClass = document.querySelectorAll(
  ".addHighlight"
);
allHighlightClass.forEach((eachElement) => {
  console.log(eachElement);
  eachElement.style.backgroundColor = "#ffff00";
  eachElement.style.fontWeight = "bold";
});

/**********************************************
 *  Remove Tags
 * ==================================
 ***********************************************/
console.log("yo");
// Newer method
let removeElement = document.getElementById("remove");
removeElement.remove(); //REMOVE IT!

/**********************************************
 * Add Tags
 * ==================================
 ***********************************************/
let marchClass = ["Spaghetti", "Pizza", "Pasta"];

for (let i = 0; i < marchClass.length; i++) {
  // creates an li tag
  let newElement = document.createElement("li");
  // assigning each li tag to the index in the array
  newElement.innerHTML = marchClass[i];
  document.body.appendChild(newElement);
}

/**********************************************
 * Alert
 * ==================================
 ***********************************************/
function getAlert() {
  console.log("hey");
  alert("yo!");
}
document
  .getElementById("alertBtn")
  .addEventListener("click", getAlert);

/**********************************************
 * Prompt
 * ==================================
 ***********************************************/

let title = document.getElementById("title");
let answer = prompt("What's your favorite color?");
title.style.color = answer;
