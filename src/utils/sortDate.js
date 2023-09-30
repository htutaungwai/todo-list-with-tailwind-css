dates = [
  { id: 1, date: "Thu Oct 05 2023 00:00:00 GMT+0700 (Indochina Time)" },
  { id: 2, date: "Fri Oct 06 2023 00:00:00 GMT+0700 (Indochina Time)" },
  { id: 3, date: "Sat Oct 07 2023 00:00:00 GMT+0700 (Indochina Time)" },
  { id: 4, date: "Sun Oct 08 2023 00:00:00 GMT+0700 (Indochina Time)" },
  { id: 5, date: "Mon Oct 09 2023 00:00:00 GMT+0700 (Indochina Time)" },
  { id: 6, date: "Tue Oct 10 2023 00:00:00 GMT+0700 (Indochina Time)" },
];

dates.forEach((date) => {
  console.log(Date.parse(date.date).getDate());
});
