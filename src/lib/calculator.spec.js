const { sum, mult } = require("./calculator");

it("should sum 2 and 2 and the result must be 4", () => {
  expect(sum(2, 2)).toBe(4);
});

it("multiple 3 and 3 and the result must be 9", () => {
  expect(mult(3, 3)).toBe(9);
});

it("should multiple two negative number and the result must be a positive number", () => {
  expect(mult(-4, -9)).toBeGreaterThan(0);
});

it("should multiple and negative and a positive number and the result must be a negative number", () => {
  expect(mult(-3454, 3435)).toBeLessThan(0);
});

// -----------------------------------------------------------------------------------
it("should sum 2 and 2 even if one of is a string, and the result must be 4", () => {
  expect(sum("2", 2)).toBe(4);
});

it("should throw an error if what is passeed, is not a valid value", () => {
  expect(() => sum("", 2)).toThrowError();

  expect(() => {
    mult(34, []);
  }).toThrowError();

  expect(() => {
    mult({}, []);
  }).toThrowError();

  expect(() => sum({}, 2)).toThrowError();
});
