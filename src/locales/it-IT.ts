import { type Locale } from "./types.ts";

const locale: Locale = {
  code: "it-IT",

  isDayPlacedFirst: true,
  dateDelimiters: ["/", ".", "-"],

  dateFormats: {
    full: "EEEE d MMMM y",
    wide: "d MMMM y",
    long: "d MMM y",
    short: "dd/MM/y",
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
    full: {
      1: ["Gennaio"],
      2: ["Febbraio"],
      3: ["Marzo"],
      4: ["Aprile"],
      5: ["Maggio"],
      6: ["Giugno"],
      7: ["Luglio"],
      8: ["Agosto"],
      9: ["Settembre"],
      10: ["Ottobre"],
      11: ["Novembre"],
      12: ["Dicembre"],
    },
    short: {
      1: ["Gen"],
      2: ["Feb"],
      3: ["Mar"],
      4: ["Apr"],
      5: ["Mag"],
      6: ["Giu"],
      7: ["Lug"],
      8: ["Ago"],
      9: ["Set"],
      10: ["Ott"],
      11: ["Nov"],
      12: ["Dic"],
    },
  },
  dayNames: {
    full: {
      0: ["Domenica"],
      1: ["Lunedì"],
      2: ["Martedì"],
      3: ["Mercoledì"],
      4: ["Giovedì"],
      5: ["Venerdì"],
      6: ["Sabato"],
    },
    short: {
      0: ["Dom"],
      1: ["Lun"],
      2: ["Mar"],
      3: ["Mer"],
      4: ["Gio"],
      5: ["Ven"],
      6: ["Sab"],
    },
  },
};

export { locale };
