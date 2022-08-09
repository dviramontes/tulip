import { parser, tokenize } from "./app";

describe("parser", () => {
  it("tokenize", () => {
    const input = `
      (1)
    `;
    expect(tokenize(input)).toEqual(["(", "1", ")"]);
  });
});
