let currentValue = '';
let currentOperator = '';
let result = '';

function appendValue(value) {
  currentValue += value;
  document.getElementById('display').value = currentValue;
}

function clearDisplay() {
  currentValue = '';
  currentOperator = '';
  result = '';
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    result = eval(currentValue);
    document.getElementById('display').value = result;
    currentValue = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}