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

  it("should handle new lines", () => {
    const testString = "1 This is a test sentence. \n 2 this is another test.";
    const convertedString = "1 TIATS.\n2 TIAT.";

    expect(convertText(testString)).toBe(convertedString);
  });

  it('should handle punct: . , ; : " - ! ?', () => {
    const testString =
      'So, the other day, we went "shopping". Wasn\'t it great? I had fun! The virtues included: self-control, righteousness, and satisfaction; we need to grow in these.';
    const convertedString = 'S, TOD, WW"S". WIG? IHF! TVI: S-C, R, AS; WNTGIT.';

    expect(convertText(testString)).toBe(convertedString);
  });
});
