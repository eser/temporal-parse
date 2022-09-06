import * as asserts from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { locales, type SupportedLocales } from "./locales.ts";
import { dateSamples } from "./sample-dates.ts";

const delimiters = [
  // ", ",
  ".",
  "-",
  "/",
  " ",
];

interface CheckDatePartResult {
  isValid: boolean;
  type?: "year" | "month" | "day" | "dayOrMonth" | "quarter";
  value: string | number;
}

const checkDatePart = function checkDatePart(
  datePart: string,
  _index: number,
  targetLocale?: SupportedLocales,
): CheckDatePartResult {
  const dateNumberRegExp = /^(?:[0-9]{1,4}|Q[1-4]{1})$/;
  const regExpResult = dateNumberRegExp.test(datePart);

  if (regExpResult) {
    if (datePart.startsWith("Q")) {
      return {
        isValid: true,
        type: "quarter",
        value: datePart,
      };
    }

    const dateNumber = parseInt(datePart, 10);

    if (dateNumber > 31) {
      return {
        isValid: true,
        type: "year",
        value: datePart,
      };
    }

    if (dateNumber > 12) {
      return {
        isValid: true,
        type: "day",
        value: datePart,
      };
    }

    return {
      isValid: true,
      type: "dayOrMonth",
      value: datePart,
    };
  }

  for (const [localeKey, locale] of Object.entries(locales)) {
    if (targetLocale && targetLocale !== localeKey) {
      continue;
    }

    if (
      locale.monthNamesLong.find((x) =>
        x.toLocaleLowerCase(targetLocale) ===
          datePart.toLocaleLowerCase(targetLocale)
      ) ||
      locale.monthNamesShort.find((x) =>
        x.toLocaleLowerCase(targetLocale) ===
          datePart.toLocaleLowerCase(targetLocale)
      )
    ) {
      return {
        isValid: true,
        type: "month",
        value: datePart,
      };
    }

    if (
      locale.dayNamesLong.find((x) =>
        x.toLocaleLowerCase(targetLocale) ===
          datePart.toLocaleLowerCase(targetLocale)
      ) ||
      locale.dayNamesShort.find((x) =>
        x.toLocaleLowerCase(targetLocale) ===
          datePart.toLocaleLowerCase(targetLocale)
      )
    ) {
      return {
        isValid: true,
        type: "day",
        value: datePart,
      };
    }
  }

  return { isValid: false, value: datePart };
};

interface CheckIfDateResult {
  isValid: boolean;
  date: string;
  dateValidated: string;
  parts: CheckDatePartResult[];
}

const checkIfDate = function checkIfDate(
  date: string,
  targetLocale?: SupportedLocales,
): CheckIfDateResult {
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

  const datePartChecks = remaining.map((datePart, index) =>
    checkDatePart(datePart, index, targetLocale)
  );

  return {
    isValid: datePartChecks.find((x) => !x.isValid) === undefined,
    date: date,
    dateValidated: date_,
    parts: datePartChecks,
  };
};

if (import.meta.main) {
  dateSamples.forEach((date) => {
    const result = checkIfDate(date);

    // if (!result.isValid) {
    console.log(result);
  });
}

export { checkIfDate };
