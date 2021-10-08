/* kata 1
const sumLargestNumbers = function (data) {
  const numInOrder = [];

  data.forEach(num => {
    const index = data.findIndex(el => el >= num);
    numInOrder.splice(index, 0, num);
  });

  return numInOrder[numInOrder.length - 1] + numInOrder[numInOrder.length - 2];
};

console.log(sumLargestNumbers([2, 58, 24, 15, 9, 90, 110]));
*/

/*
//kata2
const conditionalSum = function (values, condition) {
  const finalArr = [];
  if (condition === 'odd') {
    values.forEach(value => {
      if (value % 2 === 1) finalArr.push(value);
    });
  }
  if (condition === 'even') {
    values.forEach(value => {
      if (value % 2 === 0) finalArr.push(value);
    });
  }
  return finalArr === [] ? 0 : finalArr.reduce((acc, cur) => (acc += cur), 0);
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
*/

/*
//kata3
const numberOfVowels = function (data) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;
  Array.from(data).forEach(alphabet =>
    vowels.findIndex(vowel => vowel === alphabet) === -1 ? counter : counter++
  );
  return counter;
};

console.log(numberOfVowels('orange'));
console.log(numberOfVowels('lighthouse labs'));
console.log(numberOfVowels('aeiou'));
*/

/*
//kata4
const instructorWithLongestName = function (instructors) {
  let instructorToReturn = { name: '', course: '' };
  instructors.forEach(instructor => {
    if (instructor.name.length > instructorToReturn.name.length)
      instructorToReturn = instructor;
  });
  return instructorToReturn;
};

console.log(
  instructorWithLongestName([
    { name: 'Samuel', course: 'iOS' },
    { name: 'Jeremiah', course: 'Web' },
    { name: 'Ophilia', course: 'Web' },
    { name: 'Donald', course: 'Web' },
  ])
);
console.log(
  instructorWithLongestName([
    { name: 'Matthew', course: 'Web' },
    { name: 'David', course: 'iOS' },
    { name: 'Domascus', course: 'Web' },
  ])
);
*/

/*
//kata5
const urlEncode = function (text) {
  let url = [];
  Array.from(text.trim()).forEach(letter => {
    letter === ' ' ? url.push('%20') : url.push(letter);
  });
  return url.join('');
};

console.log(urlEncode('Lighthouse Labs'));
console.log(urlEncode(' Lighthouse Labs '));
console.log(urlEncode('blue is greener than purple for sure'));
*/