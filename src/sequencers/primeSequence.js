const isPrime = number => number && false;

function* primeSequence() {
  isPrime();
  yield 1;
}

export { primeSequence, isPrime };
