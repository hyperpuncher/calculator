const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('#operate');
const backspaceButton = document.querySelector('#backspace');
const deleteButton = document.querySelector('#delete');
const screen = document.querySelector('.screen');

const add = (n1, n2) => n1 + n2;
const subtract = (n1, n2) => n1 - n2;
const multiply = (n1, n2) => n1 * n2;
const divide = (n1, n2) => n1 / n2;
const percentage = (n1, n2) => n1 * (n2 / 100);
const round = (n) => Math.round(n * 10000) / 10000;
const operate = (operator, n1, n2) => {
  if (operator === '+') return round(add(n1, n2));
  else if (operator === '-') return round(subtract(n1, n2));
  else if (operator === '*') return round(multiply(n1, n2));
  else if (operator === '/') return round(divide(n1, n2));
  else if (operator === '%') return round(percentage(n1, n2));
};

let displayValue = '';
let n1 = 0;
let n2 = 0;
let operator = '';
const operatorSymbols = ['*', '/', '-', '+', '%']

window.addEventListener('keydown', (e) => {
  if (parseInt(e.key) >= 0 && parseInt(e.key) <= 9) numbers(e.key);
  else if (e.key === 'Backspace') backspace();
  else if (operatorSymbols.includes(e.key)) operators(e.key);
  else if (e.key === '=') equals()
})

numberButtons.forEach(btn => btn.addEventListener('click', (e) => numbers(e.target.id)));
operatorButtons.forEach(btn => btn.addEventListener('click', (e) => operators(e.target.id)));
equalButton.addEventListener('click', () => equals());
backspaceButton.addEventListener('click', () => backspace());
deleteButton.addEventListener('click', () => deleteNumber());



function screenContent(btn) {
  if (displayValue == operator
    || displayValue == 'reset'
    || displayValue == 'R U STUPID?'
    || typeof displayValue === 'number') displayValue = '';
  displayValue += btn;
  screen.innerText = displayValue;
}

function numbers(btn) {
  if (typeof displayValue !== 'number'
    && displayValue.includes('.')
    && btn.target.id === '.') return 0;
  else screenContent(btn);
}

function operators(btn) {
  if (btn === 'reset') {
    n1 = 0;
    n2 = 0;
    operator = '';
  } else if (displayValue === operator) {
    operator = btn;
  } else if (operator) {
    n2 = parseFloat(displayValue)
    n1 = operate(operator, n1, n2);
    operator = btn;
  } else {
    n1 = parseFloat(displayValue);
    operator = btn;
  }
  displayValue = '';
  screenContent(btn);
}

function equals() {
  if (operator) {
    n2 = parseFloat(displayValue);
    displayValue = operate(operator, n1, n2);
    if (displayValue === Infinity) displayValue = 'R U STUPID?'
    screen.innerText = displayValue;
    n1 = 0;
    n2 = 0;
    operator = '';
  }
}

function backspace() {
  displayValue = displayValue.slice(0, -1);
  screen.innerText = displayValue;
}

function deleteNumber() {
  displayValue = '';
  screen.innerText = displayValue;
}