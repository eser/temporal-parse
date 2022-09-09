import * as enUS from "./en-US.ts";
import * as enGB from "./en-GB.ts";
import * as deDE from "./de-DE.ts";
import * as frFR from "./fr-FR.ts";
import * as itIT from "./it-IT.ts";
import * as esES from "./es-ES.ts";
import * as trTR from "./tr-TR.ts";

const isDayPlacedFirst = false;

const dateFormats = enUS.dateFormats;

const monthNamesLong = {
  ...enUS.monthNamesLong,
  ...enGB.monthNamesLong,
  ...deDE.monthNamesLong,
  ...frFR.monthNamesLong,
  ...itIT.monthNamesLong,
  ...esES.monthNamesLong,
  ...trTR.monthNamesLong,
};

const monthNamesShort = {
  ...enUS.monthNamesShort,
  ...enGB.monthNamesShort,
  ...deDE.monthNamesShort,
  ...frFR.monthNamesShort,
  ...itIT.monthNamesShort,
  ...esES.monthNamesShort,
  ...trTR.monthNamesShort,
};

const dayNamesLong = {
  ...enUS.dayNamesLong,
  ...enGB.dayNamesLong,
  ...deDE.dayNamesLong,
  ...frFR.dayNamesLong,
  ...itIT.dayNamesLong,
  ...esES.dayNamesLong,
  ...trTR.dayNamesLong,
};

const dayNamesShort = {
  ...enUS.dayNamesShort,
  ...enGB.dayNamesShort,
  ...deDE.dayNamesShort,
  ...frFR.dayNamesShort,
  ...itIT.dayNamesShort,
  ...esES.dayNamesShort,
  ...trTR.dayNamesShort,
};

export {
  dateFormats,
  dayNamesLong,
  dayNamesShort,
  isDayPlacedFirst,
  monthNamesLong,
  monthNamesShort,
};
