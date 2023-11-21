export function byDate(a, b) {
  return Date.parse(new Date(a.date)) - Date.parse(new Date(b.date));
}

export function byTitle(a, b) {
  return a.title.localeCompare(b.title);
}

export function getMonthName(monthNumber) {
  return new Date("1999-" + monthNumber + "-15").toLocaleString("en-us", {
    month: "long",
  });
}

export const primeDateGenerator = (dates, option) => {
  const primeObject = {};

  switch (option) {
    case "TITLE":
      dates.sort(byTitle);
      primeObject["alphabet"] = {};
      dates.forEach((item) => {
        const firstCharacter = Array.from(item.title)[0];
        if (firstCharacter === undefined) {
          if (!primeObject["alphabet"]["***"])
            primeObject["alphabet"]["***"] = [];
          primeObject["alphabet"]["***"].push(item);
          return;
        }
        if (firstCharacter !== "" && !primeObject["alphabet"][firstCharacter]) {
          primeObject["alphabet"][firstCharacter] = [];
        }
        primeObject["alphabet"][firstCharacter].push(item);
      });
      break;

    default:
      dates.forEach((date) => {
        const sampleDate = new Date(date.dateCreated);
        if (!primeObject[sampleDate.getFullYear()]) {
          primeObject[sampleDate.getFullYear()] = {};
        }
        if (
          !primeObject[sampleDate.getFullYear()][
            getMonthName(sampleDate.getMonth() + 1)
          ]
        ) {
          primeObject[sampleDate.getFullYear()][
            getMonthName(sampleDate.getMonth() + 1)
          ] = [];
        }
        primeObject[sampleDate.getFullYear()][
          getMonthName(sampleDate.getMonth() + 1)
        ].push(date);
      });
      break;
  }

  return primeObject;
};
