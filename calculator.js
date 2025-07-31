document.addEventListener("DOMContentLoaded", function () {
  // Select elements without getElementById
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
    return b === 0 ? "Cannot divide by zero" : a / b;
  }

  // Function to get input values
  function getNumbers() {
    const num1 = parseFloat(num1Input.value) || 0;
    const num2 = parseFloat(num2Input.value) || 0;
    return [num1, num2];
  }

  // Event listeners
  addBtn.addEventListener("click", function () {
    const [num1, num2] = getNumbers();
    resultSpan.textContent = add(num1, num2);
  });

  subtractBtn.addEventListener("click", function () {
    const [num1, num2] = getNumbers();
    resultSpan.textContent = subtract(num1, num2);
  });

  multiplyBtn.addEventListener("click", function () {
    const [num1, num2] = getNumbers();
    resultSpan.textContent = multiply(num1, num2);
  });

  divideBtn.addEventListener("click", function () {
    const [num1, num2] = getNumbers();
    resultSpan.textContent = divide(num1, num2);
  });
});