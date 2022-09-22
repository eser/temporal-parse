type Months = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Weekdays = 0 | 1 | 2 | 3 | 4 | 5 | 6;

type MonthNames = { [key in Months]: string[] };
type WeekdayNames = { [key in Weekdays]: string[] };

interface Locale {
  code: string;

  isDayPlacedFirst: boolean;
  dateDelimiters: string[];

  dateFormats: {
    full?: string;
    wide?: string;
    long?: string;
    short?: string;
    [key: number]: string;
  };
  timeFormats?: {
    full?: string;
    wide?: string;
    long?: string;
    short?: string;
    [key: number]: string;
  };
  dateTimeFormats?: {
    full?: string;
    wide?: string;
    long?: string;
    short?: string;
    [key: number]: string;
  };

  monthNames: {
    full: MonthNames;
    short: MonthNames;
  };
  dayNames: {
    full: WeekdayNames;
    short: WeekdayNames;
  };
}

export {
  type Locale,
  type MonthNames,
  type Months,
  type WeekdayNames,
  type Weekdays,
};
