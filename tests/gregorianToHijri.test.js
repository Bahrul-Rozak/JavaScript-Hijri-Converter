const { gregorianToHijri } = require("../src/gregorianToHijri");

describe("Gregorian to Hijri Conversion", () => {
  test("should handle invalid input", () => {
    expect(() => gregorianToHijri("not a date")).toThrow();
    expect(() => gregorianToHijri(null)).toThrow();
  });
});
