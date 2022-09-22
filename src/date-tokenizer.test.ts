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

Deno.test(function falseValues() {
  const parsedDate = parseDate("not a date", "generic-europe-asia");

  asserts.assertEquals(parsedDate, undefined);
});

Deno.test(function dateComparision() {
  for (let i = 0; i < dateSamplesEA.length; i++) {
    const dateEA = dateSamplesEA[i];
    const dateEAParsed = parseDate(dateEA, "generic-europe-asia");

    const dateUS = dateSamplesUS[i];
    const dateUSParsed = parseDate(dateUS, "generic-american");

    // console.log(
    //   `dateEA: ${dateEA}, dateUS: ${dateUS}`,
    //   dateEAParsed,
    //   dateUSParsed,
    // );
    asserts.assertEquals(
      toDate(dateEAParsed!),
      toDate(dateUSParsed!),
      // `dateEA: ${dateEA}, dateUS: ${dateUS}`,
    );
  }
});

Deno.test(function localeCombination() {
  const combinedLocale = combineKnownLocales(
    "en-GB+tr-TR",
    "en-GB",
    "tr-TR",
  );

  const dateTR = "12 Ağustos 2022";
  const dateTRParsed = parseDate(dateTR, combinedLocale);

  const dateGB = "12 August 2022";
  const dateGBParsed = parseDate(dateGB, combinedLocale);

  asserts.assertEquals(
    toDate(dateTRParsed!),
    toDate(dateGBParsed!),
    // `dateTR: ${dateTR}, dateGB: ${dateGB}`,
  );
});
