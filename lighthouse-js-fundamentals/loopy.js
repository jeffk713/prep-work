for (let i = 100; i <= 200; i++) {
  if (i % 12 === 0) {
    console.log('loopy-lighthouse');
    continue;
  }

  if (i % 3 === 0) {
    console.log('loopy');
    continue;
  }

  if (i % 4 === 0) {
    console.log('lighthouse');
    continue;
  }

  console.log(i);
}
