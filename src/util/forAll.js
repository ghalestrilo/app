const forAll = (array, fn) =>
  array.map(fn)
    .reduce((a, b) => a && b);

export default forAll;
