import { appSequence } from '../../src/redux/reducers';
import {
  SELECT_SEQUENCE,
  SEQUENCE_NEXT_VALUE,
  ACTIVATE_SEQUENCE,
  SELECT_PIPELINE,
} from '../../src/constants/redux';

describe('Reducer: appSequence ', () => {
  const initialState = {
    selectedSequence: 'testSequence',
    sequenceGen: {},
    sequenceValues: [],
    isActive: false,
    pipelineOption: 'none',
  };

  it('should update selectedSequence for SELECT_SEQUENCE', () => {
    const action = {
      type: SELECT_SEQUENCE,
      sequenceId: 'newSequence',
    };
    const newState = appSequence(initialState, action);
    const expectedState = {
      ...initialState,
      selectedSequence: action.sequenceId,
    };

    expect(newState).toEqual(expectedState);
  });

  it('should update sequenceValues for SEQUENCE_NEXT_VALUE', () => {
    const action = {
      type: SEQUENCE_NEXT_VALUE,
      nextValue: 2,
    };
    const newState = appSequence(initialState, action);
    const expectedState = {
      ...initialState,
      sequenceValues: [2],
    };

    expect(newState).toEqual(expectedState);
  });

  it('should update pipelineOption for SELECT_PIPELINE', () => {
    const action = {
      type: SELECT_PIPELINE,
      pipelineOption: 'newpipe',
    };
    const newState = appSequence(initialState, action);
    const expectedState = {
      ...initialState,
      pipelineOption: action.pipelineOption,
    };

    expect(newState).toEqual(expectedState);
  });

  it('should update state for ACTIVATE_SEQUENCE', () => {
    const action = {
      type: ACTIVATE_SEQUENCE,
      sequenceGen: { next: jest.fn() },
    };
    const newState = appSequence(initialState, action);
    const expectedState = {
      ...initialState,
      sequenceGen: action.sequenceGen,
      isActive: true,
    };

    expect(newState).toEqual(expectedState);
  });

  it('should return initial state for default case', () => {
    const newState = appSequence(initialState, { type: 'test' });

    expect(newState).toEqual(initialState);
  });
});
