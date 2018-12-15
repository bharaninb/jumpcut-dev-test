import { isPrime, primeSequence } from '../../src/sequencers/primeSequence';

describe('Prime Sequence', () => {
  describe('isPrime', () => {
    it('should check if number is a prime', () => {
      expect(isPrime(4)).toBe(false);
      expect(isPrime(13)).toBe(true);
    });

    it('should return false for number 1', () => {
      expect(isPrime(1)).toBe(false);
    });
  });

  test('should be a generator function', () => {
    const primeGen = primeSequence();

    expect(primeGen.constructor.name).toBe('GeneratorFunctionPrototype');
    expect(typeof primeGen.next).toBe('function');
    expect(primeGen.next()).toHaveProperty('value');
    expect(primeGen.next()).toHaveProperty('done');
  });

  it('should return sequence of prime numbers when calling next', () => {
    const primeGen = primeSequence();

    expect(primeGen.next().value).toBe(2);
    expect(primeGen.next().value).toBe(3);
    expect(primeGen.next().value).toBe(5);
    expect(primeGen.next().value).toBe(7);
    expect(primeGen.next().value).toBe(11);
    expect(primeGen.next().value).toBe(13);
  });
});
