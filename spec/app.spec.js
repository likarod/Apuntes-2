var {add, subtract} = require("../app")

describe("Test para comprobar la suma.", () => {
    it("calculates that x + y = z", () => {
        expect(add(4, 5)).toEqual(9); //Espera que X+Y ejecutar sea igual a Z
        expect(add(14, -5)).toEqual(9);
    });
    it("calculates that x + y != z", () => {
        expect(add(14, -5)).not.toEqual(100);
    });
});

describe("Test para comprabrar la resta", () => {
    it("calculates that x + y != z", () => {
        expect(subtract(14, -5)).not.toEqual(100);
    });
    it("calculates that x - y = z", () => {
        expect(subtract(14, 5)).not.toEqual(22);
    });
})