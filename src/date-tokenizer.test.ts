import * as asserts from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { dateSamples, dateSamplesUS } from "./sample-dates.ts";
import { DateTokenType, tokenizeDate } from "./date-tokenizer.ts";
import { parseDate, toDate } from "./parser.ts";

Deno.test(function tokenizeDateTest() {
  dateSamples.forEach((date) => {
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
  for (let i = 0; i < dateSamples.length; i++) {
    const date = dateSamples[i];
    const dateParsed = parseDate(date, "tr-TR");

    const dateUS = dateSamplesUS[i];
    const dateUSParsed = parseDate(dateUS, "en-US");

    asserts.assertEquals(
      toDate(dateParsed!),
      toDate(dateUSParsed!),
      // `date: ${date}, dateUS: ${dateUS}`,
    );
  }
});
