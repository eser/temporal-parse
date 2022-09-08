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

const monthNamesLong = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre",
];

const monthNamesShort = [
  "Gen",
  "Feb",
  "Mar",
  "Apr",
  "Mag",
  "Giu",
  "Lug",
  "Ago",
  "Set",
  "Ott",
  "Nov",
  "Dic",
];

const dayNamesLong = [
  "Domenica",
  "Lunedì",
  "Martedì",
  "Mercoledì",
  "Giovedì",
  "Venerdì",
  "Sabato",
];

const dayNamesShort = ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"];

export {
  dateFormats,
  dayNamesLong,
  dayNamesShort,
  isDayPlacedFirst,
  monthNamesLong,
  monthNamesShort,
};
