const factorial = number => number;

function* factorialSequence() {
  factorial();
  yield 1;
}

export { factorialSequence, factorial };
