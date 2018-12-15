import { createStore } from 'redux';

import { appReducers } from './reducers';

const initialState = {};

export const store = createStore(appReducers, initialState);
