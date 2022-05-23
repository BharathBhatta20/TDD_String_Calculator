const calculator = require("./stringCalculator");

describe("adder", () => {
    it("return 0 if empty string", () => {
        expect(calculator("")).toBe(0);
    });
    it("should add numbers", () => {
        expect(calculator("1")).toBe(1);
    });
    it("should add two numbers separted by comma", () => {
        expect(calculator("1,2")).toBe(3);
    });
    it("should add two numbers separted by comma", () => {
        expect(calculator("1,2")).toBe(3);
    });
    it("should add if multiple number separted by comma", () => {
        expect(calculator("1,2,4")).toBe(7);
    });
    it("should add numbers separted by /n", () => {
        expect(calculator("1\n2,3")).toBe(6);
    });
    it("should add numbers separted by change in delimiter ;", () => {
        expect(calculator("//;\n1;2")).toBe(3);
    });
    it("should add numbers separted by defirrent delimiter", () => {
        expect(calculator("//;\n1;2'3|4{5")).toBe(15);
    });
    it("Show negatives not allowed", () => {
        expect(calculator("//;\n1;2'3|-4,-5")).toBe('negatives not allowed'+' '+'Remove the following Number -4,-5');
    });
})