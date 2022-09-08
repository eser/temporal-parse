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
  "Gennaio": 1,
  "Febbraio": 2,
  "Marzo": 3,
  "Aprile": 4,
  "Maggio": 5,
  "Giugno": 6,
  "Luglio": 7,
  "Agosto": 8,
  "Settembre": 9,
  "Ottobre": 10,
  "Novembre": 11,
  "Dicembre": 12,
};

const monthNamesShort = {
  "Gen": 1,
  "Feb": 2,
  "Mar": 3,
  "Apr": 4,
  "Mag": 5,
  "Giu": 6,
  "Lug": 7,
  "Ago": 8,
  "Set": 9,
  "Ott": 10,
  "Nov": 11,
  "Dic": 12,
};

const dayNamesLong = {
  "Domenica": 0,
  "Lunedì": 1,
  "Martedì": 2,
  "Mercoledì": 3,
  "Giovedì": 4,
  "Venerdì": 5,
  "Sabato": 6,
};

const dayNamesShort = {
  "Dom": 0,
  "Lun": 1,
  "Mar": 2,
  "Mer": 3,
  "Gio": 4,
  "Ven": 5,
  "Sab": 6,
};

export {
  dateFormats,
  dayNamesLong,
  dayNamesShort,
  isDayPlacedFirst,
  monthNamesLong,
  monthNamesShort,
};
