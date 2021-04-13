import { CURRENT_YEAR } from "./date";

describe("utils/date", () => {
  it("CURRENT_YEAR should be dynamically current year", () => {
    const year = new Date().getFullYear();

    expect(CURRENT_YEAR).toEqual(year);
  });
});
