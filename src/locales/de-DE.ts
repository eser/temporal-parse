import { type Locale } from "./types.ts";

const locale: Locale = {
  code: "de-DE",
  isDayPlacedFirst: true,

  dateFormats: {
    full: "EEEE, do MMMM y",
    wide: "do MMMM y",
    long: "do MMM y",
    short: "dd.MM.y",
  },
  timeFormats: {
    full: "HH:mm:ss zzzz",
    wide: "HH:mm:ss a z",
    long: "HH:mm:ss",
    short: "HH:mm",
  },
  dateTimeFormats: {
    full: "{{date}} 'um' {{time}}",
    wide: "{{date}} 'um' {{time}}",
    long: "{{date}} {{time}}",
    short: "{{date}} {{time}}",
  },

  monthNames: {
    full: {
      1: ["Januar"],
      2: ["Februar"],
      3: ["März"],
      4: ["April"],
      5: ["Mai"],
      6: ["Juni"],
      7: ["Juli"],
      8: ["August"],
      9: ["September"],
      10: ["Oktober"],
      11: ["November"],
      12: ["Dezember"],
    },
    short: {
      1: ["Jan"],
      2: ["Feb"],
      3: ["Mär"],
      4: ["Apr"],
      5: ["Mai"],
      6: ["Jun"],
      7: ["Jul"],
      8: ["Aug"],
      9: ["Sep"],
      10: ["Okt"],
      11: ["Nov"],
      12: ["Dez"],
    },
  },

  dayNames: {
    full: {
      0: ["Sonntag"],
      1: ["Montag"],
      2: ["Dienstag"],
      3: ["Mittwoch"],
      4: ["Donnerstag"],
      5: ["Freitag"],
      6: ["Samstag"],
    },
    short: {
      0: ["So"],
      1: ["Mo"],
      2: ["Di"],
      3: ["Mi"],
      4: ["Do"],
      5: ["Fr"],
      6: ["Sa"],
    },
  },
};

export { locale };
