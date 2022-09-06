import * as asserts from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { dateSamples } from "./sample-dates.ts";
import { tokenizeDate } from "./lexer.ts";

Deno.test(function addTest() {
  dateSamples.forEach((date) => {
    asserts.assertObjectMatch(tokenizeDate(date), { isValid: true });
  });
});
