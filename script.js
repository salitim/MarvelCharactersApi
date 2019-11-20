function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}


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


buttonNext.addEventListener("click", function (e) {
    e.preventDefault();
    offset = offset + 10;
    for (let i = 0; i < document.getElementsByClassName("card").length; i++) {
        document.getElementsByClassName("card")[i].style.display = 'none';
    }

    i = +10;
    const url = baseUrl + '?limit=' + limit + '&offset=' + offset + '&ts=' + ts + '&apikey=' + publickey + '&hash=' + hash;
    fetch(url)
        .then(data => {
            return data.json()
        })
        .then(res => {
            displayDetails(res, url);
        })
        .catch(error => console.log(error));


})

buttonPrevious.addEventListener("click", function (e) {
    e.preventDefault();
    offset = offset - 10;
    for (let i = 0; i < document.getElementsByClassName("card").length; i++) {
        document.getElementsByClassName("card")[i].style.display = 'none';
    }
    const url = baseUrl + '?limit=' + limit + '&offset=' + offset + '&ts=' + ts + '&apikey=' + publickey + '&hash=' + hash;
    fetch(url)
        .then(data => {
            return data.json()
        })
        .then(res => {
            displayDetails(res, url);
        })
        .catch(error => console.log(error));
})


function displayDetails(res, url) {
    let characters = res.data.results;
    for (let i = 0; characters.length > i; i++) {
        let card = document.createElement('div');
        card.className = "card";
        let name = document.createElement('p');
        let img = document.createElement('img');
        img.className = "image"
        img.src = characters[i].thumbnail.path + '.jpg';
        card.className = 'card',
            name.textContent = characters[i].name;
        img.height = '300';
        img.width = '300';
        app.appendChild(card);
        card.appendChild(name);
        card.appendChild(img);
        name.className = "heroeName";


        name.addEventListener("click", function (e) {
            e.preventDefault();
            fetch(url)
                .then(data => {
                    return data.json()
                })
                .then(res1 => {

                    let character = res1.data.results;
                    e = i;
                    let details = document.createElement('ul');
                    let namelist = document.createElement('li');
                    let description = document.createElement('li');
                    let numberSeenComics = document.createElement('li');
                    let firstAppearance = document.createElement('li');
                    let secondtAppearance = document.createElement('li');
                    let thirdAppearance = document.createElement('li');
                    namelist.textContent = character[e].name;
                    description.textContent = character[e].description;
                    numberSeenComics.textContent = "Nombre de comics où le personnage apparait  : " + character[e].comics.items.length;
                    firstAppearance.textContent = character[e].comics.items[0].name;
                    secondtAppearance.textContent = character[e].comics.items[1].name;
                    thirdAppearance.textContent = character[e].comics.items[2].name;
                    card.appendChild(details)
                    details.appendChild(namelist);
                    details.appendChild(description);
                    details.appendChild(numberSeenComics);
                    details.appendChild(firstAppearance);
                    details.appendChild(secondtAppearance);
                    details.appendChild(thirdAppearance);

                })
                .catch(error => console.log(error));

        })
    }
}

const url = baseUrl + '?limit=' + limit + '&offset=' + offset + '&ts=' + ts + '&apikey=' + publickey + '&hash=' + hash;
fetch(url)
    .then(data => {
        return data.json()
    })
    .then(res => {
            displayDetails(res);
        }
    )
    .catch(error => console.log(error));

module.exports(getCookie);
module.exports(url);