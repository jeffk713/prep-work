const a = 'zbc';
const b = 0;
const c = 3;
// console.log(a > b);

/*
console.log(true && 10); //true
console.log(false && 10); //false

console.log(a && 20); //20
console.log(b && 30); //0
console.log(c && 40); //40

console.log(!!c === true); //true

console.log(true || false); //true
console.log(false || true); //true
console.log(false == 0); //true
console.log(true == 1);
*/

const salary = 100;
let car = '';

switch (salary) {
  case 1000:
    car = 'shit';
    console.log('shit');
    break;
  case 3000:
    car = 'okay';
    console.log('okay');
    break;

  case 5000:
    car = 'good';
    console.log('good');
    break;
  default:
    car = 'car';
    console.log('car');
    break;
}

console.log(car);
