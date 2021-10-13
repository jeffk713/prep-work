/*
const camelCase = input => {
  const modifiedInputArr = [];

  input
    .trim()
    .split(' ')
    .forEach((word, i) => {
      if (i === 0) return modifiedInputArr.push(word);

      let modifiedWordArr = Array.from(word).map((letter, i) => {
        if (i === 0) return letter.toUpperCase();
        return letter;
      });

      modifiedInputArr.push(modifiedWordArr.join(''));
    });
  return modifiedInputArr.join('');
};

const pascalCase = input => {
  const modifiedInputArr = [];

  input
    .trim()
    .split(' ')
    .forEach((word, i) => {
      let modifiedWordArr = Array.from(word).map((letter, i) => {
        if (i === 0) return letter.toUpperCase();
        return letter;
      });

      modifiedInputArr.push(modifiedWordArr.join(''));
    });
  return modifiedInputArr.join('');
};

const snakeCase = input => input.trim().split(' ').join('_');
const kebabCase = input => input.trim().split(' ').join('-');

const titleCase = input => {
  const modifiedInputArr = [];

  input
    .trim()
    .split(' ')
    .forEach((word, i) => {
      let modifiedWordArr = Array.from(word).map((letter, i) => {
        if (i === 0) return letter.toUpperCase();
        return letter;
      });

      modifiedInputArr.push(modifiedWordArr.join(''));
    });
  return modifiedInputArr.join(' ');
};

const vowelCase = input => {
  const modifiedInputArr = [];
  const vowelArr = ['a', 'e', 'i', 'o', 'u'];

  input
    .trim()
    .split(' ')
    .forEach((word, i) => {
      let modifiedWordArr = Array.from(word).map((letter, i) => {
        if (vowelArr.includes(letter)) return letter.toUpperCase();
        return letter;
      });

      modifiedInputArr.push(modifiedWordArr.join(''));
    });
  return modifiedInputArr.join(' ');
};

const consonantCase = input => {
  const modifiedInputArr = [];
  const vowelArr = ['a', 'e', 'i', 'o', 'u'];

  input
    .trim()
    .split(' ')
    .forEach((word, i) => {
      let modifiedWordArr = Array.from(word).map((letter, i) => {
        if (!vowelArr.includes(letter)) return letter.toUpperCase();
        return letter;
      });

      modifiedInputArr.push(modifiedWordArr.join(''));
    });
  return modifiedInputArr.join(' ');
};

const makeCase = function (input, caseType) {
  if (Array.isArray(caseType)) {
    let result = input;
    caseType.forEach(type => {
      if (type === 'upper') return (result = result.toUpperCase());
      if (type === 'lower') return (result = result.toLowerCase());
      if (type === 'vowel') return (result = vowelCase(result));
      if (type === 'consonant') return (result = consonantCase(result));

      return (result = makeCase(result, type));
    });
    return result;
  }

  if (caseType === 'camel') return camelCase(input);
  if (caseType === 'pascal') return pascalCase(input);
  if (caseType === 'snake') return snakeCase(input);
  if (caseType === 'kebab') return kebabCase(input);
  if (caseType === 'title') return titleCase(input);
  if (caseType === 'vowel') return vowelCase(input);
  if (caseType === 'consonant') return consonantCase(input);
};

console.log(makeCase('this is a string', 'camel'));
console.log(makeCase('this is a string', 'pascal'));
console.log(makeCase('this is a string', 'snake'));
console.log(makeCase('this is a string', 'kebab'));
console.log(makeCase('this is a string', 'title'));
console.log(makeCase('this is a string', 'vowel'));
console.log(makeCase('this is a string', 'consonant'));
console.log(makeCase('this is a string', ['upper', 'snake']));
*/

/*
//kata17
const urlDecode = function (text) {
  let decodedUrl = {};
  const urlArr = text.split('&');
  urlArr.forEach(url => {
    const keyValuePair = url.split('=');

    const value = keyValuePair[1].split('%20').join(' ');

    Object.assign(decodedUrl, { [keyValuePair[0]]: value });
  });

  return decodedUrl;
};

console.log(urlDecode('duck=rubber'));
console.log(urlDecode('bootcamp=Lighthouse%20Labs'));
console.log(urlDecode('city=Vancouver&weather=lots%20of%20rain'));
console.log(urlDecode('city=Vancouver&weather=lots%20of%20rain').weather);
*/

/*
//kata18
const squareCode = function (message) {
  const messageTrimed = message.split(' ').join('');
  const messageLength = messageTrimed.length;
  const NumOfColumn = Math.ceil(Math.sqrt(messageLength));

  const squaredMessageArr = [];
  for (let i = 0; i < messageLength; i += NumOfColumn) {
    const partOfMessage = Array.from(messageTrimed).slice(i, i + NumOfColumn);
    squaredMessageArr.push(partOfMessage);
  }
  const encryptedMessageArrInArr = [];
  for (let i = 0; i < NumOfColumn; i++) {
    encryptedMessageArrInArr.push([]);
  }

  squaredMessageArr.forEach(parts => {
    parts.forEach((letter, i) => {
      encryptedMessageArrInArr[i].push(letter);
    });
  });

  const encryptedMessageArr = encryptedMessageArrInArr.flatMap(parts =>
    parts.join('')
  );

  const encryptedMessage = encryptedMessageArr.join(' ');

  return encryptedMessage;
};

console.log(squareCode('chill out'));
console.log(squareCode('feed the dog'));
console.log(squareCode('have a nice day'));
console.log(
  squareCode(
    'if man was meant to stay on the ground god would have given us roots'
  )
);
*/

/*
//kata19
const generateBoard = (queen1, queen2) => {
  let board = [];
  for (let i = 0; i < 8; i++) {
    board.push([0, 0, 0, 0, 0, 0, 0, 0]);
  }
  board.forEach((row, i) => {
    if (queen1[0] === i) return (row[queen1[1]] = 1);
    if (queen2[0] === i) return (row[queen2[1]] = 1);
    return;
  });

  return board;
};

const isThreat = queenPosition => {
  const queen1Pos = queenPosition[0];
  const queen2Pos = queenPosition[1];

  if (queen1Pos[0] === queen2Pos[0]) return true;
  if (queen1Pos[1] === queen2Pos[1]) return true;

  const upPosition = queen1Pos[0] < queen2Pos[0] ? queen1Pos : queen2Pos;
  const lowPosition = queen1Pos[0] < queen2Pos[0] ? queen2Pos : queen1Pos;

  let spotDetector = upPosition;

  if (upPosition[1] < lowPosition[1]) {
    while (spotDetector[0] < lowPosition[0]) {
      spotDetector = [spotDetector[0] + 1, spotDetector[1] + 1];
    }
  }
  if (upPosition[1] > lowPosition[1]) {
    while (spotDetector[0] < lowPosition[0]) {
      spotDetector = [spotDetector[0] + 1, spotDetector[1] - 1];
    }
  }

  if (spotDetector.join('') === lowPosition.join('')) return true;

  return false;
};

const queenThreat = board => {
  const queenPosition = [];
  board.forEach((row, i) => {
    const queenX = row.findIndex(spot => spot === 1);
    if (queenX !== -1) return queenPosition.push([queenX, i]);
    return;
  });

  return isThreat(queenPosition);
};

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);

console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
*/

/*
//kata20
const addInDir = (position, numOfBlocks, direction) => ({
  ...position,
  [direction]: position[direction] + numOfBlocks,
});

const subtractInDir = (position, numOfBlocks, direction) => ({
  ...position,
  [direction]: position[direction] - numOfBlocks,
});

const moveUponSameDirFactor = (
  sameDir,
  index,
  position,
  numOfBlocks,
  mainDir,
  subDir
) => {
  if (sameDir) {
    if (((index - 1) / 2) % 2 === 0)
      return subtractInDir(position, numOfBlocks, mainDir);

    if (((index - 1) / 2) % 2 === 1)
      return subtractInDir(position, numOfBlocks, subDir);
  }
  if (!sameDir) {
    if (((index - 1) / 2) % 2 === 0)
      return addInDir(position, numOfBlocks, mainDir);

    if (((index - 1) / 2) % 2 === 1)
      return addInDir(position, numOfBlocks, subDir);
  }
};

const blocksAway = function (directions) {
  let taxiPosition = { east: 0, north: 0 };
  const firstDir = directions[0];
  let mainDir = '';
  let subDir = '';

  let lastDir = '';
  let sameDir = false;

  if (firstDir === 'right') {
    mainDir = 'east';
    subDir = 'north';
  }
  if (firstDir === 'left') {
    mainDir = 'north';
    subDir = 'east';
  }
  directions.forEach((dir, i) => {
    if (isNaN(dir) && i < 4) return (lastDir = dir);

    if (i === 1) {
      taxiPosition = addInDir(taxiPosition, dir, mainDir); //2n+1 n is even including 0
    }
    if (i === 3) {
      taxiPosition = addInDir(taxiPosition, dir, subDir); //2n+1 n is odd
    }

    if (isNaN(dir) && i > 3) {
      sameDir = lastDir === dir;
      lastDir = dir;
    }

    if (!isNaN(dir) && i > 3) {
      taxiPosition = moveUponSameDirFactor(
        sameDir,
        i,
        taxiPosition,
        dir,
        mainDir,
        subDir
      );
    }
  });

  return taxiPosition;
};

// console.log(blocksAway(['right', 2, 'left', 3]));
console.log(blocksAway(['right', 2, 'left', 3, 'left', 1]));
console.log(
  blocksAway([
    'left',
    1,
    'right',
    1,
    'left',
    1,
    'right',
    1,
    'left',
    1,
    'right',
    1,
  ])
);
console.log(blocksAway(['left', 3, 'right', 1, 'right', 3, 'right', 1]));
*/

/*
//kata20 - 2
const sortDirections = directions => {
  const sortedDir = [];
  for (let i = 0; i < directions.length; i += 2) {
    sortedDir.push({ dir: directions[i], numOfBlocks: directions[i + 1] });
  }
  return sortedDir;
};

const addInDir = (position, numOfBlocks, direction) => ({
  ...position,
  [direction]: position[direction] + numOfBlocks,
});

const subtractInDir = (position, numOfBlocks, direction) => ({
  ...position,
  [direction]: position[direction] - numOfBlocks,
});


const moveUponSameDirFactor = (
  position,
  mainDir,
  subDir,
  sameDir,
  index,
  numOfBlocks
) => {
  let movedPosition = {};
  if (index % 2 === 0) {
    //move in mainDir
    if (sameDir) {
      movedPosition = subtractInDir(position, numOfBlocks, mainDir);
    }
    if (!sameDir) {
      movedPosition = addInDir(position, numOfBlocks, mainDir);
    }
  }
  if (index % 2 === 1) {
    //move in subDir
    if (sameDir) {
      movedPosition = subtractInDir(position, numOfBlocks, subDir);
    }
    if (!sameDir) {
      movedPosition = addInDir(position, numOfBlocks, subDir);
    }
  }
  return movedPosition;
};

const blocksAway = function (directions) {
  let taxiPosition = { east: 0, north: 0 };
  const sortedDir = sortDirections(directions);
  const firstDir = sortedDir[0].dir;

  let lastDir = '';
  let sameDir;
  let mainDir = '';
  let subDir = '';
  if (firstDir === 'right') {
    mainDir = 'east';
    subDir = 'north';
  }
  if (firstDir === 'left') {
    mainDir = 'east';
    subDir = 'north';
  }

  sortedDir.forEach((dir, i) => {
    if (i === 0) {
      lastDir = dir.dir;
      taxiPosition = addInDir(taxiPosition, dir.numOfBlocks, mainDir);
    }
    if (i === 1) {
      lastDir = dir.dir;
      taxiPosition = addInDir(taxiPosition, dir.numOfBlocks, subDir);
    }

    if (i > 1) {
      sameDir = lastDir === dir.dir;
      lastDir = dir.dir;
      taxiPosition = moveUponSameDirFactor(
        taxiPosition,
        mainDir,
        subDir,
        sameDir,
        i,
        dir.numOfBlocks
      );
    }
  });
  return taxiPosition;
};

console.log(blocksAway(['right', 2, 'left', 3, 'left', 1]));
console.log(
  blocksAway([
    'left',
    1,
    'right',
    1,
    'left',
    1,
    'right',
    1,
    'left',
    1,
    'right',
    1,
  ])
);
console.log(blocksAway(['left', 3, 'right', 1, 'right', 3, 'right', 1]));
*/
