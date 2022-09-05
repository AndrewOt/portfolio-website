import { convertText } from "./converter";

describe("ConvertText", () => {
  it("should convert a sentence as expected", () => {
    const testString = "This is a test sentence.";
    const convertedString = "TIATS.";

    expect(convertText(testString)).toBe(convertedString);
  });

  it("should keep numbers", () => {
    const testString = "1 This is a test sentence.";
    const convertedString = "1 TIATS.";

    expect(convertText(testString)).toBe(convertedString);
  });
});
