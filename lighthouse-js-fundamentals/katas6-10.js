/*
kata6
const whereCanIPark = function (spots, vehicle) {
  let final = [-1, -1];

  const parkType = {
    regular: ['R'],
    small: ['R', 'S'],
    motorcycle: ['R', 'S', 'M'],
  };

  for (let i = 0; i < spots.length; i++) {
    const finalX = spots[i].findIndex(spot =>
      parkType[vehicle].includes(spot)
    );

    if (finalX !== -1) {
      final = [finalX, i];
      break;
    }
  }

  return final[0] === -1 ? false : final;
};

console.log(
  whereCanIPark(
    [
      // COLUMNS ARE X
      // 0    1    2    3    4    5
      ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
      ['s', 'M', 's', 'S', 'r', 'M'], // 1
      ['s', 'M', 's', 'S', 'r', 'm'], // 2
      ['S', 'r', 's', 'm', 'r', 'M'], // 3
      ['S', 'r', 's', 'm', 'r', 'M'], // 4
      ['S', 'r', 'S', 'M', 'M', 'S'], // 5
    ],
    'regular'
  )
);

console.log(
  whereCanIPark(
    [
      ['M', 'M', 'M', 'M'],
      ['M', 's', 'M', 'M'],
      ['M', 'M', 'M', 'M'],
      ['M', 'M', 'r', 'M'],
    ],
    'small'
  )
);

console.log(
  whereCanIPark(
    [
      ['s', 's', 's', 's', 's', 's'],
      ['s', 'm', 's', 'S', 'r', 's'],
      ['s', 'm', 's', 'S', 'r', 's'],
      ['S', 'r', 's', 'm', 'r', 's'],
      ['S', 'r', 's', 'm', 'R', 's'],
      ['S', 'r', 'S', 'M', 'm', 'S'],
    ],
    'motorcycle'
  )
);
*/

/*
//kata7
const checkAir = function (samples, threshold) {
  let cleanCounter = 0;
  samples.forEach(sample =>
    sample === 'clean' ? cleanCounter++ : cleanCounter
  );
  return cleanCounter / samples.length > 1 - threshold ? 'Clean' : 'Polluted';
};

console.log(
  checkAir(
    [
      'clean',
      'clean',
      'dirty',
      'clean',
      'dirty',
      'clean',
      'clean',
      'dirty',
      'clean',
      'dirty',
    ],
    0.3
  )
);

console.log(checkAir(['dirty', 'dirty', 'dirty', 'dirty', 'clean'], 0.25));

console.log(
  checkAir(['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'], 0.9)
);
*/

/*
//kata8
const repeatNumbers = function (data) {
  const repeatedNums = [];

  data.forEach(arr => {
    const repeatInArr = [];

    for (let i = 0; i < arr[1]; i++) {
      repeatInArr.push(arr[0]);
    }

    const repeat = repeatInArr.join('');
    repeatedNums.push(repeat);
  });
  return repeatedNums.join(', ');
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);
*/

/*
//kata9
const camelCase = function (input) {
  const inputArr = input.split(' ');

  const modifiedInputArr = inputArr.map((word, i) => {
    if (i === 0) return word;

    let letterArr = Array.from(word);
    letterArr[0] = letterArr[0].toUpperCase();
    return letterArr.join('');
  });

  return modifiedInputArr.join('');
};

console.log(camelCase('this is a string'));
console.log(camelCase('loopy lighthouse'));
console.log(camelCase('supercalifragalisticexpialidocious'));
*/

//kata10
const multiplicationTable = function (maxValue) {
  let result = '';

  for (let i = 1; i <= maxValue; i++) {
    let numsToProcess = [];
    for (let j = 1; j <= maxValue; j++) {
      numsToProcess.push(i * j);
    }
    numsToProcess.push('\n');
    result += numsToProcess.join(' ');
  }
  return result;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));

// console.log([[1, 2, 3, 4].join(' '), [1, 2, 3, 4].join(' ')].join(' '));

// console.log('1 2 3 4 \n5 6 7 ');
