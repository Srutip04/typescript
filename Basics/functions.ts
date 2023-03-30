function Add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("result" + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  const value = cb(result);
}

printResult(Add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = Add;
// combineValues = 5;

console.log(combineValues(8, 8));

addAndHandle(12, 13, (result) => {
  console.log(result);
  // return result;
});
