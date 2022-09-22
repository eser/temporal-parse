import { type Locale } from "./types.ts";

const locale: Locale = {
  code: "en-US",

  isDayPlacedFirst: false,
  dateDelimiters: ["/", ".", "-"],

  dateFormats: {
    full: "EEEE, MMMM do, y",
    wide: "MMMM do, y",
    long: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  timeFormats: {
    full: "h:mm:ss a zzzz",
    wide: "h:mm:ss a z",
    long: "h:mm:ss a",
    short: "h:mm a",
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
