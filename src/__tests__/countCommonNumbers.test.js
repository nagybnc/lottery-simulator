import { countCommonNumbers } from "../utils";
import { describe, it, expect } from "vitest";

describe("countCommonNumbers", () => {
  it("returns the number of common elements between two arrays", () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [2, 4, 6, 8, 10];
    const result = countCommonNumbers(array1, array2);
    expect(result).toBe(2);
  });

  it("returns 5 when the arrays have 5 common elements", () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [1, 2, 3, 4, 5];
    const result = countCommonNumbers(array1, array2);
    expect(result).toBe(5);
  });

  it("returns 0 when the arrays have no common elements", () => {
    const array1 = [1, 3, 5, 7, 9];
    const array2 = [2, 4, 6, 8, 10];
    const result = countCommonNumbers(array1, array2);
    expect(result).toBe(0);
  });

  it("returns 0 when one or both arrays are empty", () => {
    const array1 = [];
    const array2 = [1, 2, 3];
    const result1 = countCommonNumbers(array1, array2);
    expect(result1).toBe(0);

    const array3 = [];
    const array4 = [];
    const result2 = countCommonNumbers(array3, array4);
    expect(result2).toBe(0);
  });
});
