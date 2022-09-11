import {
  type Locale,
  type MonthNames,
  type Months,
  type WeekdayNames,
  type Weekdays,
} from "./types.ts";

const combineFormats = function combineFormats(
  ...formats: (Record<string, string> | undefined)[]
) {
  const result: Record<string, string> = {};
  let i = 0;

  for (const formatDictionary of formats) {
    if (formatDictionary === undefined) {
      continue;
    }

    for (const [formatKey, formatString] of Object.entries(formatDictionary)) {
      if (formatKey in result) {
        result[i++] = formatString;
        continue;
      }

      result[formatKey] = formatString;
    }
  }

  return result;
};

const combineMonthNames = function combineMonthNames(
  format: "full" | "short",
  ...locales: Locale[]
): MonthNames {
  const monthNames: Partial<MonthNames> = {};

  for (let i = 1; i <= 12; i++) {
    monthNames[<Months> i] = locales.flatMap((locale) =>
      locale.monthNames[format][<Months> i]
    );
  }

  return <MonthNames> monthNames;
};

const combineWeekdayNames = function combineWeekdayNames(
  format: "full" | "short",
  ...locales: Locale[]
): WeekdayNames {
  const dayNames: Partial<WeekdayNames> = {};

  for (let i = 0; i <= 6; i++) {
    dayNames[<Weekdays> i] = locales.flatMap((locale) =>
      locale.dayNames[format][<Weekdays> i]
    );
  }

  return <WeekdayNames> dayNames;
};

const combineLocales = function combineLocales(
  code: string,
  ...locales: Locale[]
): Locale {
  return {
    code: code,
    isDayPlacedFirst: locales[0]!.isDayPlacedFirst,
    dateFormats: combineFormats(...locales.map((locale) => locale.dateFormats)),
    timeFormats: combineFormats(...locales.map((locale) => locale.timeFormats)),
    dateTimeFormats: combineFormats(
      ...locales.map((locale) => locale.dateTimeFormats),
    ),
    monthNames: {
      full: combineMonthNames("full", ...locales),
      short: combineMonthNames("short", ...locales),
    },
    dayNames: {
      full: combineWeekdayNames("full", ...locales),
      short: combineWeekdayNames("short", ...locales),
    },
  };
};

export { combineLocales, combineMonthNames, combineWeekdayNames };
