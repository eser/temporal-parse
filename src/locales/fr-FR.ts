const isDayPlacedFirst = true;

const dateFormats = [
  "yyyy/M/d",
  "d/M/yyyy",
  "M/yyyy",
  "yyyy/M",
  // ----
  "yyyy-M-d",
  "d-M-yyyy",
  "d-MMM-yyyy",
  "d-MMMM-yyyy",
  "M-yyyy",
  "yyyy-M",
  // ----
  "yyyy.M.dd",
  "d.M.yyyy",
  "d.MMM.yyyy",
  "d.MMMM.yyyy",
  "M.yyyy",
  "yyyy.M",
  // ----
  "yyyy M d",
  "d M yyyy",
  "d MMM yyyy",
  "d MMMM yyyy",
  "M yyyy",
  "yyyy M",
  // ----
  "d, M, yyyy",
  "d, MMM, yyyy",
  "d, MMMM, yyyy",
  // ----
  "MMM d",
  "MMMM d",
  // ----
  "d MMM",
  "d MMMM",
  // ----
  "d-MMM",
  "d-MMMM",
  // ----
  "MMM yyyy",
  "MMMM yyyy",
  // ----
  "yyyy MMM d",
  "yyyy MMMM d",
  // ----
  "d/M",
  "MMM-d",
  "MMMM, d",
  "MMMM d, yyyy",
  "MMMM, yyyy",
  // ----
  "qq yyyy",
  "yyyy qq",
  "EE, d MMMM yyyy",
];

const monthNamesLong = {
  "Janvier": 1,
  "Février": 2,
  "Mars": 3,
  "Avril": 4,
  "Mai": 5,
  "Juin": 6,
  "Juillet": 7,
  "Août": 8,
  "Septembre": 9,
  "Octobre": 10,
  "Novembre": 11,
  "Décembre": 12,
};

const monthNamesShort = {
  "Jan": 1,
  "Fév": 2,
  "Mar": 3,
  "Avr": 4,
  "Mai": 5,
  "Jun": 6,
  "Jul": 7,
  "Aoû": 8,
  "Sep": 9,
  "Oct": 10,
  "Nov": 11,
  "Déc": 12,
};

const dayNamesLong = {
  "Dimanche": 0,
  "Lundi": 1,
  "Mardi": 2,
  "Mercredi": 3,
  "Jeudi": 4,
  "Vendredi": 5,
  "Samedi": 6,
};

const dayNamesShort = {
  "Dim": 0,
  "Lun": 1,
  "Mar": 2,
  "Mer": 3,
  "Jeu": 4,
  "Ven": 5,
  "Sam": 6,
};

export {
  dateFormats,
  dayNamesLong,
  dayNamesShort,
  isDayPlacedFirst,
  monthNamesLong,
  monthNamesShort,
};
