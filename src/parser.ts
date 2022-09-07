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
  value: string | number | undefined,
  defaultValue: number,
): number {
  if (value === undefined) {
    return defaultValue;
  }

  return Number(value);
};

const findTokenValue = function findTokenValue<T>(
  tokenized: DateLexerResult,
  type: string,
): T[] {
  return tokenized.tokens.filter((x) => x.isValid && x.type === type).map((x) =>
    x.value as unknown as T
  );
};

interface JoinDatePartsFormat {
  year?: string;
  month?: string;
  day?: string;
  dayName?: string;
  quarter?: string;
}

const joinDateParts = function joinDateParts(
  tokenized: DateLexerResult,
  formatter: (tokenized: DateLexerResult) => Partial<JoinDatePartsFormat>,
): Date {
  const actualValues = formatter(tokenized);

  const result = new Date(
    getNumberOrDefault(actualValues.year, new Date().getFullYear()),
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
  const sums = generateSums(tokenized);

  // determine locale
  const currentLocale = (targetLocale !== undefined)
    ? locales[targetLocale]
    : undefined;

  console.log(tokenized);

  // day & month
  if (
    sums.day === 1 && sums.dayOrMonth === 0 && sums.month === 1 &&
    sums.year === 0 && sums.quarter === 0
  ) {
    return joinDateParts(
      tokenized,
      (tokenized) => ({
        day: findTokenValue<string>(tokenized, "day")?.[0],
        month: findTokenValue<string>(tokenized, "month")?.[0],
      }),
    );
  }

  // day & dayOrMonth
  if (
    sums.day === 1 && sums.dayOrMonth === 1 && sums.month === 0 &&
    sums.year === 0 && sums.quarter === 0
  ) {
    return joinDateParts(
      tokenized,
      (tokenized) => ({
        day: findTokenValue<string>(tokenized, "day")?.[0],
        month: findTokenValue<string>(tokenized, "dayOrMonth")?.[0],
      }),
    );
  }

  // dayOrMonth & month
  if (
    sums.day === 0 && sums.dayOrMonth === 1 && sums.month === 1 &&
    sums.year === 0 && sums.quarter === 0
  ) {
    return joinDateParts(
      tokenized,
      (tokenized) => ({
        day: findTokenValue<string>(tokenized, "dayOrMonth")?.[0],
        month: findTokenValue<string>(tokenized, "month")?.[0],
      }),
    );
  }

  // month & year
  if (
    sums.day === 0 && sums.dayOrMonth === 0 && sums.month === 1 &&
    sums.year === 1 && sums.quarter === 0
  ) {
    return joinDateParts(
      tokenized,
      (tokenized) => ({
        month: findTokenValue<string>(tokenized, "month")?.[0],
        year: findTokenValue<string>(tokenized, "year")?.[0],
      }),
    );
  }

  // dayOrMonth & year
  if (
    sums.day === 0 && sums.dayOrMonth === 1 && sums.month === 0 &&
    sums.year === 1 && sums.quarter === 0
  ) {
    return joinDateParts(
      tokenized,
      (tokenized) => ({
        month: findTokenValue<string>(tokenized, "dayOrMonth")?.[0],
        year: findTokenValue<string>(tokenized, "year")?.[0],
      }),
    );
  }

  // day & dayOrMonth & year
  if (
    sums.day === 1 && sums.dayOrMonth === 1 && sums.month === 0 &&
    sums.year === 1 && sums.quarter === 0
  ) {
    return joinDateParts(
      tokenized,
      (tokenized) => ({
        day: findTokenValue<string>(tokenized, "day")?.[0],
        month: findTokenValue<string>(tokenized, "dayOrMonth")?.[0],
        year: findTokenValue<string>(tokenized, "year")?.[0],
      }),
    );
  }

  // dayOrMonth & dayOrMonth & year
  if (
    sums.day === 0 && sums.dayOrMonth === 2 && sums.month === 0 &&
    sums.year === 1 && sums.quarter === 0
  ) {
    const yearIndex = tokenized.tokens.findIndex((x) =>
      x.isValid && x.type === "year"
    );
    const dayOrMonthIndex = tokenized.tokens.findIndex((x) =>
      x.isValid && x.type === "dayOrMonth"
    );

    let dayOrder: number;
    let monthOrder: number;

    if (yearIndex < dayOrMonthIndex) {
      dayOrder = 0;
      monthOrder = 1;
    } else {
      asserts.assert(
        currentLocale !== undefined,
        "target locale must be defined",
      );

      dayOrder = currentLocale.isDayPlacedFirst ? 0 : 1;
      monthOrder = currentLocale.isDayPlacedFirst ? 1 : 0;
    }

    return joinDateParts(
      tokenized,
      (tokenized) => ({
        day: findTokenValue<string>(tokenized, "dayOrMonth")?.[dayOrder],
        month: findTokenValue<string>(tokenized, "dayOrMonth")?.[monthOrder],
        year: findTokenValue<string>(tokenized, "year")?.[0],
      }),
    );
  }

  // dayOrMonth & month & year
  if (
    sums.day === 0 && sums.dayOrMonth === 1 && sums.month === 1 &&
    sums.year === 1 && sums.quarter === 0
  ) {
    return joinDateParts(
      tokenized,
      (tokenized) => ({
        day: findTokenValue<string>(tokenized, "dayOrMonth")?.[0],
        month: findTokenValue<string>(tokenized, "month")?.[0],
        year: findTokenValue<string>(tokenized, "year")?.[0],
      }),
    );
  }

  // quarter
  if (
    sums.day === 0 && sums.dayOrMonth === 0 && sums.month === 0 &&
    sums.year === 0 && sums.quarter === 1
  ) {
    return joinDateParts(
      tokenized,
      (tokenized) => {
        const quarter = findTokenValue<string>(tokenized, "quarter")?.[0];

        asserts.assert(quarter !== undefined, "quarter must be defined");

        let month;
        switch (Number(quarter)) {
          case 1:
            month = "1";
            break;
          case 2:
            month = "4";
            break;
          case 3:
            month = "7";
            break;
          case 4:
            month = "10";
            break;
            // default: asserts.assertNever(quarter);
        }

        return {
          quarter: quarter,
          month: month,
        };
      },
    );
  }

  // year & quarter
  if (
    sums.day === 0 && sums.dayOrMonth === 0 && sums.month === 0 &&
    sums.year === 1 && sums.quarter === 1
  ) {
    return joinDateParts(
      tokenized,
      (tokenized) => {
        const quarter = findTokenValue<string>(tokenized, "quarter")?.[0];

        asserts.assert(quarter !== undefined, "quarter must be defined");

        let month;
        switch (Number(quarter)) {
          case 1:
            month = "1";
            break;
          case 2:
            month = "4";
            break;
          case 3:
            month = "7";
            break;
          case 4:
            month = "10";
            break;
            // default: asserts.assertNever(quarter);
        }

        return {
          quarter: quarter,
          month: month,
          year: findTokenValue<string>(tokenized, "year")?.[0],
        };
      },
    );
  }

  return undefined;
};

if (import.meta.main) {
  let i = 0;
  dateSamples.forEach((date) => {
    if (++i > 2) {
      return;
    }

    const result = parseDate(date, "tr-TR");

    console.log(
      i,
      ": ",
      date,
      " -> ",
      result?.toLocaleDateString("tr-TR"),
      " -> ",
      result,
    );
    console.log("");
  });
}

export { parseDate };
