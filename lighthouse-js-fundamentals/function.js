const sayHello = function (name) {
  console.log('Hello, ' + name);
};

sayHello('jeff');

const returnSayHello = function (name) {
  return 'Hello, ' + name;
};
const greeting = returnSayHello('Jeff');

console.log(greeting);

const isEven = function (num) {
  return num % 2 === 0;
};

console.log(isEven(4));
