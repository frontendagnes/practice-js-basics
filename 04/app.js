function createArray(min, max) {
  const newArr = [];
  const meter = 20;
  for (let i = 0; i < meter; i++) {
    const randomNumber = Math.round(Math.random() * (max - min) + min);
    newArr.push(randomNumber);
  }
  return newArr;
}

const arr = createArray(10, 200);
console.log(arr);

function sortArray(arr) {
  let sortedArr = arr.sort((a, b) => b - a);
  console.log(sortedArr);
  let elements = sortedArr.slice(0, 10);
  return elements;
}

const largest = sortArray(arr);
console.log(largest);

function getAvg(arr) {
  const len = arr.length;
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  let result = sum / len;
  return result;
}

const avg = getAvg(largest);
console.log(avg);
