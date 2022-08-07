const sortArr = (first, second) => {
  let common = first.filter((x) => second.indexOf(x) !== -1);
  let distinct = first.filter((x) => second.indexOf(x) === -1);
  return [...common, ...distinct];
};

sortArr([1, 1, , 2, 2, 2, 3], [2, 3, 4, 5]);

const averageArr = (arr) => {
  const count = Math.ceil(arr.length * 0.05);
  arr = arr.filter(
    (element, index) => index < arr.length - count && index > count
  );
  const average = arr.reduce((a, b) => a + b) / arr.length;
  console.log(average);
  console.log(arr);
};

averageArr([1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3]);
