import getCookie from './script';
import url from './script';

test("It should return null", () => {
    const cookie = getCookie();
    expect(cookie).toEqual(null);
});


test("should return 10", () => {
    expect(document.getElementsByClassName("card").length).toEqual(10)
});

describe('Test API', async () => {
    it('ack', async () => {
        const response = await fetch(url);
        expect(response).toBeDefined();
        console.log(response);
    });
});