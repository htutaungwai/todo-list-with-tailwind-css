export function byDate(a, b) {
  return Date.parse(new Date(a.date)) - Date.parse(new Date(b.date));
}

export function getMonthName(monthNumber) {
  return new Date("1999-" + monthNumber + "-15").toLocaleString("en-us", {
    month: "long",
  });
}

export const primeDateGenerator = (dates) => {
  const primeObject = {};
  dates.sort(byDate);

  dates.forEach((d) => {
    const dd = new Date(d.date);
    if (!primeObject[dd.getFullYear()]) {
      primeObject[dd.getFullYear()] = {};
    }
    if (!primeObject[dd.getFullYear()][getMonthName(dd.getMonth() + 1)]) {
      primeObject[dd.getFullYear()][getMonthName(dd.getMonth() + 1)] = [];
    }
    primeObject[dd.getFullYear()][getMonthName(dd.getMonth() + 1)].push(d);
  });

  return primeObject;
};