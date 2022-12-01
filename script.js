const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('#operate');
const screen = document.querySelector('.screen');
const add = (n1, n2) => n1 + n2;
const subtract = (n1, n2) => n1 - n2;
const multiply = (n1, n2) => n1 * n2;
const divide = (n1, n2) => n1 / n2;
const operate = (func, n1, n2) => func(n1, n2);
let displayValue = '';
let n1 = 0;
let n2 = 0;
let operator = '';


numberButtons.forEach(btn => btn.addEventListener('click', (e) => {
  screenContent(e);
}));

operatorButtons.forEach(btn => btn.addEventListener('click', (e) => {
  n1 = parseFloat(displayValue);
  operator = e.target.id;
  displayValue = '';
  screenContent(e);
}));

equalButton.addEventListener('click', () => {
  n2 = parseFloat(displayValue);
  console.log(n1);
  console.log(n2);
  console.log(operator);
  let func = scope[operator];
  console.log(func);
  console.log(typeof func);
  displayValue = operate(func, n1, n2);
  operator = '';
});


function screenContent(btn) {
  if (displayValue == operator) displayValue = '';
  displayValue += btn.target.id;
  screen.innerText = displayValue;
}
