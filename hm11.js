
var str = "Regul6r";

var regex = /^(?!.*[Aa]).{6,}$/;

if (regex.test(str)) {
  console.log("Рядок відповідає умовам.");
} else {
  console.log("Рядок не відповідає умовам.");
}