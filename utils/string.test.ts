import { toSnakeCase } from "./string";

describe("utils/string", () => {
  it("toSnakeCase should convert to snake case", () => {
    expect(toSnakeCase("Hey I Robot")).toEqual("hey_i_robot");
  });

  it("toSnakeCase should not replace extra spaces", () => {
    expect(toSnakeCase("   Hey I Robot")).toEqual("___hey_i_robot");
  });
});
