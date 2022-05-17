const { HasNumbersInAPhrase } = require("./text");

it("should have a number into a phrase", () => {
  expect(HasNumbersInAPhrase("I have 1 million of rices")).toBe(true);
  expect(HasNumbersInAPhrase("I have 1 million of rices")).not.toBe(false);
  expect(HasNumbersInAPhrase("I have one million of rices")).toBe(false);
});
