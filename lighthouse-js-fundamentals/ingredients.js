/*
const ingredients = [
  'eggs',
  'milk',
  'flour',
  'sugar',
  'baking soda',
  'baking powder',
  'chocolate chips',
  'bananas',
];

// Write a while loop that prints out the contents of ingredients:
let i = 0;

while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:

for (let j = 0; j < ingredients.length; j++) {
  console.log(ingredients[j]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let k = ingredients.length - 1; k >= 0; k--) {
  console.log(ingredients[k]);
}

*/

/*
const range = (start, end, step) => {
  if (start === undefined || end === undefined || step === undefined) return [];
  if (start > end) return [];
  if (step <= 0) return [];

  const arr = [];

  for (let i = start; i <= end; i += step) {
    arr.push(i);
  }
  return arr;
};

console.log(range(10, 30, 5));
*/

/*
const lastIndexOf = (arr, num) => {
  let index = -1;
  for (let i = arr.length - 1; i > -1; i--) {
    if (num === arr[i]) {
      index = i;
      break;
    }
  }
  return index;
};
console.log(lastIndexOf([0, 1], 2));
*/

const concat = (arr1, arr2) => arr1.concat(arr2);

console.log(concat([33], [2, 3]));
