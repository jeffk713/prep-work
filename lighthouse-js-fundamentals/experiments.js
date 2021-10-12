const posA = {
  east: 1,
  west: 2,
};

const keyA = 'east';

const setPos1 = (pos, key) => ({
  ...posA,
  [key]: 5,
});
const setPos2 = (pos, key) => ({
  [key]: 5,
  ...posA,
});

console.log(setPos1(posA, keyA));
console.log(setPos2(posA, keyA));
