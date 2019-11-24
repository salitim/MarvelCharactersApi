/*Initialisation*/

const publickey = '9b78e584812ee3975ccdd079af4656ec';
const ts = 1;
const cookieNavigator = new cookie();
const hash = cookieNavigator.get('marvelCookie');
const baseUrl = 'https://gateway.marvel.com/v1/public/characters';
const limit = 20;
let offset = 100;
const app = document.getElementById("app");
let buttonPrevious = document.createElement("button");
let buttonNext = document.createElement("button");
app.appendChild(buttonPrevious);
app.appendChild(buttonPrevious);
app.appendChild(buttonNext);
buttonPrevious.appendChild(document.createTextNode("Previous"));
buttonNext.appendChild(document.createTextNode("Next"));
buttonNext.className = "btn btn-primary";
buttonPrevious.className = "btn btn-primary";