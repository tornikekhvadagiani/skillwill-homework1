// დავალება 1

function Sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number" || a!==b) return "შეცდომა მატრიცაში";
  return "ტოლია"
}

console.log(Sum ("6", "6"));
console.log(Sum (6, 6));
console.log(Sum (6, "6"));

// დავალება 2

function ConvertFahrenheit(f) {
  if (typeof f !== "number") return false;
    return (f - 32) / 1.8;
  }

console.log(ConvertFahrenheit("60"));
console.log(ConvertFahrenheit(60));

// დავალება 3

function Calculator(x, y, operator) {
  if (typeof x !== "number" || typeof y !== "number")return false;

  switch (operator) {
    case "/":return x / y;
    case "*":return x * y;
    case "-":return x - y;
    case "+":return x + y;
    default:return false
  }
}

console.log(Calculator(10, 2, "+"));
console.log(Calculator(10, 2, "^"));
console.log(Calculator(10, "2", "+"));