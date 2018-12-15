function* fibonacciSequence() {
  let current = 1;
  let numb1 = 1;
  let numb2 = 1;

  yield 1;

  while (true) {
    current = numb2;

    yield current;

    numb2 = numb1 + numb2;
    numb1 = current;
  }
}

export { fibonacciSequence };
