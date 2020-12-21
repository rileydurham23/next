import capitalize from "./capitalize";

describe("utils/capitalize", () => {
  it("Transform first letter of the first word to uppercase", () => {
    const result = capitalize("lorem ipsum dolor sit amet");

    expect(result).toEqual("Lorem ipsum dolor sit amet");
  });
});
