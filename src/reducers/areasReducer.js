import * as actions from '../actions/actions';
import EditorController from '../controller/EditorController';

const initialState = [];

export const areasReducer = (areas = {}, action) => {
  switch (action.type) {
    case actions.ADD_AREA:
      return EditorController.addArea(areas);
    case actions.ADD_ELEMENT:
      return areas;
    case actions.REMOVE_ELEMENT:
      return areas;
    case actions.EDIT:
      return EditorController.edit(action.payload.generic, areas);
    case actions.ACTIVATE_ELEMENT:
      return areas;
    default:
      if (areas.length) {
        return areas;
      }
      return initialState;
  }
};
