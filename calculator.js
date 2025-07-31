document.addEventListener("DOMContentLoaded", function () {
  // Select DOM elements
  const num1Input = document.querySelector("#number1");
  const num2Input = document.querySelector("#number2");
  const resultSpan = document.querySelector("#calculation-result");

  const addBtn = document.querySelector("#add");
  const subtractBtn = document.querySelector("#subtract");
  const multiplyBtn = document.querySelector("#multiply");
  const divideBtn = document.querySelector("#divide");

  // Arithmetic functions
  function add(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }
  function multiply(a, b) {
    return a * b;
  }
  function divide(a, b) {
    if (b === 0) return "❌ Cannot divide by zero";
    return a / b;
  }

  // Event listener helper
  function calculate(operation) {
    const num1 = parseFloat(num1Input.value) || 0;
    const num2 = parseFloat(num2Input.value) || 0;
    let result;

    switch (operation) {
      case "add":
        result = add(num1, num2);
        break;
      case "subtract":
        result = subtract(num1, num2);
        break;
      case "multiply":
        result = multiply(num1, num2);
        break;
      case "divide":
        result = divide(num1, num2);
        break;
    }
    resultSpan.textContent = result;
  }

  // ✅ Attach event listeners (no getElementById)
  addBtn.addEventListener("click", () => calculate("add"));
  subtractBtn.addEventListener("click", () => calculate("subtract"));
  multiplyBtn.addEventListener("click", () => calculate("multiply"));
  divideBtn.addEventListener("click", () => calculate("divide"));
});