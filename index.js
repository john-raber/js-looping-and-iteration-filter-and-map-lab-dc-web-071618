// Code your solution here:
function driversWithRevenueOver(arr, revenue) {
  return arr.filter(function (i) {
    return i.revenue > Number(revenue);
  });
}

function driverNamesWithRevenueOver(arr, revenue) {
  return driversWithRevenueOver(arr, revenue)
    .map(function (i) {
      return i.name;
    }
  );
}

function exactMatch(arr, obj) {
  return arr.filter(function (i) {
    // return i[Object.keys(obj)[0]] === obj[Object.keys(obj)[0]];
    let matching = false;

    for (const key in obj) {
      matching = i[key] === obj[key];
    }

    return matching;
  });
}

function exactMatchToList(arr, obj) {
  return exactMatch(arr, obj)
    .map(function (i) {
      return i.name;
    }
  );
}
