// Write your code here!
const mainElem = document.getElementById("main");
mainElem.remove();

let newHeader = document.createElement("h1")
newHeader.textContent = "Jeremy is the champion";
newHeader.setAttribute("id", "victory");
document.body.append(newHeader);
