import { generator } from '../../src/higher-order-generators/generator';

describe('Generator', () => {
  let sequenceFn;
  let nextFn;

  beforeEach(() => {
    nextFn = jest.fn();
    sequenceFn = jest.fn(() => ({ next: nextFn }));
  });

  it('should call the sequence function with specified arguments', () => {
    generator(sequenceFn, 2, 4);

    expect(sequenceFn).toBeCalledWith(2, 4);
  });

  it('should return value on calling next', () => {
    nextFn.mockReturnValue({ done: false, value: 2 });
    const sequenceGen = generator(sequenceFn);

    expect(sequenceGen.next()).toBe(2);
  });

  it('should throw an error on calling next when generator is out of values,', () => {
    nextFn.mockReturnValue({ done: true });
    const sequenceGen = generator(sequenceFn);

    expect(() => { sequenceGen.next(); }).toThrow('Sequencer is out of values.');
  });
});
