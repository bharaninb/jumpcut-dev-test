import {
  factorialSequence,
  fibonacciSequence,
  // partialSumSequence,
  primeSequence,
  // rangeSequence,
} from '../sequencers';

export const availableSequencers = [
  {
    id: 'factorial',
    name: 'Factorial Sequence',
    fn: factorialSequence,
  },
  {
    id: 'fibonacci',
    name: 'Fibonacci Sequence',
    fn: fibonacciSequence,
  },
  // {
  //   id: 'partialSum',
  //   name: 'Partial Sum Sequence',
  //   fn: partialSumSequence,
  // },
  {
    id: 'prime',
    name: 'Prime Sequence',
    fn: primeSequence,
  },
  // {
  //   id: 'range',
  //   name: 'Range Sequence',
  //   fn: rangeSequence,
  // },
];
