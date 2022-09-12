import { type DateFormat } from "./types.ts";

const toDate = function toDate(input: DateFormat): Date {
  const now = new Date();

  const year = (input.year !== undefined)
    ? Number(input.year)
    : now.getFullYear();

  let month = (input.month !== undefined) ? Number(input.month) - 1 : 1;
  let day = (input.day !== undefined) ? Number(input.day) : 1;

  if (input.quarter !== undefined) {
    day = 1;
    switch (input.quarter.toUpperCase()) {
      case "Q1":
        month = 0;
        break;
      case "Q2":
        month = 3;
        break;
      case "Q3":
        month = 6;
        break;
      case "Q4":
        month = 9;
        break;
    }
  }

  return new Date(year, month, day);
};

export { toDate };
