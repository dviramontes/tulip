import { parenthesize, parse, tokenize } from "./app";

describe("parser", () => {
  describe("tokenize", () => {
    it("list of 1", () => {
      const input = `
      (1)
    `;
      expect(tokenize(input)).toEqual(["(", "1", ")"]);
    });
    it("atoms", () => {
      const input = `1`;
      expect(tokenize(input)).toEqual(["1"]);
    });
  });

  describe("parenthesize", () => {
    it("parse", () => {
      const input = `(first (list 1 2 3))`;
      const parsed = parse(input);

      expect(parsed).toEqual([
        { type: "identifier", val: "first" },
        [
          { type: "identifier", val: "list" },
          { type: "atom", val: 1 },
          { type: "atom", val: 2 },
          { type: "atom", val: 3 },
        ],
      ]);
    });
  });
});
