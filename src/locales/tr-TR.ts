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
  "Ocak": 1,
  "Şubat": 2,
  "Mart": 3,
  "Nisan": 4,
  "Mayıs": 5,
  "Haziran": 6,
  "Temmuz": 7,
  "Ağustos": 8,
  "Eylül": 9,
  "Ekim": 10,
  "Kasım": 11,
  "Aralık": 12,
};

const monthNamesShort = {
  "Oca": 1,
  "Şub": 2,
  "Mar": 3,
  "Nis": 4,
  "May": 5,
  "Haz": 6,
  "Tem": 7,
  "Ağu": 8,
  "Eyl": 9,
  "Eki": 10,
  "Kas": 11,
  "Ara": 12,
};

const dayNamesLong = {
  "Pazar": 0,
  "Pazartesi": 1,
  "Salı": 2,
  "Çarşamba": 3,
  "Perşembe": 4,
  "Cuma": 5,
  "Cumartesi": 6,
};

const dayNamesShort = {
  "Paz": 0,
  "Pzt": 1,
  "Sal": 2,
  "Çar": 3,
  "Per": 4,
  "Cum": 5,
  "Cmt": 6,
};

export {
  dateFormats,
  dayNamesLong,
  dayNamesShort,
  isDayPlacedFirst,
  monthNamesLong,
  monthNamesShort,
};
