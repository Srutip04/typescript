function Add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("result" + num);
}

printResult(Add(5, 12));

let combineValues: (a: number,b: number) => number;

combineValues = Add;
// combineValues = 5;

console.log(combineValues(8,8));

