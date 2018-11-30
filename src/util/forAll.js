const forAll = (array, fn) =>
  (array.length === 0
    ? false
    : array.map(fn)
      .reduce((a, b) => a && b));

export default forAll;
