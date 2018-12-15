import { rangeSequence } from '../../src/sequencers/rangeSequence';

describe('Range Sequence', () => {
  test('should be a generator function', () => {
    const rangeGen = rangeSequence(1, 2);

    expect(rangeGen.constructor.name).toBe('GeneratorFunctionPrototype');
    expect(typeof rangeGen.next).toBe('function');
    expect(rangeGen.next()).toHaveProperty('value');
    expect(rangeGen.next()).toHaveProperty('done');
  });

  it('should return first number as specified start value when calling next', () => {
    const rangeGen = rangeSequence(5, 2);

    expect(rangeGen.next().value).toBe(5);
  });

  it('should return sequence of range numbers with increment of step value when calling next', () => {
    const rangeGen = rangeSequence(1, 2);

    expect(rangeGen.next().value).toBe(1);
    expect(rangeGen.next().value).toBe(3);
    expect(rangeGen.next().value).toBe(5);
    expect(rangeGen.next().value).toBe(7);
  });
});
