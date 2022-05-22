const calculator = require("./stringCalculator");

describe("adder", () => {
    it("should add numbers", () => {
        expect(calculator("1\n2,3")).toBe(6);
    });
})