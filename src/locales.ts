import { type Locale } from "./locales/types.ts";
import { combineLocales } from "./locales/combiners.ts";
import { locale as genericEuropeAsia } from "./locales/generic-europe-asia.ts";
import { locale as genericAmerican } from "./locales/generic-american.ts";
import { locale as enUS } from "./locales/en-US.ts";
import { locale as enGB } from "./locales/en-GB.ts";
import { locale as deDE } from "./locales/de-DE.ts";
import { locale as frFR } from "./locales/fr-FR.ts";
import { locale as itIT } from "./locales/it-IT.ts";
import { locale as esES } from "./locales/es-ES.ts";
import { locale as trTR } from "./locales/tr-TR.ts";

type SupportedLocales =
  | "generic-europe-asia"
  | "generic-american"
  | "en-US"
  | "en-GB"
  | "de-DE"
  | "fr-FR"
  | "it-IT"
  | "es-ES"
  | "tr-TR";

const locales: Record<SupportedLocales, Locale> = {
  "generic-europe-asia": genericEuropeAsia,
  "generic-american": genericAmerican,
  "en-US": enUS,
  "en-GB": enGB,
  "de-DE": deDE,
  "fr-FR": frFR,
  "it-IT": itIT,
  "es-ES": esES,
  "tr-TR": trTR,
};

const combineKnownLocales = function combineKnownLocales(
  code: string,
  ...targetLocales: SupportedLocales[]
): Locale {
  return combineLocales(
    code,
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
