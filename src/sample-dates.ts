const dateSamples = [
  "01 2022",
  "01 29 2022",
  "01-2022",
  "01-29-2022",
  "01, 29, 2022",
  "01.2022",
  "01.29.2022",
  "01/02/2022",
  "01/2022",
  "01/29/2022",
  "05/08/1930",
  "08-05-1930",
  "08-05-30", // ! unhandled
  "08-05", // ! unhandled
  "Oca 22", // ! next release
  "Oca 2022",
  "Şubat 2025",
  "1/1/2022",
  "1930-08-05",
  "2019 July 1",
  "2022 01",
  "2022-01-11",
  "2022-01",
  "2022.01",
  "2022/01",
  "2022/01/01",
  "29 01 2022",
  "29 Ocak", // ! unhandled
  "29 Oca", // ! unhandled
  "29-01-2022",
  "29, 01, 2022",
  "29.01.2022",
  "29/01/022",
  "5 Ağu 1930",
  "5 Ağustos 1930",
  "5-Eyl-1930",
  "5-Aug", // ! unhandled
  "8/5", // ! unhandled
  "8/5/1930",
  "8/5/30", // ! next release
  "Ağu-5",
  "Ağustos 2019",
  "Ağustos 5, 1930",
  "Ağustos 5",
  "Ocak 2022",
  "Ocak, 2022",
  "Temmuz 1, 2019",
  "Q1 2021",
  "Salı, 5 Ağustos 1930",
];

const timeSamples = [
  "1:25 PM",
  "12:00 AM",
  "1:25:59 PM",
  "1:25:59 AM",
  "13:25:59",
  "00:25:59",
  "13:25",
  "00:00",
];

const dateTimeSamples = [
  ...dateSamples,
  ...timeSamples,
  "Tuesday, 5 August 1930 at 13:25:59",
  "Tuesday, 5 August 1930, 13:25:59",
];

export { dateSamples, dateTimeSamples, timeSamples };
