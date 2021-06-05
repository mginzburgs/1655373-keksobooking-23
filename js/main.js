
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

let randomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomInteger;
};

randomInteger(1, 100);


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

let randomDecimal = (min, max, decimals) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  randomDecimal = (Math.random() * (max - min + 1) + min).toFixed(decimals);
  return randomDecimal;
};


randomDecimal(0, 3, 5);
