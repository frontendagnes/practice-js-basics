const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function getSum(a, b, c) {
  const numOne = parseInt(a);
  const numTwo = parseInt(b);
  const numThree = parseInt(c);

  const arr = [numOne, numTwo, numThree];

  arr.sort((a, b) => a - b);
  console.log(arr);

  let d = arr.at(-1);
  let e = arr.at(-2);
  let sum = d + e;

  return sum;
}
const sum = getSum(a, b, c);
console.log(sum);

const isEven = function (num) {
  if (typeof num !== "number") {
    return null;
  } else if (num % 2) {
    return false;
  } else {
    return true;
  }
};

const even = isEven(sum);
console.log(even);

function showInfo(val, bool) {
  switch (bool) {
    case null:
      console.log(`Podany argument ${val} nie jest liczbą`);
      break;
    case true:
      console.log(`Podany argument ${val} jest parzysty`);
      break;
    case false:
      console.log(`Podany argument ${val} jest nieparzysty`);
      break;
    default:
      console.log("Wartość bool jet zła");
  }
}

showInfo(sum, even);

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}