import * as asserts from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { locales, type SupportedLocales } from "./locales.ts";

const delimiters = [
  // ", ",
  ".",
  "-",
  "/",
  " ",
];

interface DatePartLexerResult {
  isValid: boolean;
  type?: "year" | "month" | "day" | "dayName" | "dayOrMonth" | "quarter";
  value: string | number;
  rawValue: string;
}

const tokenizeDatePart = function tokenizeDatePart(
  datePart: string,
  _index: number,
  targetLocale?: SupportedLocales,
): DatePartLexerResult {
  const dateNumberRegExp = /^(?:[0-9]{1,4}|Q[1-4]{1})$/;
  const regExpResult = dateNumberRegExp.test(datePart);

  if (regExpResult) {
    if (datePart.startsWith("Q")) {
      return {
        isValid: true,
        type: "quarter",
        value: Number(datePart.substring(1)),
        rawValue: datePart,
      };
    }

    const dateNumber = parseInt(datePart, 10);

    if (dateNumber > 31) {
      return {
        isValid: true,
        type: "year",
        value: Number(datePart),
        rawValue: datePart,
      };
    }

    if (dateNumber > 12) {
      return {
        isValid: true,
        type: "day",
        value: Number(datePart),
        rawValue: datePart,
      };
    }

    return {
      isValid: true,
      type: "dayOrMonth",
      value: Number(datePart),
      rawValue: datePart,
    };
  }

  for (const [localeKey, locale] of Object.entries(locales)) {
    if (targetLocale && targetLocale !== localeKey) {
      continue;
    }

    const findIndexLong = locale.monthNamesLong.findIndex((x) =>
      x.toLocaleLowerCase(targetLocale) ===
        datePart.toLocaleLowerCase(targetLocale)
    );

    if (findIndexLong !== -1) {
      return {
        isValid: true,
        type: "month",
        value: findIndexLong + 1,
        rawValue: datePart,
      };
    }

    const findIndexShort = locale.monthNamesShort.findIndex((x) =>
      x.toLocaleLowerCase(targetLocale) ===
        datePart.toLocaleLowerCase(targetLocale)
    );

    if (findIndexShort !== -1) {
      return {
        isValid: true,
        type: "month",
        value: findIndexShort + 1,
        rawValue: datePart,
      };
    }

    const findIndexLongForDay = locale.dayNamesLong.findIndex((x) =>
      x.toLocaleLowerCase(targetLocale) ===
        datePart.toLocaleLowerCase(targetLocale)
    );

    if (findIndexLongForDay !== -1) {
      return {
        isValid: true,
        type: "dayName",
        value: findIndexLongForDay + 1,
        rawValue: datePart,
      };
    }

    const findIndexShortForDay = locale.dayNamesShort.findIndex((x) =>
      x.toLocaleLowerCase(targetLocale) ===
        datePart.toLocaleLowerCase(targetLocale)
    );

    if (findIndexShortForDay !== -1) {
      return {
        isValid: true,
        type: "dayName",
        value: findIndexShortForDay + 1,
        rawValue: datePart,
      };
    }
  }

  return { isValid: false, value: "", rawValue: datePart };
};

interface DateLexerResult {
  isValid: boolean;
  hasQuarter: boolean;
  date: string;
  dateValidated: string;
  tokens: DatePartLexerResult[];
}

const tokenizeDate = function tokenizeDate(
  date: string,
  targetLocale?: SupportedLocales,
): DateLexerResult {
  const availableDelimiters = delimiters.filter((delimiter) =>
    date.includes(delimiter)
  );
  asserts.assert(
    availableDelimiters.length < 2,
    `Multiple delimiters found in date: ${date}`,
  );

  const date_ = date.replace(", ", " ").replace(",", "");
  let remaining;

  if (availableDelimiters.length > 0) {
    remaining = date_.split(availableDelimiters[0]);
    // } else if (date.includes(" ")) {
    //   remaining = date.split(" ");
  } else {
    remaining = [date_];
  }

  const datePartTokens = remaining.map((datePart, index) =>
    tokenizeDatePart(datePart, index, targetLocale)
  );

  return {
    isValid: datePartTokens.find((x) => !x.isValid) === undefined,
    hasQuarter:
      datePartTokens.findIndex((x) => x.isValid && x.type === "quarter") > -1,
    date: date,
    dateValidated: date_,
    tokens: datePartTokens,
  };
};

export { type DateLexerResult, tokenizeDate };
