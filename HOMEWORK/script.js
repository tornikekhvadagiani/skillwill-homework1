// დავალება 1

function Sum(a, b) {
  if ((typeof a === "number") & (typeof b === "number")) {
    return a + b;
  } else {
    return "შეცდომა მატრიცაში";
  }
}

let sum = Sum(6, 8);

console.log(sum);

// დავალება 2

function ConvertFahrenheit(f) {
  if (typeof f === "number") {
    return (f - 32) / 1.8;
  } else {
    return false;
  }
}

let celsiusValue = ConvertFahrenheit(60);

console.log(celsiusValue);


// დავალება 3

function Calculator(x, y, operator) {
  if (
    operator != "/" &&
    operator != "*" &&
    operator != "-" &&
    operator != "+"
  ) {
    return false;
  }

  if (typeof x != "number" || typeof y != "number") {
    return false;
  }

  switch (operator) {
    case "/":
      return x / y;

    case "*":
      return x * y;

    case "-":
      return x - y;

    case "+":
      return x + y;
  }
}

let result = Calculator(10, 2, "+");
console.log(result);
