const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr = [0]) {
	const total = arr.reduce((sum, currentValue)=>{
    return sum + currentValue;
  }, 0);
  return total;
};

const multiply = function(arr = [0]) {
  const total = arr.reduce((sum, currentValue)=>{
    return sum * currentValue;
  }, 1);
  return total;
};

const power = function(num = 0, pow = 0) {
	return Math.pow(num, pow);
};

const factorial = function(factOf) {
	let sum = 1;
  for(let i = 1; i <= factOf; i++){
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
