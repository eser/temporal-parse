const isDayPlacedFirst = false;

const dateFormats = [
  "yyyy/M/d",
  "M/d/yyyy",
  "M/yyyy",
  "yyyy/M",
  // ----
  "yyyy-M-d",
  "M-d-yyyy",
  "MMM-d-yyyy",
  "MMMM-d-yyyy",
  "M-yyyy",
  "yyyy-M",
  // ----
  "yyyy.M.dd",
  "M.d.yyyy",
  "MMM.d.yyyy",
  "MMMM.d.yyyy",
  "M.yyyy",
  "yyyy.M",
  // ----
  "yyyy M d",
  "M d yyyy",
  "MMM d yyyy",
  "MMMM d yyyy",
  "M yyyy",
  "yyyy M",
  // ----
  "M, d, yyyy",
  "MMM, d, yyyy",
  "MMMM, d, yyyy",
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
  "M/d",
  "MMM-d",
  "MMMM, d",
  "MMMM d, yyyy",
  "MMMM, yyyy",
  // ----
  "qq yyyy",
  "yyyy qq",
  "EE, d MMMM yyyy",
  // ----
  "d MMM yyyy",
  "d MMMM yyyy",
  "d-MMM-yyyy",
  "d-MMMM-yyyy",
];

const monthNamesLong = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const monthNamesShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const dayNamesLong = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const dayNamesShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export {
  dateFormats,
  dayNamesLong,
  dayNamesShort,
  isDayPlacedFirst,
  monthNamesLong,
  monthNamesShort,
};
