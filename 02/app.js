// /* rozwiązanie z pętlą for */
const x = prompt("Podaj Liczbę do mnożenie w przedziale od 1 - 9");
const num = parseInt(x);

const validateNum = checkPrompt(num);
// const x = 4;
function multiTable(num) {
  for (let i = 1; i <= 9; i++) {
    const multi = i * num;
    console.log(`${num} X ${i} = ${multi}`);
  }
}

multiTable(validateNum);

/* rozwiązanie z pętlą while  */

const a = prompt("Podaj podstawę potęgowanie (1 - 9)");
const n = prompt("Podaj wykłądnik potęgowanie (1 - 9)");
const base = parseInt(a);
const exponent = parseInt(n);

const validBase = checkPrompt(base);
const validExponent = checkPrompt(exponent);

function power(a, n) {
  let iteration = 0;
  let str = "";

  while (iteration < n) {
    iteration++;
    if (iteration === 1) {
      str += a;
    } else {
      str += ` * ${a}`;
    }
  }
  const result = a ** n;

  console.log(`Wynik potęgowania ${str} = ${result}`);
}

power(validBase, validExponent);

function checkPrompt(num) {
  if (!isNaN(num) && num >= 1 && num <= 9) {
    return num;
  } else {
    num = parseInt(prompt("Twoja liczba musi być w przedziale od 1 do 9"));
    return checkPrompt(num);
  }
}
