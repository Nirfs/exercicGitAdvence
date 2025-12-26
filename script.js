const button = document.querySelector("button");
const body = document.querySelector("body");

const background_color = "cyan";
const border = "yellow";
const text = "black";

body.style.backgroundColor = background_color;
body.style.width = "50vh"
body.style.height = "50vh"

button.style.backgroundColor = background_color;
button.style.color = text;
button.style.border = `4px solid ${border}`;
