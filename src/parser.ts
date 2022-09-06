import * as asserts from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { locales, type SupportedLocales } from "./locales.ts";
import { dateSamples } from "./sample-dates.ts";
import { type DateLexerResult, tokenizeDate } from "./lexer.ts";

const generateSums = function generateSums(tokenized: DateLexerResult) {
  return tokenized.tokens.reduce((acc, token) => {
    if (!token.isValid || token.type === undefined) {
      return acc;
    }

    acc[token.type]++;

    return acc;
  }, {
    "year": 0,
    "month": 0,
    "day": 0,
    "dayOrMonth": 0,
    "quarter": 0,
  });
};

const getNumberOrDefault = function getNumberOrDefault(
  value: string | undefined,
  defaultValue: number,
): number {
  if (value === undefined) {
    return defaultValue;
  }

  return Number(value);
};

interface JoinDatePartsFormat {
  year?: string;
  month?: string;
  day?: string;
  dayName?: string;
}

const joinDateParts = function joinDateParts(
  tokenized: DateLexerResult,
  format: JoinDatePartsFormat,
): Date {
  const actualValues = Object.entries(format).reduce(
    (acc, [part, value]) => {
      if (!value.startsWith("_")) {
        return { ...acc, [part]: value };
      }

      const tokenName = value.substring(1);
      const token = tokenized.tokens.find((token) => token.type === tokenName);

      if (token === undefined) {
        return acc;
      }

      return { ...acc, [part]: token.value };
    },
    <JoinDatePartsFormat> {
      year: undefined,
      month: undefined,
      day: undefined,
      dayName: undefined,
    },
  );

  const result = new Date(
    getNumberOrDefault(actualValues.year, 1),
    getNumberOrDefault(actualValues.month, 1) - 1,
    getNumberOrDefault(actualValues.day, 1),
  );

  return result;
};

const parseDate = function parseDate(
  date: string,
  targetLocale?: SupportedLocales,
): Date | undefined {
  const tokenized = tokenizeDate(date, targetLocale);
  console.log(tokenized);
  const sums = generateSums(tokenized);
  console.log(sums);

  // month & year

  // dayOrMonth & year
  if (
    sums.day === 0 && sums.dayOrMonth === 1 && sums.month === 0 &&
    sums.year === 1
  ) {
    return joinDateParts(tokenized, { month: "_dayOrMonth", year: "_year" });
  }

  // day & dayOrMonth & year
  if (
    sums.day === 1 && sums.dayOrMonth === 1 && sums.month === 0 &&
    sums.year === 1
  ) {
    return joinDateParts(tokenized, {
      day: "_day",
      month: "_dayOrMonth",
      year: "_year",
    });
  }

  return undefined;
};

if (import.meta.main) {
  let i = 0;
  dateSamples.forEach((date) => {
    if (++i > 2) {
      Deno.exit(0);
    }

    const result = parseDate(date);

    console.log(date, " -> ", result?.toLocaleDateString(), " -> ", result);
  });
}

export { parseDate };
