import { parser, tokenize } from "./app";

describe("parser", () => {
  describe('tokenize',  () => {
    it("list of 1", () => {
      const input = `
      (1)
    `;
      expect(tokenize(input)).toEqual(["(", "1", ")"]);
    });
    it("atoms", () => {
      const input = `1`
      expect(tokenize(input)).toEqual(["1"]);
    });
  });
});
