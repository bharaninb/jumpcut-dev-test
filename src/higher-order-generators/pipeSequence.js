function pipeSequence(sequenceFn, ...args) {
  const sequenceGen = sequenceFn(...args);
  let pipeFn = num => num;

  return {
    pipeline(pipe) {
      pipeFn = pipe();
      return this;
    },

    invoke: function* invokeGen() {
      let nextGenValue = sequenceGen.next();

      while (nextGenValue.done === false) {
        const pipedValue = pipeFn(nextGenValue.value);
        const pipedValueType = typeof pipedValue;

        if (pipedValueType === 'number') {
          yield pipedValue;
        }

        if (pipedValueType === 'object' && pipedValue.status) {
          yield pipedValue.number;
        }

        nextGenValue = sequenceGen.next();
      }
    },
  };
}

export { pipeSequence };
