export const ADD_AREA = 'ADD_AREA';
export const ADD_ELEMENT = 'ADD_ELEMENT';
export const REMOVE_ELEMENT = 'REMOVE_ELEMENT';
export const EDIT = 'EDIT';
export const ACTIVATE = 'ACTIVATE';
export const TOGGLE_ZOOM = 'TOGGLE_ZOOM';

export const addArea = () => ({
  type: ADD_AREA,
  payload: {}
});

export const addElement = (type) => ({
  type: ADD_ELEMENT,
  payload: {type}
});

export const removeElement = (element) => ({
  type: REMOVE_ELEMENT,
  payload: {element}
});

export const edit = (generic) => ({
  type: EDIT,
  payload: {generic}
});

export const activate = (index) => ({
  type: ACTIVATE,
  payload: {index}
});

export const toggleZoom = (element) => ({
  type: TOGGLE_ZOOM,
  payload: {element}
});
