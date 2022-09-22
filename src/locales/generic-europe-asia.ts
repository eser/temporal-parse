import { type Locale } from "./types.ts";
import { combineMonthNames, combineWeekdayNames } from "./combiners.ts";
import { locale as enGB } from "./en-GB.ts";
import { locale as deDE } from "./de-DE.ts";
import { locale as frFR } from "./fr-FR.ts";
import { locale as itIT } from "./it-IT.ts";
import { locale as esES } from "./es-ES.ts";
import { locale as trTR } from "./tr-TR.ts";

let i = 0;

const locale: Locale = {
  code: "generic-europe-asia",

  isDayPlacedFirst: true,
  dateDelimiters: ["/", ".", "-"],

  dateFormats: {
    full: "EEEE, d MMMM yyyy",
    wide: "d MMMM yyyy",
    long: "d MMM yyyy",
    short: "dd/MM/yyyy",

    [++i]: "yyyy/M/d",
    [++i]: "d/M/yyyy",
    [++i]: "M/yyyy",
    [++i]: "yyyy/M",
    // ----
    [++i]: "yyyy-M-d",
    [++i]: "d-M-yyyy",
    [++i]: "d-MMM-yyyy",
    [++i]: "d-MMMM-yyyy",
    [++i]: "M-yyyy",
    [++i]: "yyyy-M",
    // ----
    [++i]: "yyyy.M.dd",
    [++i]: "d.M.yyyy",
    [++i]: "d.MMM.yyyy",
    [++i]: "d.MMMM.yyyy",
    [++i]: "M.yyyy",
    [++i]: "yyyy.M",
    // ----
    [++i]: "yyyy M d",
    [++i]: "d M yyyy",
    [++i]: "d MMM yyyy",
    [++i]: "d MMMM yyyy",
    [++i]: "M yyyy",
    [++i]: "yyyy M",
    // ----
    [++i]: "d, M, yyyy",
    [++i]: "d, MMM, yyyy",
    [++i]: "d, MMMM, yyyy",
    // ----
    [++i]: "MMM d",
    [++i]: "MMMM d",
    // ----
    [++i]: "d MMM",
    [++i]: "d MMMM",
    // ----
    [++i]: "d-MMM",
    [++i]: "d-MMMM",
    // ----
    [++i]: "MMM yyyy",
    [++i]: "MMMM yyyy",
    // ----
    [++i]: "yyyy MMM d",
    [++i]: "yyyy MMMM d",
    // ----
    [++i]: "d/M",
    [++i]: "MMM-d",
    [++i]: "MMMM, d",
    [++i]: "MMMM d, yyyy",
    [++i]: "MMMM, yyyy",
    // ----
    [++i]: "qq yyyy",
    [++i]: "yyyy qq",
    [++i]: "EE, d MMMM yyyy",
    // ---- extended: will be removed in the future
    [++i]: "dd/MMMM/yyyy",
    [++i]: "dd/MMM/yyyy",
    [++i]: "d/MMMM/yyyy",
    [++i]: "d/MMM/yyyy",
    [++i]: "MMMM dd yyyy",
    [++i]: "MMMM d yyyy",
    [++i]: "MMMM/dd/yyyy",
    [++i]: "MMMM/d/yyyy",
    [++i]: "MMMM.dd.yyyy",
    [++i]: "MMMM.d.yyyy",
    [++i]: "MMMM-dd-yyyy",
    [++i]: "MMMM-d-yyyy",
    [++i]: "MMMM.yyyy",
    [++i]: "MMMM-yyyy",
    [++i]: "MMM/yyyy",
    [++i]: "MMM.yyyy",
    [++i]: "MMM-yyyy",
    [++i]: "MMM/yy",
    [++i]: "MMM.yy",
    [++i]: "yyyy MMM",
    [++i]: "yyyy/MMM",
    [++i]: "yyyy.MMM",
    [++i]: "yyyy-MMM",
    [++i]: "dd/MMM",
    [++i]: "dd.MMM",
    [++i]: "qq/yyyy",
    [++i]: "qq.yyyy",
    [++i]: "qq-yyyy",
  },
  timeFormats: {
    full: "HH:mm:ss zzzz",
    wide: "HH:mm:ss z",
    long: "HH:mm:ss",
    short: "HH:mm",
  },
  dateTimeFormats: {
    full: "{{date}} {{time}}",
    wide: "{{date}} {{time}}",
    long: "{{date}} {{time}}",
    short: "{{date}} {{time}}",
  },

  monthNames: {
    full: combineMonthNames("full", enGB, deDE, frFR, itIT, esES, trTR),
    short: combineMonthNames("short", enGB, deDE, frFR, itIT, esES, trTR),
  },
  dayNames: {
    full: combineWeekdayNames("full", enGB, deDE, frFR, itIT, esES, trTR),
    short: combineWeekdayNames("short", enGB, deDE, frFR, itIT, esES, trTR),
  },
};

export { locale };
