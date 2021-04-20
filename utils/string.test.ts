import { camelCaseToDash, toSnakeCase } from "./string";

describe("utils/string", () => {
  it("camelCaseToDash should conver camel case to dash case", () => {
    expect(camelCaseToDash("   HeyIWorkAtHome")).toEqual("hey-i-work-at-home");
    expect(camelCaseToDash("   heyIWorkAtHo42me")).toEqual(
      "hey-i-work-at-ho42me"
    );
    expect(camelCaseToDash("42")).toEqual("42");
    expect(camelCaseToDash("42hey")).toEqual("42hey");
    expect(camelCaseToDash("Hey42")).toEqual("hey42");
    expect(camelCaseToDash("Hey42Hey")).toEqual("hey42-hey");
  });

  it("toSnakeCase should convert to snake case", () => {
    expect(toSnakeCase("Hey I Robot")).toEqual("hey_i_robot");
  });

  it("toSnakeCase should not replace extra spaces", () => {
    expect(toSnakeCase("   Hey I Robot")).toEqual("___hey_i_robot");
  });
});
