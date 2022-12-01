const add = function(n1, n2) {
  return n1 + n2;
};

const subtract = function(n1, n2) {
  return n1 - n2;
};

const sum = function(array, sum = 0) {
	for (n in array) sum += array[n];
  return sum;
};

const multiply = function(array, sum = 1) {
  for (n in array) sum *= array[n];
  return sum;
};

const power = function(n1, n2) {
	return n1 ** n2;
};

const factorial = function(n, sum = 1) {
	for (n; n > 1; n--) sum *= n;
  return sum;
};