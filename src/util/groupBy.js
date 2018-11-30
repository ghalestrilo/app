export const groupBy = (xs, key) =>
  (xs === []
    ? {}
    : xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {})
  );

export const groupByType = actions =>
  Object.entries(groupBy(actions, "type"))
    .map(([ type, arr ]) =>
      (arr.length < 2
        ? {
          ...arr[0],
          type: (arr[0].name || arr[0].type)
        }
        : {
          group: true,
          type: type,
          options: arr
        }));
