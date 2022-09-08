const enum DateTokenType {
  unknown = 0,
  initial = 1,
  whitespace = 2,
  delimiter = 3,
  numeric = 4,
  alphanumeric = 5,
}

interface DateToken {
  length: 2;
  0: DateTokenType;
  1: string;
}

const isWhitespace = function isWhitespace(code: number): boolean {
  // " "
  return (code === 32);
};

const isDelimiter = function isDelimiter(code: number): boolean {
  // ",", "-", ".", "/"
  return (code === 44 || code === 45 || code === 46 || code === 47);
};

// const isAlphaCode = function isAlphaCode(code: number): boolean {
//   if (
//     // (code > 47 && code < 58) || // numeric (0-9)
//     (code > 64 && code < 91) || // upper alpha (A-Z)
//     (code > 96 && code < 123) // lower alpha (a-z)
//   ) {
//     return true;
//   }

//   return false;
// };

const isNumericCode = function isNumeric(code: number): boolean {
  return (code > 47 && code < 58);
};

const getTokenType = function getTokenType(code: number): DateTokenType {
  // if (isWhitespace(code)) {
  //   return DateTokenType.whitespace;
  // }

  // if (isDelimiter(code)) {
  //   return DateTokenType.delimiter;
  // }

  if (isWhitespace(code) || isDelimiter(code)) {
    return DateTokenType.delimiter;
  }

  if (isNumericCode(code)) {
    return DateTokenType.numeric;
  }

  // if (isAlphaCode(code)) {
  return DateTokenType.alphanumeric;
  // }

  // return DateTokenType.unknown;
};

const getNextTokenType = function getNextTokenType(
  currentTokenType: DateTokenType,
  nextCode: number,
): [DateTokenType, DateTokenType | null] {
  const nextTokenType = getTokenType(nextCode);

  if (currentTokenType === DateTokenType.initial) {
    return [nextTokenType, nextTokenType];
  }

  if (
    currentTokenType === DateTokenType.alphanumeric &&
    nextTokenType === DateTokenType.numeric
  ) {
    return [DateTokenType.alphanumeric, null];
  }

  if (
    currentTokenType === DateTokenType.numeric &&
    nextTokenType === DateTokenType.alphanumeric
  ) {
    return [DateTokenType.alphanumeric, DateTokenType.alphanumeric];
  }

  return [nextTokenType, null];
};

const tokenizeDate = function tokenizeDate(input: string): DateToken[] {
  const tokens: DateToken[] = [];

  let currentToken: DateToken = [DateTokenType.initial, ""];

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const code = char.charCodeAt(0);

    const [nextTokenType, updatedTokenType] = getNextTokenType(
      currentToken[0],
      code,
    );

    if (updatedTokenType !== null) {
      currentToken[0] = updatedTokenType;
    }

    if (currentToken[0] !== nextTokenType) {
      if (currentToken[1].length > 0) {
        tokens.push(currentToken);
      }

      currentToken = [nextTokenType, char];

      continue;
    }

    currentToken[1] += char;
  }

  if (currentToken[1].length > 0) {
    tokens.push(currentToken);
  }

  return tokens;
};

export { type DateToken, DateTokenType, tokenizeDate };
