export const parse = (input: string) => {
  const tokens = tokenize(input);
  return parenthesize(tokens);
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

// @ts-ignore
export const parenthesize = (input: string[], list: any[] = []) => {
  const token = input.shift(); // take first elem from the list
  if (!token) {
    return list.pop();
  }

  if (token === "(") {
    list.push(parenthesize(input, []));
    return parenthesize(input, list);
  }

  if (token === ")") {
    return list;
  }

  return parenthesize(input, list.concat(categorize(token)));
};

export const categorize = (input: string) => {
  if (!isNaN(parseFloat(input))) {
    // JS only has floats
    return {
      type: "atom",
      val: parseFloat(input),
    };
  } else {
    return {
      type: "identifier",
      val: input,
    };
  }
};

export const interpret = () => {};
