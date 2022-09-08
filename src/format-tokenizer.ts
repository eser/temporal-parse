interface FormatSymbol {
  key: string;
  name: string;
  options: {
    type: "numeric" | "alphanumeric";
    display: "numeric" | "2-digit" | "narrow" | "short" | "full";
    hour12?: boolean;
    minLength: number;
    maxLength: number | null;
    minValue?: number;
    maxValue?: number;
  };
}

const quarters = ["Q1", "Q2", "Q3", "Q4"];

// ref: http://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
const symbols: Record<string, FormatSymbol> = {
  // "G": "era", // ! not supported
  // "Y": "year", // ! not supported
  "yyyy": {
    key: "year",
    name: "year",
    options: {
      type: "numeric",
      display: "numeric",
      minLength: 4,
      maxLength: 4,
      minValue: 0,
      maxValue: 9999,
    },
  },
  "yyy": {
    key: "year",
    name: "year",
    options: {
      type: "numeric",
      display: "numeric",
      minLength: 3,
      maxLength: 3,
      minValue: 0,
      maxValue: 999,
    },
  },
  "yy": {
    key: "year",
    name: "year",
    options: {
      type: "numeric",
      display: "2-digit",
      minLength: 2,
      maxLength: 2,
      minValue: 0,
      maxValue: 99,
    },
  },
  // "u": "extended year", // ! not supported
  // "U": "cyclic year", // ! not supported
  // "r": "related gregorian year", // ! not supported
  // "Q": { key: "quarter", name: "quarter" }, // ! not supported
  "qq": {
    key: "quarter",
    name: "quarter",
    options: {
      type: "alphanumeric",
      display: "narrow",
      minLength: 2,
      maxLength: 2,
      minValue: 1,
      maxValue: 4,
    },
  },
  "q": {
    key: "quarter",
    name: "quarter",
    options: {
      type: "numeric",
      display: "numeric",
      minLength: 1,
      maxLength: 1,
      minValue: 1,
      maxValue: 4,
    },
  },
  "MMMM": {
    key: "month",
    name: "month",
    options: {
      type: "alphanumeric",
      display: "full",
      minLength: 3,
      maxLength: null,
      minValue: 1,
      maxValue: 12,
    },
  },
  "MMM": {
    key: "month",
    name: "month",
    options: {
      type: "alphanumeric",
      display: "short",
      minLength: 3,
      maxLength: 3,
      minValue: 1,
      maxValue: 12,
    },
  },
  "MM": {
    key: "month",
    name: "month",
    options: {
      type: "numeric",
      display: "2-digit",
      minLength: 2,
      maxLength: 2,
      minValue: 1,
      maxValue: 12,
    },
  },
  "M": {
    key: "month",
    name: "month",
    options: {
      type: "numeric",
      display: "numeric",
      minLength: 1,
      maxLength: 2,
      minValue: 1,
      maxValue: 12,
    },
  },
  // "L": { key: "month", name: "month" }, // ! not supported
  // "I": "nothing (deprecated)", // ! not supported
  // "w": "week of year", // ! not supported
  // "W": "week of month", // ! not supported
  "dd": {
    key: "day",
    name: "day of month",
    options: {
      type: "numeric",
      display: "2-digit",
      minLength: 2,
      maxLength: 2,
      minValue: 1,
      maxValue: 31,
    },
  },
  "d": {
    key: "day",
    name: "day of month",
    options: {
      type: "numeric",
      display: "numeric",
      minLength: 1,
      maxLength: 2,
      minValue: 1,
      maxValue: 31,
    },
  },
  // "D": "day of year", // ! not supported
  // "F": "day of week in month", // ! not supported
  // "g": "modified julian day", // ! not supported
  "EE": {
    key: "weekday",
    name: "weekday name",
    options: {
      type: "alphanumeric",
      display: "full",
      minLength: 3,
      maxLength: null,
      minValue: 1,
      maxValue: 7,
    },
  },
  "E": {
    key: "weekday",
    name: "weekday name",
    options: {
      type: "alphanumeric",
      display: "short",
      minLength: 2,
      maxLength: 3,
      minValue: 1,
      maxValue: 7,
    },
  },
  "ee": {
    key: "weekday",
    name: "weekday",
    options: {
      type: "numeric",
      display: "2-digit",
      minLength: 2,
      maxLength: 2,
      minValue: 1,
      maxValue: 7,
    },
  },
  "e": {
    key: "weekday",
    name: "weekday",
    options: {
      type: "numeric",
      display: "numeric",
      minLength: 1,
      maxLength: 2,
      minValue: 1,
      maxValue: 7,
    },
  },
  // "c": "weekday", // ! not supported
  "aa": {
    key: "dayPeriod",
    name: "day period",
    options: {
      type: "alphanumeric",
      display: "short",
      minLength: 2,
      maxLength: 2,
      minValue: 1,
      maxValue: 2,
    },
  },
  "a": {
    key: "dayPeriod",
    name: "day period",
    options: {
      type: "alphanumeric",
      display: "narrow",
      minLength: 1,
      maxLength: 1,
      minValue: 1,
      maxValue: 2,
    },
  },
  // "b": "extended day period", // ! not supported
  // "B": "flexible day period", // ! not supported
  "hh": {
    key: "hour",
    name: "hour 1-12",
    options: {
      type: "numeric",
      display: "2-digit",
      hour12: true,
      minLength: 2,
      maxLength: 2,
      minValue: 1,
      maxValue: 12,
    },
  },
  "h": {
    key: "hour",
    name: "hour 1-12",
    options: {
      type: "numeric",
      display: "numeric",
      hour12: true,
      minLength: 1,
      maxLength: 2,
      minValue: 1,
      maxValue: 12,
    },
  },
  "HH": {
    key: "hour",
    name: "hour 0-23",
    options: {
      type: "numeric",
      display: "2-digit",
      hour12: false,
      minLength: 2,
      maxLength: 2,
      minValue: 0,
      maxValue: 23,
    },
  },
  "H": {
    key: "hour",
    name: "hour 0-23",
    options: {
      type: "numeric",
      display: "numeric",
      hour12: false,
      minLength: 1,
      maxLength: 2,
      minValue: 0,
      maxValue: 23,
    },
  },
  // "K": "hour 0-11", // ! not supported
  // "k": "hour 1-24", // ! not supported
  // "j": "hour", // ! not supported
  // "J": "hour", // ! not supported
  // "C": "hour", // ! not supported
  "mm": {
    key: "minute",
    name: "minute",
    options: {
      type: "numeric",
      display: "2-digit",
      minLength: 2,
      maxLength: 2,
      minValue: 0,
      maxValue: 59,
    },
  },
  "m": {
    key: "minute",
    name: "minute",
    options: {
      type: "numeric",
      display: "numeric",
      minLength: 1,
      maxLength: 2,
      minValue: 0,
      maxValue: 59,
    },
  },
  "ss": {
    key: "second",
    name: "second",
    options: {
      type: "numeric",
      display: "2-digit",
      minLength: 2,
      maxLength: 2,
      minValue: 0,
      maxValue: 59,
    },
  },
  "s": {
    key: "second",
    name: "second",
    options: {
      type: "numeric",
      display: "numeric",
      minLength: 1,
      maxLength: 2,
      minValue: 0,
      maxValue: 59,
    },
  },
  // "S": "fractional second", // ! not supported
  // "A": "millisecond in day", // ! not supported
  "zz": {
    key: "timezone",
    name: "timezone",
    options: {
      type: "alphanumeric",
      display: "full",
      minLength: 3,
      maxLength: null,
    },
  },
  "z": {
    key: "timezone",
    name: "timezone",
    options: {
      type: "alphanumeric",
      display: "short",
      minLength: 3,
      maxLength: 3,
    },
  },
  // "Z": "timezone", // ! not supported
  // "O": "timezone", // ! not supported
  // "v": "timezone", // ! not supported
  // "V": "timezone", // ! not supported
  // "X": "timezone", // ! not supported
  // "x": "timezone", // ! not supported
};

const enum FormatTokenType {
  unknown = 0,
  literal = 1,
  placeholder = 2,
}

interface FormatToken {
  length: 2;
  0: FormatTokenType;
  1: string;
}

const tokenizeFormat = function tokenizeFormat(input: string): FormatToken[] {
  const tokens: FormatToken[] = [];

  let currentToken: FormatToken = [FormatTokenType.unknown, ""];

  const pushToken = function pushToken() {
    let tokenType = currentToken[0] ?? FormatTokenType.unknown;

    if (tokenType === FormatTokenType.unknown) {
      if (currentToken[1] in symbols) {
        tokenType = FormatTokenType.placeholder;
      } else {
        tokenType = FormatTokenType.literal;
      }
    }

    // console.log(currentToken, tokens.at(-1));
    if (
      tokenType === FormatTokenType.literal &&
      tokens.at(-1)?.[0] === FormatTokenType.literal
    ) {
      tokens[tokens.length - 1][1] += currentToken[1];

      return;
    }

    tokens.push([tokenType, currentToken[1]]);
  };

  let inQuote = undefined;

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (inQuote === undefined && currentToken[1].at(-1) !== char) {
      if (currentToken[1].length > 0) {
        pushToken();
      }

      currentToken = [FormatTokenType.unknown, ""];
    }

    if (char === '"' || char === "'") {
      if (inQuote === undefined) {
        if (currentToken[0] === FormatTokenType.placeholder) {
          pushToken();

          currentToken[1] = "";
        }

        currentToken[0] = FormatTokenType.literal;
        inQuote = char;
        continue;
      } else if (inQuote === char) {
        inQuote = undefined;
        continue;
      }
    }

    currentToken[1] += char;
  }

  if (currentToken[1].length > 0) {
    pushToken();
  }

  return tokens;
};

const escapeRegExp = function escapeRegex(input: string) {
  // $& means the whole matched string
  return input.replace(/[.*+?^${}()|[\]\\\/]/g, "\\$&");
};

const formatTokenizerToRegExp = function formatTokenizerToRegExp(
  tokens: FormatToken[],
) {
  const regExp = tokens.reduce((acc, curr, idx, arr) => {
    if (curr[0] === FormatTokenType.literal) {
      return `${acc}${escapeRegExp(curr[1])}`;
    }

    let nextChar = "$";
    const peek = arr.at(idx + 1);
    if (peek !== undefined && peek[0] === FormatTokenType.literal) {
      nextChar = escapeRegExp(peek[1].at(0)!);
    }

    const symbol = symbols[curr[1]];

    let chars;
    let length;
    if (symbol.options.display === "2-digit") {
      chars = "\\d";
      length = "{2}";
    } else if (symbol.options.display === "numeric") {
      chars = "\\d";
      length = "+";
    } else {
      chars = `^${nextChar}`;
      length = "+";
    }

    return `${acc}(?<${symbol.key}>[${chars}]${length})`;
  }, "");

  return regExp;
};

if (typeof Deno !== "undefined" && import.meta.main) {
  console.log(tokenizeFormat("yyyy-MM-dd"));
  console.log(tokenizeFormat("dd.MM.yyyy"));
}

export {
  type FormatSymbol,
  type FormatToken,
  formatTokenizerToRegExp,
  FormatTokenType,
  quarters,
  symbols,
  tokenizeFormat,
};
