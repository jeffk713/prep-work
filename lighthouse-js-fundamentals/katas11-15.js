/*
//kata11
const PI = 3.14159;

const sphereVolume = function (radius) {
  return (4 * PI * radius * radius * radius) / 3;
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  return (PI * radius * radius * height) / 3;
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  return height * width * depth;
};

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let result = 0;

  solids.forEach(solid => {
    if (solid.type === 'sphere') return (result += sphereVolume(solid.radius));

    if (solid.type === 'cone')
      return (result += coneVolume(solid.radius, solid.height));
  });

  return result;
};

const largeSphere = {
  type: 'sphere',
  radius: 40,
};

const smallSphere = {
  type: 'sphere',
  radius: 10,
};

const cone = {
  type: 'cone',
  radius: 3,
  height: 5,
};

const duck = [largeSphere, smallSphere, cone];


console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
*/

/*
//kata12
const ingredientCheck = (bakery, ingredients) => {
  let inStock = false;

  ingredients.forEach(ingredient => {
    if (bakery.includes(ingredient)) return (inStock = !inStock);

    return inStock;
  });

  return inStock;
};

const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  let index = -1;

  recipes.forEach((recipe, i) => {
    const inStockFromA = ingredientCheck(bakeryA, recipe.ingredients);
    const inStockFromB = ingredientCheck(bakeryB, recipe.ingredients);
    inStockFromA && inStockFromB ? (index = i) : index;
  });

  return recipes[index].name;
};

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base'],
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese'],
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef'],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate'],
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey'],
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins'],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
*/

/*
// kata13;
const months = [
  'January',
  'Feburary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const talkingCalendar = function (date) {
  const dateSplit = date.split('/');

  const month = months[dateSplit[1] - 1];
  const year = dateSplit[0];

  let day = '';
  const dayArr = Array.from(dateSplit[2]);

  dayArr.push('th');
  if (dayArr[1] == 1 && dayArr[0] != 1) dayArr.splice(2, 1, 'st');
  if (dayArr[1] == 2 && dayArr[0] != 1) dayArr.splice(2, 1, 'nd');
  if (dayArr[1] == 3 && dayArr[0] != 1) dayArr.splice(2, 1, 'rd');

  if (dayArr[0] == 0) dayArr.splice(0, 1);

  day = dayArr.join('');

  return `${month} ${day}, ${year}`;
};

console.log(talkingCalendar('2017/12/02'));
console.log(talkingCalendar('2007/11/30'));
console.log(talkingCalendar('1987/22/24'));
*/

/*
//kata14

const calculateChange = function (total, cash) {
  let options = [
    { denomination: 'twentyDollar', amount: 2000, num: 0 },
    { denomination: 'tenDollar', amount: 1000, num: 0 },
    { denomination: 'twoDollar', amount: 200, num: 0 },
    { denomination: 'oneDollar', amount: 100, num: 0 },
    { denomination: 'quarter', amount: 25, num: 0 },
    { denomination: 'dime', amount: 10, num: 0 },
    { denomination: 'nickel', amount: 5, num: 0 },
    { denomination: 'penny', amount: 1, num: 0 },
  ];
  let balance = cash - total;
  let changes = {};

  options.forEach(option => {
    option.num = Math.floor(balance / option.amount);
    if (option.num === 0) return;

    balance -= option.num * option.amount;
    Object.assign(changes, { [option.denomination]: option.num });
  });

  return changes;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
*/

/*
//kata15
const organizeInstructors = function (instructors) {
  let organized = {};

  instructors.forEach(instructor => {
    if (!organized.hasOwnProperty(instructor.course))
      return Object.assign(organized, {
        [instructor.course]: [instructor.name],
      });

    organized[instructor.course].push(instructor.name);
  });

  return organized;
};

console.log(
  organizeInstructors([
    { name: 'Samuel', course: 'iOS' },
    { name: 'Victoria', course: 'Web' },
    { name: 'Karim', course: 'Web' },
    { name: 'Donald', course: 'Web' },
  ])
);
console.log(
  organizeInstructors([
    { name: 'Brendan', course: 'Blockchain' },
    { name: 'David', course: 'Web' },
    { name: 'Martha', course: 'iOS' },
    { name: 'Carlos', course: 'Web' },
  ])
);
*/
