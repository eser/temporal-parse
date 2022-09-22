import { type DateFormat } from "./types.ts";
import { type Locale, locales, type SupportedLocales } from "./locales.ts";
import {
  type DateToken,
  DateTokenType,
  tokenizeDate,
} from "./date-tokenizer.ts";
import {
  type FormatSymbol,
  FormatToken,
  FormatTokenType,
  quarters,
  symbols,
  tokenizeFormat,
} from "./format-tokenizer.ts";

const ensureFitsToConstraints = function ensureFitsToConstraints(
  formatToken: FormatToken,
  dateToken: DateToken,
): boolean {
  if (formatToken[0] === FormatTokenType.literal) {
    if (formatToken[1] !== dateToken[1]) {
      return false;
    }
  }

  if (formatToken[0] === FormatTokenType.placeholder) {
    const symbol = symbols[formatToken[1]];

    const length = dateToken[1].length;

    if (length < symbol.options.minLength) {
      return false;
    }

    if (
      symbol.options.maxLength !== null && length > symbol.options.maxLength
    ) {
      return false;
    }

    if (
      symbol.options.type === "numeric" &&
      dateToken[0] !== DateTokenType.numeric
    ) {
      return false;
    }

    if (
      symbol.options.type === "alphanumeric" &&
      dateToken[0] !== DateTokenType.alphanumeric
    ) {
      return false;
    }
  }

  return true;
};

const findLookupValueIfAny = function findLookupValueIfAny(
  symbol: FormatSymbol,
  dateToken: DateToken,
  locale: Locale,
): string | undefined {
  if (symbol.key === "month" && symbol.options.type === "alphanumeric") {
    if (
      symbol.options.display === "short" || symbol.options.display === "full"
    ) {
      const findResult = Object.entries(
        locale.monthNames[symbol.options.display],
      ).find((
        [, value],
      ) => value.includes(dateToken[1]));

      return findResult?.[0];
    }

    return undefined;
  }

  if (symbol.key === "weekday" && symbol.options.type === "alphanumeric") {
    if (
      symbol.options.display === "short" || symbol.options.display === "full"
    ) {
      const findResult = Object.entries(locale.dayNames[symbol.options.display])
        .find((
          [, value],
        ) => value.includes(dateToken[1]));

      if (findResult === undefined) {
        return undefined;
      }

      return String(Number(findResult[0]) + 1);
    }

    return undefined;
  }

  if (symbol.key === "quarter" && symbol.options.type === "alphanumeric") {
    return String(quarters.findIndex((name) => name === dateToken[1]));
  }

  return undefined;
};

const tryParseDateWithFormat = function tryParseDateWithFormat(
  dateTokens: DateToken[],
  dateFormat: string,
  locale: Locale,
): DateFormat | undefined {
  const formatTokens = tokenizeFormat(dateFormat);

  // console.log(dateFormat, formatTokenizerToRegExp(formatTokens));
  if (formatTokens.length !== dateTokens.length) {
    return undefined;
  }

  const result: Record<string, string> = {};

  for (let i = 0; i < formatTokens.length; i++) {
    const formatToken = formatTokens[i];
    const dateToken = dateTokens[i];

    if (!ensureFitsToConstraints(formatToken, dateToken)) {
      return undefined;
    }

    if (formatToken[0] === FormatTokenType.placeholder) {
      const symbol = symbols[formatToken[1]];

      const value = findLookupValueIfAny(symbol, dateToken, locale);

      if (value !== undefined) {
        result[symbol.key] = value;
      } else {
        result[symbol.key] = dateToken[1];
      }

      // console.log(
      //   dateFormat,
      //   `symbol: ${formatToken[1]}, name: ${symbol.name}, value: ${
      //     result[symbol.key]
      //   }, maxLength: ${symbol.options.maxLength}`,
      // );
    }
  }

  // console.log(dateFormat, result);

  return result;
};

const parseDate = function parseDate(
  input: string,
  targetLocale: SupportedLocales | Locale,
): DateFormat | undefined {
  const tokens = tokenizeDate(input);
  const locale = (targetLocale.constructor === String)
    ? locales[targetLocale]
    : <Locale> targetLocale;

  for (const [, dateFormat] of Object.entries(locale.dateFormats)) {
    const date = tryParseDateWithFormat(tokens, dateFormat, locale);

    if (date !== undefined) {
      return date;
    }
  }

  return undefined;
};

export { parseDate };
