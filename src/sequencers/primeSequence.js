const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  let index = 2;
  const sqrtNumber = Math.sqrt(number);

  for (index = 2; index <= sqrtNumber; index += 1) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
};

function* primeSequence() {
  let current = 1;

  while (true) {
    if (isPrime(current)) {
      yield current;
    }
    current += 1;
  }
}

export { primeSequence, isPrime };
