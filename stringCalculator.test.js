const calculator = require("./stringCalculator");

describe("adder", () => {
    it("should add numbers", () => {
        expect(calculator("1,2")).toBe(3);
    });
})