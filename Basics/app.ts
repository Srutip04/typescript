console.log("COde goes here");

function add(n1: number, n2: number, showRes: boolean, phrase: string) {
  console.log(typeof num1);
  const res = n1 + n2;
  if (showRes) {
    console.log(phrase + res);
  } else {
    return res;
  }
}

const num1 = 3;
const num2 = 4.6;
const printRes = true;
const resPhrase = "Result is: ";

const result = add(num1, num2, printRes, resPhrase);
console.log(result);
