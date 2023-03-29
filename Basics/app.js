console.log("COde goes here");
function add(n1, n2, showRes, phrase) {
    console.log(typeof num1);
    var res = n1 + n2;
    if (showRes) {
        console.log(phrase + res);
    }
    else {
        return res;
    }
}
var num1 = 3;
var num2 = 4.6;
var printRes = true;
var resPhrase = "Result is: ";
var result = add(num1, num2, printRes, resPhrase);
console.log(result);
