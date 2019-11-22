
describe('Testing the functionality and display', ()=>{
    it("It should return null", () => {
        const cookie = getCookie();
        expect(cookie).toBe(null);
    });

    it("It should return 100 offset", function() {
            expect(offset).toBe(100);
        
    });
    
    it("It should return 20 card", function () {
        expect(limit).toBe(20);
    });
})

describe('Testing the API', ()=>{

})
