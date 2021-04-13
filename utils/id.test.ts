import { getSerialId, idify } from "./id";

describe("utils/id", () => {
  it("getSerialId should create different ID on each call", () => {
    const id = getSerialId();
    const id2 = getSerialId();

    expect(id).not.toEqual(id2);
  });

  it("idify should add id property to any object", () => {
    const obj = { title: "Mercury" };
    const objWithId = idify(obj);

    expect(objWithId.id).not.toBeFalsy();
  });

  it("idify should not replace id if object already have it", () => {
    const id = "i-am-id";
    const objWithId = { id, title: "Mercury" };
    const objStillWithTheSameId = idify(objWithId);

    expect(objStillWithTheSameId.id).toEqual(id);
  });
});
