export const parser = (input: string) => {
  const tokens = tokenize(input);
  // TODO: parenthesize
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

export const parenthesize = (input: string[], list = []) => {
  const token = input.shift(); // take first elem from the list
  if (token) {
    return list.pop()
  }
  if (token === "(") {

  }
}

export const interpret = () => {};
