document.addEventListener("DOMContentLoaded", function () {
  // Get DOM elements
  const num1Input = document.querySelector("#num1");
  const num2Input = document.querySelector("#num2");
  const resultSpan = document.querySelector("#calculation-result");

  const addBtn = document.querySelector("#add-btn");
  const subtractBtn = document.querySelector("#subtract-btn");
  const multiplyBtn = document.querySelector("#multiply-btn");
  const divideBtn = document.querySelector("#divide-btn");

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
    if (b === 0) return " Cannot divide by zero";
    return a / b;
  }

  // Attach event listeners to buttons
  addBtn.addEventListener("click", function () {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    resultSpan.textContent = add(num1, num2);
  });

  subtractBtn.addEventListener("click", function () {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    resultSpan.textContent = subtract(num1, num2);
  });

  multiplyBtn.addEventListener("click", function () {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    resultSpan.textContent = multiply(num1, num2);
  });

  divideBtn.addEventListener("click", function () {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    resultSpan.textContent = divide(num1, num2);
  });
});