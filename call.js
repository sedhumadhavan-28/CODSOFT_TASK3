let displayValue = '0';
let currentValue = '';
let operator = '';
let result = 0;
let shouldClearDisplay = false;

function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = displayValue;
}

function appendNumber(number) {
  if (displayValue === '0' || shouldClearDisplay) {
    displayValue = number;
    shouldClearDisplay = false;
  } else {
    displayValue += number;
  }
  updateDisplay();
}

function operate(op) {
  if (currentValue === '') {
    currentValue = displayValue;
  } else {
    calculate();
  }
  operator = op;
  shouldClearDisplay = true;
}

function calculate() {
  const value = parseFloat(displayValue);
  switch (operator) {
    case '+':
      result = parseFloat(currentValue) + value;
      break;
    case '-':
      result = parseFloat(currentValue) - value;
      break;
    case '*':
      result = parseFloat(currentValue) * value;
      break;
    case '/':
      result = parseFloat(currentValue) / value;
      break;
    default:
      break;
  }
  displayValue = result.toString();
  currentValue = '';
  operator = '';
  updateDisplay();
}

function clearDisplay() {
  displayValue = '0';
  currentValue = '';
  operator = '';
  result = 0;
  shouldClearDisplay = false;
  updateDisplay();
}
