import { factorial, factorialSequence } from '../../src/sequencers/factorialSequence';

describe('Factorial Sequence', () => {
  describe('Factorial', () => {
    it('should find factorial of an integer', () => {
      const factValue = factorial(4);
      expect(factValue).toBe(24);
    });

    it('should return 1 for number 0', () => {
      const factValue = factorial(0);
      expect(factValue).toBe(1);
    });
  });

  test('should be a generator function', () => {
    const factorialGen = factorialSequence();

    expect(factorialGen.constructor.name).toBe('GeneratorFunctionPrototype');
    expect(typeof factorialGen.next).toBe('function');
    expect(factorialGen.next()).toHaveProperty('value');
    expect(factorialGen.next()).toHaveProperty('done');
  });

  it('should return sequence of factorial values when calling next', () => {
    const factorialGen = factorialSequence();

    expect(factorialGen.next().value).toBe(1);
    expect(factorialGen.next().value).toBe(1);
    expect(factorialGen.next().value).toBe(2);
    expect(factorialGen.next().value).toBe(6);
    expect(factorialGen.next().value).toBe(24);
  });
});
