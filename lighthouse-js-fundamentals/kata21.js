let prompt = require('prompt-sync')();

const num = Math.floor(Math.random() * 30 + 1);

let correct = false;
let counter = 0;
let prevAnswer = '';

// console.log(num);

while (!correct) {
  let answer = prompt('Guess a number: ');

  if (isNaN(Number(answer))) {
    console.log('Not a number! Try again!');
    continue;
  }

  if (Number(answer) === num) {
    counter++;
    console.log(`You got it! You took ${counter} attempts!`);
    correct = true;
  }

  if (prevAnswer === answer) {
    console.log('Already Guessed!');
    continue;
  }

  if (Number(answer) < num) {
    console.log('Too Low!');
    counter++;
  }

  if (Number(answer) > num) {
    console.log('Too High');
    counter++;
  }

  prevAnswer = answer;
}
