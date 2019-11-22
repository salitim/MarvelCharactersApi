/*Pagination*/

buttonNext.addEventListener("click", function (e) {
    e.preventDefault();
    offset = offset + 20;
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
    offset = offset - 20;
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
