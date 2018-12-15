import { combineReducers } from 'redux';

import { SELECT_SEQUENCE, SEQUENCE_NEXT_VALUE } from '../constants/redux';

const initialState = {
  selectedSequence: 'factorial',
  sequenceGen: {},
  sequenceValues: [],
};

export const appSequence = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SEQUENCE:
      return {
        ...state,
        selectedSequence: action.sequenceId,
        sequenceGen: action.sequenceGen,
        sequenceValues: [],
      };

    case SEQUENCE_NEXT_VALUE:
      return {
        ...state,
        sequenceValues: [...state.sequenceValues, action.nextValue],
      };

    default:
      return state;
  }
};

export const appReducers = combineReducers({ appSequence });
