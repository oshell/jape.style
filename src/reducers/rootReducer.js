import { combineReducers } from 'redux';
import { elementsReducer } from './elementsReducer';

export const rootReducer = combineReducers({
  elements: elementsReducer
});
