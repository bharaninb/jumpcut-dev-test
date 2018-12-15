import { partialSumSequence } from '../../src/sequencers/partialSumSequence';

describe('Partial Sum Sequence', () => {
  test('should be a generator function', () => {
    const partialSeqGen = partialSumSequence(1, 2, 3);

    expect(partialSeqGen.constructor.name).toBe('GeneratorFunctionPrototype');
    expect(typeof partialSeqGen.next).toBe('function');
    expect(partialSeqGen.next()).toHaveProperty('value');
    expect(partialSeqGen.next()).toHaveProperty('done');
  });

  it('should return sequence of partial sum of numbers when calling next', () => {
    const partialSeqGen = partialSumSequence(1, 3, 7, 2, 0);

    expect(partialSeqGen.next().value).toBe(1);
    expect(partialSeqGen.next().value).toBe(4);
    expect(partialSeqGen.next().value).toBe(11);
    expect(partialSeqGen.next().value).toBe(13);
    expect(partialSeqGen.next().value).toBe(13);
  });

  it('should end after all numbers returned', () => {
    const partialSeqGen = partialSumSequence(1, 3, 7);

    partialSeqGen.next();
    partialSeqGen.next();
    partialSeqGen.next();

    expect(partialSeqGen.next()).toEqual({ done: true, value: undefined });
  });
});
