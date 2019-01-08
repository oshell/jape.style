import { combineReducers } from 'redux';
import { areasReducer } from './areasReducer';
import { presentationReducer } from './presentationReducer';

export const rootReducer = combineReducers({
  areas: areasReducer,
  presentation: presentationReducer
});
