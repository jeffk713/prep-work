/*
for (let i = 100; i <= 200; i++) {
  if (i % 12 === 0) {
    console.log('LoopyLighthouse');
    continue;
  }

  if (i % 3 === 0) {
    console.log('Loopy');
    continue;
  }

  if (i % 4 === 0) {
    console.log('Lighthouse');
    continue;
  }
}

const loopyLighthouse = (range = [], multiples = [], words) => {
  for (let i = range[0]; i <= range[1]; i++) {
    if (i % (multiples[0] * multiples[1]) === 0) {
      console.log(words.join(''));
      continue;
    }

    if (i % multiples[0] === 0) {
      console.log(words[0]);
      continue;
    }

    if (i % multiples[1] === 0) {
      console.log(words[1]);
      continue;
    }
    console.log(i);
  }
};

loopyLighthouse([15, 30], [2, 5], ['Batty', 'Beacon']);
*/

/*
const merge = (arr1, arr2) => arr1.concat(arr2).sort();

console.log(merge([4, 5, 6], [1, 2, 3, 4]));
*/
