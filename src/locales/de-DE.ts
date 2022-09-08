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
  "Januar": 1,
  "Februar": 2,
  "März": 3,
  "April": 4,
  "Mai": 5,
  "Juni": 6,
  "Juli": 7,
  "August": 8,
  "September": 9,
  "Oktober": 10,
  "November": 11,
  "Dezember": 12,
};

const monthNamesShort = {
  "Jan": 1,
  "Feb": 2,
  "Mär": 3,
  "Apr": 4,
  "Mai": 5,
  "Jun": 6,
  "Jul": 7,
  "Aug": 8,
  "Sep": 9,
  "Okt": 10,
  "Nov": 11,
  "Dez": 12,
};

const dayNamesLong = {
  "Sonntag": 0,
  "Montag": 1,
  "Dienstag": 2,
  "Mittwoch": 3,
  "Donnerstag": 4,
  "Freitag": 5,
  "Samstag": 6,
};

const dayNamesShort = {
  "So": 0,
  "Mo": 1,
  "Di": 2,
  "Mi": 3,
  "Do": 4,
  "Fr": 5,
  "Sa": 6,
};

export {
  dateFormats,
  dayNamesLong,
  dayNamesShort,
  isDayPlacedFirst,
  monthNamesLong,
  monthNamesShort,
};
