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
  "January": 1,
  "February": 2,
  "March": 3,
  "April": 4,
  "May": 5,
  "June": 6,
  "July": 7,
  "August": 8,
  "September": 9,
  "October": 10,
  "November": 11,
  "December": 12,
};

const monthNamesShort = {
  "Jan": 1,
  "Feb": 2,
  "Mar": 3,
  "Apr": 4,
  "May": 5,
  "Jun": 6,
  "Jul": 7,
  "Aug": 8,
  "Sep": 9,
  "Oct": 10,
  "Nov": 11,
  "Dec": 12,
};

const dayNamesLong = {
  "Sunday": 0,
  "Monday": 1,
  "Tuesday": 2,
  "Wednesday": 3,
  "Thursday": 4,
  "Friday": 5,
  "Saturday": 6,
};

const dayNamesShort = {
  "Sun": 0,
  "Mon": 1,
  "Tue": 2,
  "Wed": 3,
  "Thu": 4,
  "Fri": 5,
  "Sat": 6,
};

export {
  dateFormats,
  dayNamesLong,
  dayNamesShort,
  isDayPlacedFirst,
  monthNamesLong,
  monthNamesShort,
};
