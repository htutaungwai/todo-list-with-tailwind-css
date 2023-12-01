// LIBIARIES
import moment from "moment";

export function byDateCreated(a, b) {
  return (
    Date.parse(new Date(a.dateCreated)) - Date.parse(new Date(b.dateCreated))
  );
}

export function byDateUpdated(a, b) {
  return (
    Date.parse(new Date(a.dateUpdated)) - Date.parse(new Date(b.dateUpdated))
  );
}

export function byTitle(a, b) {
  return a.title.localeCompare(b.title);
}

export function getMonthName(monthNumber) {
  return new Date("1999-" + monthNumber + "-15").toLocaleString("en-us", {
    month: "long",
  });
}

export const primeObjectGenearator = (dates, option) => {
  let primeObject = {};

  switch (option) {
    case "TITLE":
      dates.sort(byTitle);
      if (dates.length > 0) primeObject["a ~ z"] = {};
      dates.forEach((item) => {
        const firstCharacter = Array.from(item.title)[0];
        if (firstCharacter === undefined) {
          if (!primeObject["a ~ z"]["***"]) primeObject["a ~ z"]["***"] = [];
          primeObject["a ~ z"]["***"].push(item);
          return;
        }
        if (firstCharacter !== "" && !primeObject["a ~ z"][firstCharacter]) {
          primeObject["a ~ z"][firstCharacter] = [];
        }
        primeObject["a ~ z"][firstCharacter].push(item);
      });
      break;
    case "UPDATED":
      dates.sort(byDateUpdated);
      if (dates.length > 0) primeObject["Last Updated"] = {};

      dates.forEach((date) => {
        const momentAgo = moment(date.dateUpdated).startOf("minute").fromNow();
        if (!primeObject["Last Updated"][momentAgo]) {
          primeObject["Last Updated"][momentAgo] = [];
        }

        primeObject["Last Updated"][momentAgo].push(date);
      });
      break;
    default:
      dates.sort(byDateCreated);
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
