import { availableSequencers } from '../constants';
import {
  SELECT_SEQUENCE,
  SEQUENCE_NEXT_VALUE,
  ACTIVATE_SEQUENCE,
  SELECT_PIPELINE,
} from '../constants/redux';
import { generator } from '../higher-order-generators/generator';
import { pipeSequence } from '../higher-order-generators/pipeSequence';
import { accumulator } from '../helpers/accumulator';
import { isEven } from '../helpers/isEven';

const selectSequence = sequenceId => ({
  type: SELECT_SEQUENCE,
  sequenceId,
});

const activateSequence = (sequenceId, pipelineOption) => {
  const activeSequence = availableSequencers.find(sequence => sequence.id === sequenceId);

  let pipeSeqGen = activeSequence.fn;

  if (pipelineOption === 'accumulator') {
    pipeSeqGen = pipeSequence(activeSequence.fn)
      .pipeline(accumulator)
      .invoke;
  } else if (pipelineOption === 'isEven') {
    pipeSeqGen = pipeSequence(activeSequence.fn)
      .pipeline(isEven)
      .invoke;
  }

  const sequenceGen = generator(pipeSeqGen);
  return {
    type: ACTIVATE_SEQUENCE,
    sequenceGen,
  };
};

const fetchNextSequenceValue = sequenceGen => ({
  type: SEQUENCE_NEXT_VALUE,
  nextValue: sequenceGen.next(),
});

const selectPipeLine = pipelineOption => ({
  type: SELECT_PIPELINE,
  pipelineOption,
});

export {
  selectSequence, fetchNextSequenceValue, selectPipeLine, activateSequence,
};
