import { type Locale } from "./types.ts";

const locale: Locale = {
  code: "fr-FR",
  isDayPlacedFirst: true,

  dateFormats: {
    full: "EEEE d MMMM y",
    wide: "d MMMM y",
    long: "d MMM y",
    short: "dd/MM/y",
  },
  timeFormats: {
    full: "HH:mm:ss zzzz",
    wide: "HH:mm:ss a z",
    long: "HH:mm:ss",
    short: "HH:mm",
  },
  dateTimeFormats: {
    full: "{{date}} 'à' {{time}}",
    wide: "{{date}} 'à' {{time}}",
    long: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },

  monthNames: {
    full: {
      1: ["Janvier"],
      2: ["Février"],
      3: ["Mars"],
      4: ["Avril"],
      5: ["Mai"],
      6: ["Juin"],
      7: ["Juillet"],
      8: ["Août"],
      9: ["Septembre"],
      10: ["Octobre"],
      11: ["Novembre"],
      12: ["Décembre"],
    },
    short: {
      1: ["Jan"],
      2: ["Fév"],
      3: ["Mar"],
      4: ["Avr"],
      5: ["Mai"],
      6: ["Jun"],
      7: ["Jul"],
      8: ["Aoû"],
      9: ["Sep"],
      10: ["Oct"],
      11: ["Nov"],
      12: ["Déc"],
    },
  },
  dayNames: {
    full: {
      0: ["Dimanche"],
      1: ["Lundi"],
      2: ["Mardi"],
      3: ["Mercredi"],
      4: ["Jeudi"],
      5: ["Vendredi"],
      6: ["Samedi"],
    },
    short: {
      0: ["Dim"],
      1: ["Lun"],
      2: ["Mar"],
      3: ["Mer"],
      4: ["Jeu"],
      5: ["Ven"],
      6: ["Sam"],
    },
  },
};

export { locale };
