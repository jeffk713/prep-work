/*
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
*/

/*
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
];

const chooseStations = stationArr => {
  const chosenStationArr = stationArr
    .filter(station => station[1] >= 20)
    .filter(
      station => station[2] === 'school' || station[2] === 'community centre'
    )
    .map(station => station[0]);
  return chosenStationArr;
};

console.log(chooseStations(stations));
*/

/*
const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

const finalPosition = moves => {
  const position = [0, 0];
  moves.map(move => {
    if (move === 'north') return (position[1] += 1);
    if (move === 'south') return (position[1] -= 1);
    if (move === 'east') return (position[0] += 1);
    if (move === 'west') return (position[0] -= 1);
  });
  return position;
};

console.log(finalPosition(moves));

const howManyHundreds = num => Math.floor(num / 100);

console.log(howManyHundreds(57));
*/

/*
const ageCalculator = (name, bornYear, currentYear) => {
  return `${name} is ${currentYear - bornYear} years old`;
};

console.log(ageCalculator('jeff', 1992, 2021));
*/

const calculateRectangleArea = (length, width) => {
  if (length < 0 || width < 0) return undefined;
  return length * width;
};

const calculateTriangleArea = (base, height) => {
  if (base < 0 || height < 0) return undefined;
  return (base * height) / 2;
};

const calculateCircleArea = radius => {
  if (radius < 0) return undefined;
  return radius * radius * Math.PI;
};
