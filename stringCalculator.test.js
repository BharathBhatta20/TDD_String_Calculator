const calculator = require("./stringCalculator");

describe("adder", () => {
    it("should add numbers", () => {
        expect(calculator("")).toBe(0);
    });
})