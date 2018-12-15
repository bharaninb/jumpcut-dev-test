function generator(sequenceFn, ...args) {
  const sequenceGen = sequenceFn(...args);
  let current;

  const iterator = {
    next() {
      current = sequenceGen.next();

      if (current.done) {
        throw Error('Sequencer is out of values.');
      }

      return current.value;
    },
  };
  return iterator;
}

export { generator };
