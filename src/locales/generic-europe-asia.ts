import * as enUS from "./en-US.ts";
import * as enGB from "./en-GB.ts";
import * as deDE from "./de-DE.ts";
import * as frFR from "./fr-FR.ts";
import * as itIT from "./it-IT.ts";
import * as esES from "./es-ES.ts";
import * as trTR from "./tr-TR.ts";

const isDayPlacedFirst = true;

const dateFormats = enGB.dateFormats;

const monthNamesLong = {
  ...enGB.monthNamesLong,
  ...enUS.monthNamesLong,
  ...deDE.monthNamesLong,
  ...frFR.monthNamesLong,
  ...itIT.monthNamesLong,
  ...esES.monthNamesLong,
  ...trTR.monthNamesLong,
};

const monthNamesShort = {
  ...enGB.monthNamesShort,
  ...enUS.monthNamesShort,
  ...deDE.monthNamesShort,
  ...frFR.monthNamesShort,
  ...itIT.monthNamesShort,
  ...esES.monthNamesShort,
  ...trTR.monthNamesShort,
};

const dayNamesLong = {
  ...enGB.dayNamesLong,
  ...enUS.dayNamesLong,
  ...deDE.dayNamesLong,
  ...frFR.dayNamesLong,
  ...itIT.dayNamesLong,
  ...esES.dayNamesLong,
  ...trTR.dayNamesLong,
};

const dayNamesShort = {
  ...enGB.dayNamesShort,
  ...enUS.dayNamesShort,
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
