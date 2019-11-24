/*Pagination*/
function next(){};
next.prototype.click = function() {
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
            display.init(res, url);
        })
        .catch(error => console.log(error));


})

}
function previous(){};
previous.prototype.click = function() {
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
            display.init(res, url);
        })
        .catch(error => console.log(error));
})
    
}

let nextPage = new next();
let previousPage = new previous();

nextPage.click();
previousPage.click();