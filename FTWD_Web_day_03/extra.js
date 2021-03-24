function calculator(operator, a, b) {
  switch (operator) {
    case "+":
      return a + b;

    case "-":
      return a - b;

    case "*":
      return a * b;

    case "/":
      return a / b;

    default:
      throw new Error("Incorrect Operator:" + operator + "!");
  }
}

console.log(calculator("+", 1, 2));
