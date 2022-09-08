import * as enUS from "./locales/en-US.ts";
import * as enGB from "./locales/en-GB.ts";
import * as deDE from "./locales/de-DE.ts";
import * as frFR from "./locales/fr-FR.ts";
import * as itIT from "./locales/it-IT.ts";
import * as esES from "./locales/es-ES.ts";
import * as trTR from "./locales/tr-TR.ts";

type SupportedLocales =
  | "en-US"
  | "en-GB"
  | "de-DE"
  | "fr-FR"
  | "it-IT"
  | "es-ES"
  | "tr-TR";

interface Locale {
  isDayPlacedFirst: boolean;
  dateFormats: string[];
  monthNamesLong: Record<string, number>;
  monthNamesShort: Record<string, number>;
  dayNamesLong: Record<string, number>;
  dayNamesShort: Record<string, number>;
}

const locales: Record<SupportedLocales, Locale> = {
  "en-US": enUS,
  "en-GB": enGB,
  "de-DE": deDE,
  "fr-FR": frFR,
  "it-IT": itIT,
  "es-ES": esES,
  "tr-TR": trTR,
};

const combineLocales = function combineLocales(...locales: Locale[]): Locale {
  return {
    isDayPlacedFirst: locales.at(0)?.isDayPlacedFirst ?? true,
    dateFormats: [...new Set(locales.flatMap((x) => x.dateFormats))],
    monthNamesLong: Object.assign({}, ...locales.map((x) => x.monthNamesLong)),
    monthNamesShort: Object.assign(
      {},
      ...locales.map((x) => x.monthNamesShort),
    ),
    dayNamesLong: Object.assign({}, ...locales.map((x) => x.dayNamesLong)),
    dayNamesShort: Object.assign({}, ...locales.map((x) => x.dayNamesShort)),
  };
};

const combineKnownLocales = function combineKnownLocales(
  ...targetLocales: SupportedLocales[]
): Locale {
  return combineLocales(
    ...targetLocales.map((targetLocale) => locales[targetLocale]),
  );
};

export {
  combineKnownLocales,
  combineLocales,
  type Locale,
  locales,
  type SupportedLocales,
};
