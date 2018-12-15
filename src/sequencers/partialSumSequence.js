function* partialSumSequence(...numbers) {
  let currentSum = 0;
  let index = 0;

  for (index = 0; index < numbers.length; index += 1) {
    currentSum += numbers[index];
    yield currentSum;
  }
}

export { partialSumSequence };
