/* Fonction dédiée à l'affichage */

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

/*Lancement de l'affichage des personnages */

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
