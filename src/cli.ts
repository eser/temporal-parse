import "./polyfill.ts";
import { parseDate, toDate, toTemporal } from "./mod.ts";

const parsedDate = parseDate("07/12/1995", "en-GB"); // { year: 1995, month: 12, day: 7 }

// new temporal Date API
const temporal = toTemporal(parsedDate!);
console.log(temporal.toString()); // => 1995-12-07

// old Date API
const date = toDate(parsedDate!);
console.log(date.toString()); // => 1995-12-07T00:00:00
