const factorial = (number) => {
  if (number === 0) {
    return 1;
  }

  return number * factorial(number - 1);
};

function* factorialSequence() {
  let current = 0;

  while (true) {
    yield factorial(current);
    current += 1;
  }
}

export { factorialSequence, factorial };
