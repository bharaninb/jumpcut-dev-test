import { fibonacciSequence } from '../../src/sequencers/fibonacciSequence';

describe('Fibonacci Sequence', () => {
  test('should be a generator function', () => {
    const fibonacciGen = fibonacciSequence();

    expect(fibonacciGen.constructor.name).toBe('GeneratorFunctionPrototype');
    expect(typeof fibonacciGen.next).toBe('function');
    expect(fibonacciGen.next()).toHaveProperty('value');
    expect(fibonacciGen.next()).toHaveProperty('done');
  });

  it('should return sequence of fibonacci numbers when calling next', () => {
    const fibonacciGen = fibonacciSequence();

    expect(fibonacciGen.next().value).toBe(1);
    expect(fibonacciGen.next().value).toBe(1);
    expect(fibonacciGen.next().value).toBe(2);
    expect(fibonacciGen.next().value).toBe(3);
    expect(fibonacciGen.next().value).toBe(5);
    expect(fibonacciGen.next().value).toBe(8);
    expect(fibonacciGen.next().value).toBe(13);
  });
});
