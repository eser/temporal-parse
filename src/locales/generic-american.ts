import { type Locale } from "./types.ts";
import { locale as enUS } from "./en-US.ts";
// import { locale as enGB } from "./en-GB.ts";
// import { locale as deDE } from "./de-DE.ts";
// import { locale as frFR } from "./fr-FR.ts";
// import { locale as itIT } from "./it-IT.ts";
// import { locale as esES } from "./es-ES.ts";
// import { locale as trTR } from "./tr-TR.ts";

let i = 0;

const locale: Locale = {
  code: "generic-american",

  isDayPlacedFirst: false,
  dateDelimiters: ["/", ".", "-"],

  dateFormats: {
    ...enUS.dateFormats,
    [++i]: "yyyy/M/d",
    [++i]: "M/d/yyyy",
    [++i]: "M/yyyy",
    [++i]: "yyyy/M",
    // ----
    [++i]: "yyyy-M-d",
    [++i]: "M-d-yyyy",
    [++i]: "MMM-d-yyyy",
    [++i]: "MMMM-d-yyyy",
    [++i]: "M-yyyy",
    [++i]: "yyyy-M",
    // ----
    [++i]: "yyyy.M.dd",
    [++i]: "M.d.yyyy",
    [++i]: "MMM.d.yyyy",
    [++i]: "MMMM.d.yyyy",
    [++i]: "M.yyyy",
    [++i]: "yyyy.M",
    // ----
    [++i]: "yyyy M d",
    [++i]: "M d yyyy",
    [++i]: "MMM d yyyy",
    [++i]: "MMMM d yyyy",
    [++i]: "M yyyy",
    [++i]: "yyyy M",
    // ----
    [++i]: "M, d, yyyy",
    [++i]: "MMM, d, yyyy",
    [++i]: "MMMM, d, yyyy",
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
    [++i]: "M/d",
    [++i]: "MMM-d",
    [++i]: "MMMM, d",
    [++i]: "MMMM d, yyyy",
    [++i]: "MMMM, yyyy",
    // ----
    [++i]: "qq yyyy",
    [++i]: "yyyy qq",
    [++i]: "EE, d MMMM yyyy",
    // ----
    [++i]: "d MMM yyyy",
    [++i]: "d MMMM yyyy",
    [++i]: "d-MMM-yyyy",
    [++i]: "d-MMMM-yyyy",
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

    [++i]: "d.MMMM.yyyy",
  },
  timeFormats: enUS.timeFormats,
  dateTimeFormats: enUS.dateTimeFormats,

  monthNames: enUS.monthNames,
  dayNames: enUS.dayNames,
};

export { locale };
