import { basicSorter, sorter } from "./sorter";

describe("utils/sorter", () => {
  describe("basicSorter", () => {
    it("Sort two strings in ASC order", () => {
      const result = basicSorter("abc", "cde");

      expect(result).toEqual(-1);
    });
    it("Sort two strings in DESC order", () => {
      const result = basicSorter("abc", "cde", "DESC");

      expect(result).toEqual(1);
    });
    it("Shows equality for strings correrctly", () => {
      const result = basicSorter("abc", "abc");

      expect(result).toEqual(0);
    });
    it("Sort two numbers in ASC order", () => {
      const result = basicSorter(1, 2);

      expect(result).toEqual(-1);
    });
    it("Sort two numbers in DESC order", () => {
      const result = basicSorter(1, 2, "DESC");

      expect(result).toEqual(1);
    });
    it("Shows equality for numers correrctly", () => {
      const result = basicSorter(1, 1);

      expect(result).toEqual(0);
    });
  });
  describe("sorter", () => {
    it("Sort two date strings in ASC order", () => {
      const result = sorter("2020-01-01", "2021-01-01");

      expect(result).toEqual(-1);
    });
    it("Sort two date strings in DESC order", () => {
      const result = sorter("2020-01-01", "2021-01-01", "DESC");

      expect(result).toEqual(1);
    });

    it("Shows equality for date strings correrctly", () => {
      const result = sorter("2020-01-01", "2020-01-01");

      expect(result).toEqual(0);
    });
    it("Sort two dates in ASC order", () => {
      const result = sorter(new Date("2020-01-01"), new Date("2021-01-01"));

      expect(result).toEqual(-1);
    });
    it("Sort two dates in DESC order", () => {
      const result = sorter(
        new Date("2020-01-01"),
        new Date("2021-01-01"),
        "DESC"
      );

      expect(result).toEqual(1);
    });

    it("Shows equality for dates correrctly", () => {
      const result = sorter(new Date("2020-01-01"), new Date("2020-01-01"));

      expect(result).toEqual(0);
    });
  });
});
