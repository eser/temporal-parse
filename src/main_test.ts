import * as asserts from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { dateSamples } from "./sample-dates.ts";
import { checkIfDate } from "./main.ts";

Deno.test(function addTest() {
  dateSamples.forEach((date) => {
    asserts.assertObjectMatch(checkIfDate(date), { isValid: true });
  });
});
