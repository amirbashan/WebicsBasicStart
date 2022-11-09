import { expect, describe, test } from "@jest/globals";
import { randomNumber, dataArrayCuteness } from "./util";

describe("randomNumber function", () => {
  test("is a number", () => {
    const value = randomNumber();
    expect(typeof value).toBe("number");
  });
  test("between 1 and 10", () => {
    const value = randomNumber();
    expect(value).toBeGreaterThanOrEqual(1);
    expect(value).toBeLessThanOrEqual(10);
  });
});

describe("dataArrayCuteness function", () => {
  const emptyArray = dataArrayCuteness([]);
  const fullArray = dataArrayCuteness([
    { id: 1, name: "max", cuteness: 1, color: "white" },
    { id: 2, name: "max", cuteness: 10, color: "white" },
    { id: 3, name: "max", cuteness: 5, color: "white" },
    { id: 4, name: "max", cuteness: 1, color: "white" },
  ]);

  test("Empty array", () => {
    expect(emptyArray.length).toBe(10);
    expect(emptyArray).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  });

  test("length is 10 with normal array", () => {
    expect(fullArray.length).toBe(10);
    expect(fullArray).toEqual([2, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  });
});
