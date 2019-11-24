
describe('Testing the functionality and display', () => {

    beforeEach(function () {
        jasmine.Ajax.install();
    });

    afterEach(function () {
        jasmine.Ajax.uninstall();
    });

    it("It should return true ", () => {
        const cookie = cookieNavigator.get('marvelCookie');
        expect(cookie).toBe(true);
    });

    it("It should return 100 offset", function () {
        expect(offset).toBe(100);

    });

    it("It should return 20 card", function () {
        expect(limit).toBe(20);
    });

    it("test calling api", function () {
        const url = baseUrl + '?limit=' + limit + '&offset=' + offset + '&ts=' + ts + '&apikey=' + publickey + '&hash=' + '10d7e52aa4e078ef0dcbb2c198ad41ea';

        var doneFn = jasmine.createSpy("success");
        

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function (args) {
            if (this.readyState == this.DONE) {
                doneFn(this.responseText);
            }
        };

        xhr.open("GET", url);
        xhr.send();

        expect(jasmine.Ajax.requests.mostRecent().url).toBe(url);
        expect(doneFn).not.toHaveBeenCalled();

    });

    it("click", function () {
        let nextPage = next();
    });
})

