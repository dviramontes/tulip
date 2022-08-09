export const parser = (input: string) => {
  // TODO: parenthesize
  const tokens = tokenize(input);
  return [];
};

export const tokenize = (input: string) => {
  return input
    .trim()
    .replace(/\r?\n|\r/g, "")
    .replace(/\(/g, " ( ")
    .replace(/\)/g, " ) ")
    .split(/ +/)
    .filter((t) => t);
};

export const interpret = () => {};
