let x = 4;
const arr = [
  [x, 0, 0, x, 0],
  [x, 0, 0, x, 0],
  [0, 0, 0, x, 0],
  [x, x, 0, x, 0],
  [0, x, 0, 0, 0],
];
let perimeter = 0;
let count = 0;
let column = 0;
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] === x) {
      switch (arr[i][j]) {
        case arr[i][j + 1]:
          count++;
          console.log(count);
          break;
        case arr[i + 1][j]:
          count++;
          console.log(count);
          break;
      }
    }
  }
  console.log(count);
  perimeter = x * count;
  console.log(perimeter);
}
