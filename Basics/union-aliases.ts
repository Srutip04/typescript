type Combinable = number | string; //Type Aliases
type ConversionDesc = "as-num" | "as-text";

function combine(inp1: Combinable, inp2: Combinable, resCov: ConversionDesc) {
  let res;
  if (
    (typeof inp1 === "number" && typeof inp2 === "number") ||
    resCov === "as-num"
  ) {
    res = +inp1 + +inp2;
  } else {
    res = inp1.toString() + inp2.toString();
  }
  if (resCov === "as-num") {
    return +res;
  } else {
    return res.toString();
  }
}

const combinedAges = combine(20, 37, "as-num");
console.log(combinedAges);

const combinedStirngAges = combine("26", "34", "as-num");
console.log(combinedStirngAges);

const combinedNames = combine("max", "anna", "as-text");
console.log(combinedNames);
