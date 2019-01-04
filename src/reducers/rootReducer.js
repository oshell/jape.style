import { combineReducers } from 'redux';
import { elementsReducer } from './elementsReducer';
import { presentationReducer } from './presentationReducer';

export const rootReducer = combineReducers({
  elements: elementsReducer,
  presentation: presentationReducer
});
