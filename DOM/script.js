let newBtn = document.createElement("button");
newBtn.innerText =" clickme!";
newBtn.style.color = "white";
newBtn.style.backgroundColor = "blue";

document.querySelector("body").prepend(newBtn);
console.log(newBtn);

let parag = document.querySelector("p");