import { combineReducers } from 'redux';

import sizeReducer from './size/reducer';

const rootReducer = combineReducers({
  boardSize: sizeReducer,
});

export default rootReducer;