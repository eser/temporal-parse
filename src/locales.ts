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
  monthNamesLong: string[];
  monthNamesShort: string[];
  dayNamesLong: string[];
  dayNamesShort: string[];
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

export { type Locale, locales, type SupportedLocales };
