import { type Locale } from "./types.ts";

const locale: Locale = {
  code: "en-GB",
  isDayPlacedFirst: true,

  dateFormats: {
    full: "EEEE, d MMMM yyyy",
    wide: "d MMMM yyyy",
    long: "d MMM yyyy",
    short: "dd/MM/yyyy",
  },
  timeFormats: {
    full: "HH:mm:ss zzzz",
    wide: "HH:mm:ss a z",
    long: "HH:mm:ss",
    short: "HH:mm",
  },
  dateTimeFormats: {
    full: "{{date}} 'at' {{time}}",
    wide: "{{date}} 'at' {{time}}",
    long: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },

  monthNames: {
    full: {
      1: ["January"],
      2: ["February"],
      3: ["March"],
      4: ["April"],
      5: ["May"],
      6: ["June"],
      7: ["July"],
      8: ["August"],
      9: ["September"],
      10: ["October"],
      11: ["November"],
      12: ["December"],
    },
    short: {
      1: ["Jan"],
      2: ["Feb"],
      3: ["Mar"],
      4: ["Apr"],
      5: ["May"],
      6: ["Jun"],
      7: ["Jul"],
      8: ["Aug"],
      9: ["Sep"],
      10: ["Oct"],
      11: ["Nov"],
      12: ["Dec"],
    },
  },
  dayNames: {
    full: {
      0: ["Sunday"],
      1: ["Monday"],
      2: ["Tuesday"],
      3: ["Wednesday"],
      4: ["Thursday"],
      5: ["Friday"],
      6: ["Saturday"],
    },
    short: {
      0: ["Sun"],
      1: ["Mon"],
      2: ["Tue"],
      3: ["Wed"],
      4: ["Thu"],
      5: ["Fri"],
      6: ["Sat"],
    },
  },
};

export { locale };
