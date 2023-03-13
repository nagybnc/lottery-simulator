import { generateRandomNumbers } from "../utils";
import { describe, it, expect } from "vitest";

describe("generateRandomNumbers", () => {
  it("returns an array of 5 unique numbers between 1 and 90", () => {
    const result = generateRandomNumbers();
    expect(result.length).toBe(5);
    expect(new Set(result).size).toBe(5);
    result.forEach((num) => {
      expect(num).toBeGreaterThanOrEqual(1);
      expect(num).toBeLessThanOrEqual(90);
    });
  });

  it("returns a different set of numbers each time it is called", () => {
    const result1 = generateRandomNumbers();
    const result2 = generateRandomNumbers();
    expect(result1).not.toEqual(result2);
  });
});
