import { combineReducers } from 'redux';

import {
  SELECT_SEQUENCE,
  SEQUENCE_NEXT_VALUE,
  ACTIVATE_SEQUENCE,
  SELECT_PIPELINE,
} from '../constants/redux';

const initialState = {
  selectedSequence: 'factorial',
  sequenceGen: {},
  sequenceValues: [],
  isActive: false,
  pipelineOption: 'none',
};

export const appSequence = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SEQUENCE:
      return {
        ...state,
        selectedSequence: action.sequenceId,
        sequenceValues: [],
        isActive: false,
      };

    case SEQUENCE_NEXT_VALUE:
      return {
        ...state,
        sequenceValues: [...state.sequenceValues, action.nextValue],
      };

    case SELECT_PIPELINE:
      return {
        ...state,
        sequenceValues: [],
        isActive: false,
        pipelineOption: action.pipelineOption,
      };

    case ACTIVATE_SEQUENCE:
      return {
        ...state,
        isActive: true,
        sequenceGen: action.sequenceGen,
      };

    default:
      return state;
  }
};

export const appReducers = combineReducers({ appSequence });
