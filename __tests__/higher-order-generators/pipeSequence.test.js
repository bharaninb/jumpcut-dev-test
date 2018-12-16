import { pipeSequence } from '../../src/higher-order-generators/pipeSequence';

describe('Pipe Sequence', () => {
  let sequenceFn;
  let nextFn;

  beforeEach(() => {
    nextFn = jest.fn();
    sequenceFn = jest.fn(() => ({ next: nextFn }));
  });

  it('should call the sequence function with specified arguments', () => {
    pipeSequence(sequenceFn, 2, 4);

    expect(sequenceFn).toBeCalledWith(2, 4);
  });

  it('should return an object with pipeline and invoke methods', () => {
    const pipeGen = pipeSequence(sequenceFn);

    expect(typeof pipeGen.pipeline).toBe('function');
    expect(typeof pipeGen.invoke).toBe('function');
  });

  it('should call pipe function that passed to pipeline method', () => {
    const pipeGen = pipeSequence(sequenceFn);
    const pipe = jest.fn();
    pipeGen.pipeline(pipe);

    expect(pipe).toBeCalled();
  });

  describe('Pipeline method', () => {
    let pipeGen;

    beforeEach(() => {
      pipeGen = pipeSequence(sequenceFn);
    });

    test('should call the pipe function that passed', () => {
      const pipe = jest.fn();
      pipeGen.pipeline(pipe);

      expect(pipe).toBeCalled();
    });

    test('should return itself', () => {
      const pipe = jest.fn();
      const pipedGen = pipeGen.pipeline(pipe);

      expect(typeof pipedGen.pipeline).toBe('function');
      expect(typeof pipedGen.invoke).toBe('function');
    });
  });

  describe('Invoke method', () => {
    let pipeGen;

    beforeEach(() => {
      nextFn.mockReturnValueOnce({ done: false, value: 2 });
      nextFn.mockReturnValueOnce({ done: true });
      pipeGen = pipeSequence(sequenceFn);
    });

    test('should be a generator function', () => {
      const invokeGen = pipeGen.invoke();

      expect(invokeGen.constructor.name).toBe('GeneratorFunctionPrototype');
      expect(typeof invokeGen.next).toBe('function');
      expect(invokeGen.next()).toHaveProperty('value');
      expect(invokeGen.next()).toHaveProperty('done');
    });

    test('should return piped sequence value when calling next', () => {
      const pipeFn = jest.fn(() => x => x + 2);
      const invokeGen = pipeGen.pipeline(pipeFn).invoke();

      expect(invokeGen.next().value).toBe(4);
    });

    test('should return piped sequence value when calling next', () => {
      const pipeFn = jest.fn(() => x => x + 2);
      const invokeGen = pipeGen.pipeline(pipeFn).invoke();

      expect(invokeGen.next().value).toBe(4);
    });

    test('should return sequence value if pipe function returns status true when calling next', () => {
      const pipeFn = jest.fn(() => () => ({ status: false }));
      const invokeGen = pipeGen.pipeline(pipeFn).invoke();

      expect(invokeGen.next().done).toBe(true);
    });

    test('should return done true if sequence is out of values when calling next', () => {
      const invokeGen = pipeGen.invoke();
      invokeGen.next();

      expect(invokeGen.next().done).toBe(true);
    });
  });
});
