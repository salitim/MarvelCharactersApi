/*Initialisation*/

const publickey = '9b78e584812ee3975ccdd079af4656ec';
const ts = 1;
const hash = getCookie('marvelCookie');
const baseUrl = 'https://gateway.marvel.com/v1/public/characters';
const limit = 10;
let offset = 100;
const app = document.getElementById("app");
let buttonPrevious = document.createElement("button");
buttonPrevious.className = "btn btn-primary";
buttonPrevious.appendChild(document.createTextNode("Previous"));
app.appendChild(buttonPrevious);
let buttonNext = document.createElement("button");
buttonNext.className = "btn btn-primary"
buttonNext.appendChild(document.createTextNode("Next"));
app.appendChild(buttonPrevious);
app.appendChild(buttonNext);
