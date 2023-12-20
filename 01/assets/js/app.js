const a = "4.2";
const b = 9;

const aa = Number(a);
const bb = Number(b);
console.log(a, b, aa, bb);

const typeA = typeof a;
const typeB = typeof b;
const typeAA = typeof aa;
const typeBB = typeof bb;
console.log(
  `typ a: ${typeA}, typ b: ${typeB}, typ aa: ${typeAA}, typ bb: ${typeBB}`
);

const add = aa + bb;
const sub = aa - bb;
const multi = aa * bb;
const divi = aa / bb;
const rest = aa % bb;

console.log(`a+b = ${add}`);
console.log(`a-b = ${sub}`);
console.log(`a*b = ${multi}`);
console.log(`a/b = ${divi}`);
console.log(`a%b = ${rest}`);

const arr = [add, sub, multi, divi, rest];
console.log(arr);

arr.forEach((item) => {
  if (item > 20) {
    console.log("20 <",item);
  } else {
    console.log("20 >", item);
  }
});
