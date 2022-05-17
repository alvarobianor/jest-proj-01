const { queryString } = require("./queryString");

describe("Object to queryString", () => {
  it("create a valid query string when an Object is passed", () => {
    const obj = {
      name: "Alvim rei delas",
      profession: "developer",
    };

    expect(queryString(obj)).toBe("name=Alvim rei delas&profession=developer");
  });
});
