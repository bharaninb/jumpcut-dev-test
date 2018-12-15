import { availableSequencers } from '../constants';
import { SELECT_SEQUENCE, SEQUENCE_NEXT_VALUE } from '../constants/redux';
import { generator } from '../higher-order-generators/generator';

const selectSequence = (sequenceId) => {
  const activeSequence = availableSequencers.find(sequence => (sequence.id === sequenceId));

  const sequenceGen = generator(activeSequence.fn);
  return {
    type: SELECT_SEQUENCE,
    sequenceId,
    sequenceGen,
  };
};

const fetchNextSequenceValue = sequenceGen => ({
  type: SEQUENCE_NEXT_VALUE,
  nextValue: sequenceGen.next(),
});

export { selectSequence, fetchNextSequenceValue };
