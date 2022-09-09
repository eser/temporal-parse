import * as asserts from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { dateSamplesEA, dateSamplesUS } from "./sample-dates.ts";
import { DateTokenType, tokenizeDate } from "./date-tokenizer.ts";
import { combineKnownLocales, parseDate, toDate } from "./mod.ts";

Deno.test(function tokenizeDateTest() {
  dateSamplesEA.forEach((date) => {
    const tokenized = tokenizeDate(date);

    asserts.assert(tokenized.length > 0, `Date "${date}" is not valid`);
    asserts.assertEquals(
      tokenized.findIndex((x) => x[0] === DateTokenType.unknown),
      -1,
      `Date "${date}" is not valid`,
    );
  });
});

Deno.test(function dateComparision() {
  for (let i = 0; i < dateSamplesEA.length; i++) {
    const date = dateSamplesEA[i];
    const dateParsed = parseDate(date, "generic-europe-asia");

    const dateUS = dateSamplesUS[i];
    const dateUSParsed = parseDate(dateUS, "generic-american");

    asserts.assertEquals(
      toDate(dateParsed!),
      toDate(dateUSParsed!),
      // `date: ${date}, dateUS: ${dateUS}`,
    );
  }
});

Deno.test(function localeCombination() {
  const combinedLocale = combineKnownLocales(
    "generic-europe-asia",
    "generic-american",
  );

  const date = "12 Ağustos 2022";
  const dateParsed = parseDate(date, combinedLocale);

  const dateUS = "12 August 2022";
  const dateUSParsed = parseDate(dateUS, combinedLocale);

  asserts.assertEquals(
    toDate(dateParsed!),
    toDate(dateUSParsed!),
    // `date: ${date}, dateUS: ${dateUS}`,
  );
});
