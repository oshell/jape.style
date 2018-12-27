import * as actions from '../actions/actions';
import EditorController from '../controller/EditorController';

const initialState = [];

export const elementsReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.ADD_ELEMENT:
      return EditorController.addDefaultElement(state);
    case actions.REMOVE_ELEMENT:
      return state;
    case actions.EDIT_ELEMENT:
      return EditorController.editElement(action.payload.element, state);
    case actions.ACTIVATE_ELEMENT:
      return EditorController.setActiveElement(action.payload.index, state);
    case actions.TOGGLE_ZOOM:
      return state;
    default:
      if (state.length) {
        return state;
      }
      return initialState;
  }
};
