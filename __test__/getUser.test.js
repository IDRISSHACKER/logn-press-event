const { getUser } = require("../src/getUser");

let firstUserId = 1;
let lastUserId = 99;

beforeAll(() => {
    firstUserId = 1;
    lastUserId = 9999;
    console.log("Start testing getUser.test.js");
})

afterAll(() => {
    console.log("end testing getUser.test.js");
    firstUserId = 1;
    lastUserId = 9999;
})

test("verify if getUsers not throw error", () => {
    expect(() => getUser(firstUserId)).not.toThrow();
})

test('verify if getUser not return null', () => {
    expect(getUser(lastUserId)).not.toBeNull();
})

test('verifie if getUser not return undefined', () => {
    expect(getUser(lastUserId)).not.toBeUndefined();
})

test('verify if getUser return falsy if the user not found', () => {
    expect(getUser(lastUserId)).toBeFalsy();
})

test('verify if all users contains user and struct of user', () => {
    const expectedResult = {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    };
    expect(getUser(firstUserId)).toEqual(expectedResult);
});



