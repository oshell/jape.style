import * as actions from '../actions/actions';
import PresentationController from '../controller/PresentationController';

const initialState = {
  zoomed: false,
  zoomedIndex: 0,
  scale: 0.1,
  position: {
    x: 0,
    y: 0,
    z: 0
  }
};

export const presentationReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.TOGGLE_ZOOM:
      return PresentationController.toggleZoom(state, action.payload);
    default:
      return initialState;
  }
};
