function* rangeSequence(start, step) {
  let current = start;

  while (true) {
    yield current;
    current += step;
  }
}

export { rangeSequence };
