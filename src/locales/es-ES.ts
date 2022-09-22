import { type Locale } from "./types.ts";

const locale: Locale = {
  code: "es-ES",

  isDayPlacedFirst: true,
  dateDelimiters: ["/", ".", "-"],

  dateFormats: {
    full: "EEEE, d 'de' MMMM 'de' y",
    wide: "d 'de' MMMM 'de' y",
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
    full: "{{date}} 'a las' {{time}}",
    wide: "{{date}} 'a las' {{time}}",
    long: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },

  monthNames: {
    full: {
      1: ["Enero"],
      2: ["Febrero"],
      3: ["Marzo"],
      4: ["Abril"],
      5: ["Mayo"],
      6: ["Junio"],
      7: ["Julio"],
      8: ["Agosto"],
      9: ["Septiembre"],
      10: ["Octubre"],
      11: ["Noviembre"],
      12: ["Diciembre"],
    },
    short: {
      1: ["Ene"],
      2: ["Feb"],
      3: ["Mar"],
      4: ["Abr"],
      5: ["May"],
      6: ["Jun"],
      7: ["Jul"],
      8: ["Ago"],
      9: ["Sep"],
      10: ["Oct"],
      11: ["Nov"],
      12: ["Dic"],
    },
  },
  dayNames: {
    full: {
      0: ["Domingo"],
      1: ["Lunes"],
      2: ["Martes"],
      3: ["Miércoles"],
      4: ["Jueves"],
      5: ["Viernes"],
      6: ["Sábado"],
    },
    short: {
      0: ["Dom"],
      1: ["Lun"],
      2: ["Mar"],
      3: ["Mié"],
      4: ["Jue"],
      5: ["Vie"],
      6: ["Sáb"],
    },
  },
};

export { locale };
