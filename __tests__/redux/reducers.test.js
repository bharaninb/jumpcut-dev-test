import { appSequence } from '../../src/redux/reducers';
import { SELECT_SEQUENCE, SEQUENCE_NEXT_VALUE } from '../../src/constants/redux';

describe('Reducer: appSequence ', () => {
  const initialState = {
    selectedSequence: 'testSequence',
    sequenceGen: {},
    sequenceValues: [],
  };

  it('should update state for SELECT_SEQUENCE', () => {
    const action = {
      type: SELECT_SEQUENCE,
      sequenceId: 'newSequence',
      sequenceGen: { next: jest.fn() },
    };
    const newState = appSequence(initialState, action);
    const expectedState = {
      selectedSequence: action.sequenceId,
      sequenceGen: action.sequenceGen,
      sequenceValues: [],
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

  it('should return initial state for default case', () => {
    const newState = appSequence(initialState, { type: 'test' });

    expect(newState).toEqual(initialState);
  });
});
