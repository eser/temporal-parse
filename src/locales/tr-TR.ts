import { type Locale } from "./types.ts";

const locale: Locale = {
  code: "tr-TR",

  isDayPlacedFirst: true,
  dateDelimiters: [".", "/", "-"],

  dateFormats: {
    full: "d MMMM y EEEE",
    wide: "d MMMM y",
    long: "d MMM y",
    short: "dd.MM.yyyy",
  },
  timeFormats: {
    full: "HH:mm:ss zzzz",
    wide: "HH:mm:ss z",
    long: "HH:mm:ss",
    short: "HH:mm",
  },
  dateTimeFormats: {
    full: "{{date}} 'saat' {{time}}",
    wide: "{{date}} 'saat' {{time}}",
    long: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },

  monthNames: {
    full: {
      1: ["Ocak"],
      2: ["Şubat"],
      3: ["Mart"],
      4: ["Nisan"],
      5: ["Mayıs"],
      6: ["Haziran"],
      7: ["Temmuz"],
      8: ["Ağustos"],
      9: ["Eylül"],
      10: ["Ekim"],
      11: ["Kasım"],
      12: ["Aralık"],
    },
    short: {
      1: ["Oca"],
      2: ["Şub"],
      3: ["Mar"],
      4: ["Nis"],
      5: ["May"],
      6: ["Haz"],
      7: ["Tem"],
      8: ["Ağu"],
      9: ["Eyl"],
      10: ["Eki"],
      11: ["Kas"],
      12: ["Ara"],
    },
  },
  dayNames: {
    full: {
      0: ["Pazar"],
      1: ["Pazartesi"],
      2: ["Salı"],
      3: ["Çarşamba"],
      4: ["Perşembe"],
      5: ["Cuma"],
      6: ["Cumartesi"],
    },
    short: {
      0: ["Paz"],
      1: ["Pzt"],
      2: ["Sal"],
      3: ["Çar"],
      4: ["Per"],
      5: ["Cum"],
      6: ["Cmt"],
    },
  },
};

export { locale };
