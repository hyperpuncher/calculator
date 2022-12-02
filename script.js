const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('#operate');
const screen = document.querySelector('.screen');

const add = (n1, n2) => n1 + n2;
const subtract = (n1, n2) => n1 - n2;
const multiply = (n1, n2) => n1 * n2;
const divide = (n1, n2) => n1 / n2;
const percentage = (n1, n2) => n1 * (n2 / 100);
const round = (n) => Math.round(n * 10000) / 10000;
const operate = (operator, n1, n2) => {
  if (operator === 'add') return round(add(n1, n2));
  else if (operator === 'subtract') return round(subtract(n1, n2));
  else if (operator === 'multiply') return round(multiply(n1, n2));
  else if (operator === 'divide') return round(divide(n1, n2));
  else if (operator === 'percentage') return round(percentage(n1, n2));
};

let displayValue = '';
let n1 = 0;
let n2 = 0;
let operator = '';
const operatorSymbols = ['=', '*', '/', '-', '+', '%']


window.addEventListener('keydown', (e) => {
  console.log(e.target.id);
  if (parseInt(e.key) >= 0 && parseInt(e.key) <= 9) numbers(e);

})

numberButtons.forEach(btn => btn.addEventListener('click', (e) => numbers(e)));

operatorButtons.forEach(btn => btn.addEventListener('click', (e) => operators(e)));

equalButton.addEventListener('click', () => equals());



function screenContent(btn) {
  if (displayValue == operator 
    || displayValue == 'reset' 
    || displayValue == 'R U STUPID?' 
    || typeof displayValue === 'number') displayValue = '';
  if (btn.target.id) {
    displayValue += btn.target.id;
  } else {
    displayValue += btn.key;
  }
  screen.innerText = displayValue;
}

function numbers(btn) {
  if (typeof displayValue !== 'number' 
    && displayValue.includes('.') 
    && btn.target.id === '.') return 0;
  else screenContent(btn);
}

function operators(btn) {
  if (btn.target.id === 'reset') {
    n1 = 0;
    n2 = 0;
    operator = '';
  } else if (displayValue === operator) {
    operator = btn.target.id;
  } else if (operator) {
    n2 = parseFloat(displayValue)
    n1 = operate(operator, n1, n2);
    operator = btn.target.id;
  } else {
    n1 = parseFloat(displayValue);
    operator = btn.target.id;
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